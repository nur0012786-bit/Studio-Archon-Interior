import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, Building2, Layers, BookOpen, Clock, MapPin, Users } from 'lucide-react';
import { PROJECTS, SERVICES, JOURNAL_POSTS, TEAM_MEMBERS, Project, Service, JournalPost, TeamMember } from '../data/studioData';
import { calculateReadingTime } from '../utils/readingTime';

type FilterCategory = 'all' | 'projects' | 'services' | 'journal' | 'team';

interface SearchResultItem {
  type: 'project' | 'service' | 'journal' | 'team';
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  image?: string;
  rawItem: Project | Service | JournalPost | TeamMember;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onSelectService: (service: Service) => void;
  onSelectArticle: (article: JournalPost) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onSelectService,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FilterCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input on open and lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setCategory('all');
      setSelectedIndex(0);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Transform and filter items based on query & category
  const results = useMemo<SearchResultItem[]>(() => {
    const q = query.trim().toLowerCase();

    const projectItems: SearchResultItem[] = PROJECTS.map((p) => ({
      type: 'project',
      id: `proj-${p.id}`,
      title: p.title,
      subtitle: `${p.category} · ${p.location} · ${p.year}`,
      badge: p.category,
      description: p.summary,
      image: p.image,
      rawItem: p,
    }));

    const serviceItems: SearchResultItem[] = SERVICES.map((s) => ({
      type: 'service',
      id: `serv-${s.id}`,
      title: `${s.number} ${s.title}`,
      subtitle: `Deliverables: ${s.deliverables.slice(0, 3).join(', ')}`,
      badge: 'Service',
      description: s.shortDesc,
      rawItem: s,
    }));

    const journalItems: SearchResultItem[] = JOURNAL_POSTS.map((j) => {
      const readTime = calculateReadingTime(j);
      return {
        type: 'journal',
        id: `jour-${j.id}`,
        title: j.title,
        subtitle: `${j.category} · ${j.date} · ${readTime.label}`,
        badge: 'Journal',
        description: j.excerpt,
        image: j.image,
        rawItem: j,
      };
    });

    const teamItems: SearchResultItem[] = TEAM_MEMBERS.map((t) => ({
      type: 'team',
      id: `team-${t.id}`,
      title: t.name,
      subtitle: `${t.role} · ${t.credentials}`,
      badge: 'Team',
      description: `${t.specialty} — ${t.bio}`,
      image: t.image,
      rawItem: t,
    }));

    let combined: SearchResultItem[] = [];
    if (category === 'all' || category === 'projects') combined.push(...projectItems);
    if (category === 'all' || category === 'services') combined.push(...serviceItems);
    if (category === 'all' || category === 'journal') combined.push(...journalItems);
    if (category === 'all' || category === 'team') combined.push(...teamItems);

    if (!q) {
      // Default curated view when no query is typed
      return combined;
    }

    return combined.filter((item) => {
      const textToSearch = [
        item.title,
        item.subtitle,
        item.badge,
        item.description,
        item.type === 'project'
          ? (item.rawItem as Project).materials.join(' ') + ' ' + (item.rawItem as Project).scope.join(' ')
          : '',
        item.type === 'service'
          ? (item.rawItem as Service).fullDesc + ' ' + (item.rawItem as Service).deliverables.join(' ')
          : '',
        item.type === 'journal'
          ? (item.rawItem as JournalPost).content.join(' ')
          : '',
        item.type === 'team'
          ? (item.rawItem as TeamMember).role + ' ' + (item.rawItem as TeamMember).quote + ' ' + (item.rawItem as TeamMember).specialty
          : '',
      ]
        .join(' ')
        .toLowerCase();

      return textToSearch.includes(q);
    });
  }, [query, category]);

