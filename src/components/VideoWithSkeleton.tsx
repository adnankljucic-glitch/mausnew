import React, { useState, forwardRef } from 'react';
import { SkeletonLoader } from './SkeletonLoader';

interface VideoWithSkeletonProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  skeletonClassName?: string;
  skeletonBorderRadius?: string;
}

export const VideoWithSkeleton = forwardRef<HTMLVideoElement, VideoWithSkeletonProps>(
  ({ skeletonClassName = '', skeletonBorderRadius, className = '', style, onCanPlay, children, ...props }, ref) => {
    const [ready, setReady] = useState(false);

    return (
      <>
        {!ready && (
          <SkeletonLoader
            className={skeletonClassName || className}
            style={style}
            borderRadius={skeletonBorderRadius}
          />
        )}
        <video
          {...props}
          ref={ref}
          className={className}
          style={{
            ...style,
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
          onCanPlay={(e) => {
            setReady(true);
            onCanPlay?.(e);
          }}
        >
          {children}
        </video>
      </>
    );
  }
);
