import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: string;
}

export function SkeletonLoader({ className = '', style, borderRadius }: SkeletonLoaderProps) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{ borderRadius, ...style }}
    />
  );
}