  // Keep selected index in bounds when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, category]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          results.length > 0 ? (prev - 1 + results.length) % results.length : 0
        );
      } else if (e.key === 'Enter') {
        if (results.length > 0 && results[selectedIndex]) {
          e.preventDefault();
          handleSelectItem(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const handleSelectItem = (item: SearchResultItem) => {
    onClose();
    if (item.type === 'project') {
      onSelectProject(item.rawItem as Project);
    } else if (item.type === 'service') {
      onSelectService(item.rawItem as Service);
    } else if (item.type === 'journal') {
      onSelectArticle(item.rawItem as JournalPost);
    } else if (item.type === 'team') {
      const teamSection = document.getElementById('team');
      if (teamSection) {
        const navHeight = 80;
        const elementPosition = teamSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center items-start p-4 sm:p-6 lg:p-12 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search Studio Archon projects, services, and journal"
    >
      <div
        className="relative bg-[#F7F3ED] border border-[#E5DED2] rounded-lg max-w-2xl w-full my-auto sm:my-8 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E5DED2] bg-[#FAF8F5]">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#59624D] absolute left-3.5 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search architecture, services, materials, articles..."
              className="w-full pl-11 pr-20 py-3 bg-[#EFE9DF]/60 focus:bg-white text-[#1E211C] placeholder-[#6C745E]/60 text-sm sm:text-base rounded-md border border-[#D5CCBD]/70 focus:border-[#59624D] focus:ring-1 focus:ring-[#59624D] outline-none transition-all duration-200"
            />
            {query ? (
              <button
                onClick={() => setQuery('')}
                className="absolute right-10 p-1.5 text-[#6C745E] hover:text-[#1E211C] transition-colors rounded-sm"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
            <button
              onClick={onClose}
              className="absolute right-2.5 p-1.5 text-[#6C745E] hover:text-[#1E211C] transition-colors rounded-sm focus:outline-none"
              aria-label="Close search"
            >
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-mono font-medium text-[#6C745E] bg-[#E5DED2]/60 border border-[#D5CCBD] rounded">
                Esc
              </kbd>
              <X className="w-5 h-5 sm:hidden" />
            </button>
          </div>

          {/* Quick Filter Category Tabs */}
          <div className="flex items-center gap-1.5 mt-3 pt-2 text-xs overflow-x-auto no-scrollbar">
            <span className="text-[#6C745E] font-medium text-[11px] uppercase tracking-wider mr-1">
              Filter:
            </span>
            {(
              [
                { id: 'all', label: 'All', icon: Sparkles },
                { id: 'projects', label: 'Projects', icon: Building2 },
                { id: 'services', label: 'Services', icon: Layers },
                { id: 'journal', label: 'Journal', icon: BookOpen },
                { id: 'team', label: 'Team', icon: Users },
              ] as const
            ).map((tab) => {
              const Icon = tab.icon;
              const isActive = category === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-all duration-200 text-xs font-medium cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#1E211C] text-[#F7F3ED]'
                      : 'bg-[#EFE9DF]/80 hover:bg-[#E5DED2] text-[#292923]/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-3 sm:p-4 space-y-2 flex-grow min-h-[220px]">
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-selected={isSelected}
                  onClick={() => handleSelectItem(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`group relative p-3 sm:p-3.5 rounded-md border transition-all duration-150 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-white border-[#59624D] shadow-sm'
                      : 'bg-[#FAF8F5]/80 hover:bg-white border-[#E5DED2]'
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Thumbnail if available */}
                    {item.image ? (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded overflow-hidden bg-[#EFE9DF] shrink-0 border border-[#E5DED2]">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded bg-[#EFE9DF] shrink-0 border border-[#E5DED2] flex items-center justify-center text-[#59624D]">
                        <Layers className="w-6 h-6 opacity-75" />
                      </div>
                    )}

                    {/* Content text */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs ${
                            item.type === 'project'
                              ? 'bg-[#59624D]/10 text-[#59624D]'
                              : item.type === 'service'
                              ? 'bg-[#A58B65]/15 text-[#886D48]'
                              : item.type === 'team'
                              ? 'bg-[#2C3524]/15 text-[#2C3524] font-bold'
                              : 'bg-[#1E211C]/10 text-[#1E211C]'
                          }`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-[11px] text-[#6C745E] truncate">
                          {item.subtitle}
                        </span>
                      </div>

                      <h4 className="font-serif text-base sm:text-lg text-[#1E211C] font-normal leading-snug group-hover:text-[#59624D] transition-colors truncate">
                        {item.title}
                      </h4>

                      <p className="text-xs text-[#292923]/70 line-clamp-1 mt-0.5 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Enter / Select Hint */}
                  <div className="hidden sm:flex items-center gap-1 text-xs text-[#6C745E] group-hover:text-[#1E211C] shrink-0">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-medium uppercase tracking-wider">
                      Open
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-[#EFE9DF] text-[#6C745E] flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl text-[#1E211C] mb-1 font-normal">
                No matching results
              </h4>
              <p className="text-xs text-[#6C745E] max-w-xs mx-auto mb-4">
                We couldn't find anything matching &ldquo;{query}&rdquo;. Try another material, room type, or discipline.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#59624D]">
                <span className="text-[#6C745E] text-[11px]">Popular:</span>
                {['Residential', 'Limestone', 'Millwork', 'Lighting', 'Townhouse'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2 py-0.5 bg-[#EFE9DF] hover:bg-[#E5DED2] rounded-xs text-xs font-medium cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Keyboard Shortcuts */}
        <div className="px-4 py-3 bg-[#EFE9DF]/60 border-t border-[#E5DED2] flex items-center justify-between text-[11px] text-[#6C745E]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-white border border-[#D5CCBD] rounded text-[10px] font-mono">↑</kbd>
              <kbd className="px-1 py-0.5 bg-white border border-[#D5CCBD] rounded text-[10px] font-mono">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-[#D5CCBD] rounded text-[10px] font-mono">↵</kbd>
              <span>to select</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-white border border-[#D5CCBD] rounded text-[10px] font-mono">esc</kbd>
              <span>to close</span>
            </span>
          </div>

          <div className="font-medium text-[#59624D]">
            {results.length} {results.length === 1 ? 'item' : 'items'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchModal;
