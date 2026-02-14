"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallback?: ReactNode;
}

export function SafeImage({
  src,
  alt,
  className,
  sizes,
  priority,
  fallback,
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if src is valid on mount
  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    // Preload image to check if it's valid
    const img = new window.Image();
    img.onload = () => setLoading(false);
    img.onerror = () => setError(true);
    img.src = src;
  }, [src]);

  // Show fallback if error or no valid src
  if (error || !src) {
    return (
      fallback ?? (
        <div className="flex h-full w-full items-center justify-center bg-[rgba(255,255,255,0.04)]">
          <span className="text-xs uppercase tracking-wider text-[rgba(255,255,255,0.4)]">
            Image
          </span>
        </div>
      )
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      unoptimized
      onError={() => setError(true)}
    />
  );
}
