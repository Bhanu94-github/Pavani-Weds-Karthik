import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';
import { ShareConfig } from '../types/wedding';
import { shareInvitation } from '../utils/sharing';

interface Props {
  config: ShareConfig;
  onToast: (msg: string) => void;
}

export const ShareInvitation: React.FC<Props> = ({ config, onToast }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const res = await shareInvitation(config);
    if (res.method === 'native' && res.success) {
      onToast('Invitation shared successfully!');
    } else if (res.method === 'clipboard' && res.success) {
      setCopied(true);
      onToast('Invitation link copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } else if (res.method === 'failed') {
      onToast('Could not share automatically. Please copy the browser URL.');
    }
  };

  const handleCopyLink = async () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : (config.url || '');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        onToast('Invitation link copied to clipboard!');
        setTimeout(() => setCopied(false), 3000);
      } catch {
        onToast('Failed to copy. Please copy the URL manually.');
      }
    }
  };

  const shareText = encodeURIComponent(`${config.title}\n\n${config.text}\n\n${typeof window !== 'undefined' ? window.location.href : ''}`);
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  return (
    <section className="share-section" aria-labelledby="share-title">
      <div className="section-header-block">
        <span className="eyebrow-text">Spread the Joy</span>
        <h2 id="share-title" className="section-title">Share the Invitation</h2>
        <p className="section-subtitle">
          Pass along the celebration details to beloved family members and friends.
        </p>
      </div>

      <div className="share-buttons-container">
        <button
          type="button"
          className="btn-gold share-main-btn"
          onClick={handleShare}
          aria-label="Share invitation"
        >
          <Share2 size={18} />
          <span>Share Invitation</span>
        </button>

        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline whatsapp-share-link"
          aria-label="Share via WhatsApp"
        >
          <MessageCircle size={18} />
          <span>Share on WhatsApp</span>
        </a>

        <button
          type="button"
          className="btn-outline copy-link-btn"
          onClick={handleCopyLink}
          aria-label="Copy invitation link"
        >
          {copied ? <Check size={18} className="text-green" /> : <Copy size={18} />}
          <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
        </button>
      </div>

      <style>{`
        .share-section {
          margin: 3.5rem 0;
          text-align: center;
        }
        .share-buttons-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          max-width: 600px;
          margin: 1.5rem auto 0;
        }
        .share-main-btn, .whatsapp-share-link, .copy-link-btn {
          padding: 0.8rem 1.6rem;
          font-size: 0.96rem;
        }
        .text-green {
          color: #2E7D32;
        }
        @media (max-width: 600px) {
          .share-buttons-container {
            flex-direction: column;
            width: 100%;
          }
          .share-main-btn, .whatsapp-share-link, .copy-link-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
