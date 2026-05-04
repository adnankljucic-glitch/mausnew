import React, { useState } from 'react';
import { SkeletonLoader } from './SkeletonLoader';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
  skeletonBorderRadius?: string;
}

export function ImageWithSkeleton({
  skeletonClassName = '',
  skeletonBorderRadius,
  className = '',
  style,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <SkeletonLoader
          className={skeletonClassName || className}
          style={style}
          borderRadius={skeletonBorderRadius}
        />
      )}
      <img
        {...props}
        className={className}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </>
  );
}
