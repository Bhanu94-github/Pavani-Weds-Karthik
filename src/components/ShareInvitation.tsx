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
    <section className="share-luxury-section" aria-labelledby="share-title">
      <div className="share-header-block">
        <span className="eyebrow-tag">Blessings &amp; Joy</span>
        <h2 id="share-title" className="section-heading-luxury">
          Share the Wedding Invitation
        </h2>
        <p className="section-intro-luxury">
          Please forward this sacred invitation to beloved elders, family members, and friends.
        </p>
      </div>

      <div className="share-buttons-row">
        <button
          type="button"
          className="btn-royal-gold share-btn-item"
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
          className="btn-royal-outline share-btn-item whatsapp-btn"
          aria-label="Share via WhatsApp"
        >
          <MessageCircle size={18} />
          <span>Share on WhatsApp</span>
        </a>

        <button
          type="button"
          className="btn-royal-outline share-btn-item"
          onClick={handleCopyLink}
          aria-label="Copy invitation link"
        >
          {copied ? <Check size={18} className="text-green" /> : <Copy size={18} />}
          <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
        </button>
      </div>

      <style>{`
        .share-luxury-section {
          margin: 3.5rem 0;
          text-align: center;
        }
        .share-buttons-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          max-width: 650px;
          margin: 0 auto;
        }
        .share-btn-item {
          padding: 0.85rem 1.6rem;
        }
        .whatsapp-btn {
          border-color: #25D366;
          color: #128C7E;
        }
        .whatsapp-btn:hover {
          background: rgba(37, 211, 102, 0.1);
        }
        .text-green {
          color: #2E7D32;
        }
        @media (max-width: 600px) {
          .share-buttons-row {
            flex-direction: column;
          }
          .share-btn-item {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
