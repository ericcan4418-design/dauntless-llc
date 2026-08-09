"use client";
import { useState, useRef } from "react";
import { Play, X } from "lucide-react";

interface VideoCardProps {
  name: string;
  context: string;
  quote: string;
  /** Direct MP4 URL, Cloudflare Stream URL, or YouTube embed URL */
  src?: string;
  /** Poster/thumbnail image URL */
  poster?: string;
  /** Aspect ratio for the video — default 16/9 */
  aspect?: "16/9" | "9/16";
}

export default function VideoCard({ name, context, quote, src, poster, aspect = "16/9" }: VideoCardProps) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTube = src?.includes("youtube.com") || src?.includes("youtu.be");
  const isIframe  = isYouTube || src?.includes("iframe");

  const paddingTop = aspect === "9/16" ? "177.78%" : "56.25%";

  if (!src) {
    /* ── placeholder card (no video yet) ── */
    return (
      <div className="py-6 grid md:grid-cols-[13rem_1fr] gap-5 items-start border-b border-border">
        <div>
          <div className="text-[14px] font-semibold text-ink">{name}</div>
          <div className="text-[12px] text-faint mt-0.5">{context}</div>
        </div>
        <p className="text-[14px] text-muted leading-relaxed">"{quote}"</p>
      </div>
    );
  }

  return (
    <>
      {/* ── testimonial row with play thumb ── */}
      <div className="py-6 grid md:grid-cols-[13rem_1fr] gap-5 items-start border-b border-border group">
        <div>
          <div className="text-[14px] font-semibold text-ink">{name}</div>
          <div className="text-[12px] text-faint mt-0.5">{context}</div>
        </div>
        <div className="flex items-start gap-4">
          {/* thumbnail */}
          <button
            onClick={() => setOpen(true)}
            className="relative shrink-0 w-24 h-14 rounded-lg overflow-hidden border border-border bg-paper hover:border-green/40 transition-colors"
            aria-label={`Play ${name}'s video`}
          >
            {poster
              ? <img src={poster} alt="" className="w-full h-full object-cover" />
              : <div className="w-full h-full bg-gradient-to-br from-paper to-warm" />
            }
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                <Play className="w-3 h-3 text-green fill-green ml-0.5" />
              </div>
            </div>
          </button>
          <p className="text-[14px] text-muted leading-relaxed">"{quote}"</p>
        </div>
      </div>

      {/* ── lightbox ── */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white flex items-center gap-1.5 text-[13px]"
            >
              <X className="w-4 h-4" /> Close
            </button>

            <div className="relative rounded-xl overflow-hidden" style={{ paddingTop }}>
              {isIframe ? (
                <iframe
                  src={src}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video
                  ref={videoRef}
                  src={src}
                  poster={poster}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>

            <div className="mt-3 text-white text-sm font-medium">{name}
              <span className="text-white/50 font-normal ml-2">· {context}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
