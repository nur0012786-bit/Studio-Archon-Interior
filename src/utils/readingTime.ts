import { JournalPost } from '../data/studioData';

export interface ReadingTimeEstimate {
  minutes: number;
  wordCount: number;
  label: string;
}

/**
 * Standard reading speed in words per minute (WPM).
 */
export const STANDARD_READING_SPEED_WPM = 200;

/**
 * Counts total words in a text string.
 */
export function countWords(text: string): number {
  if (!text) return 0;
  const cleaned = text.replace(/<[^>]*>/g, ' ').trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

/**
 * Calculates reading time estimate based on total word count divided by 200 wpm.
 * Returns minutes (minimum 1), word count, and a formatted label (e.g., '3 min read').
 */
export function calculateReadingTime(
  post: JournalPost,
  wpm: number = STANDARD_READING_SPEED_WPM
): ReadingTimeEstimate {
  const contentText = Array.isArray(post.content) ? post.content.join(' ') : post.content || '';
  const fullText = `${post.title || ''} ${post.excerpt || ''} ${contentText}`;
  const wordCount = countWords(fullText);

  // Divide word count by 200 WPM
  const rawMinutes = wordCount / wpm;
  const minutes = Math.max(1, Math.ceil(rawMinutes));

  return {
    minutes,
    wordCount,
    label: `${minutes} min read`,
  };
}
