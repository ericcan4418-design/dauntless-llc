"use client";
import { useRef, useEffect } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
}

/**
 * Autoplaying, muted, looping hero video.
 * Drop a 15-20 sec clip in and it loops silently in the background.
 * Usage: <HeroVideo src="/videos/hero-loop.mp4" poster="/images/hero-poster.jpg" />
 */
export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {}); // autoplay may be blocked — fails silently
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border shadow-sm shadow-black/[0.06]"
         style={{ aspectRatio: "16/9" }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl" />
    </div>
  );
}
