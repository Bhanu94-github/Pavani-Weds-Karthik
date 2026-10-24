/**
 * Utilities for sharing invitation and clipboard operations
 */

export interface ShareData {
  title: string;
  text: string;
  url?: string;
}

export async function shareInvitation(data: ShareData): Promise<{ success: boolean; method: 'native' | 'clipboard' | 'failed' }> {
  const shareUrl = data.url || (typeof window !== 'undefined' ? window.location.href : '');

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: data.title,
        text: data.text,
        url: shareUrl
      });
      return { success: true, method: 'native' };
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') {
        // User cancelled share dialog
        return { success: false, method: 'native' };
      }
      // Fall through to clipboard if share threw unexpected error
    }
  }

  // Fallback to Clipboard API
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(shareUrl);
      return { success: true, method: 'clipboard' };
    } catch {
      // Failed clipboard write
    }
  }

  return { success: false, method: 'failed' };
}
