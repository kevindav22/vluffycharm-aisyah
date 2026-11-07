'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import { FaImages } from 'react-icons/fa';
import { profilData } from '@/data/statisData';

type SafeImageProps = ImageProps & {
  useNativeImg?: boolean;
  fallbackIcon?: React.ReactNode;
  fallbackClassName?: string;
};

const SafeImage = ({ useNativeImg = false, fallbackIcon, fallbackClassName, className, src, alt, ...props }: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);
  const resolvedAlt = alt || profilData.name || 'Foto produk';
  const { fill, priority, quality, sizes, placeholder, blurDataURL, loader, ...imgProps } = props;

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
        {fallbackIcon || <FaImages className={fallbackClassName || 'text-5xl text-slate-300'} />}
      </div>
    );
  }

  if (useNativeImg) {
    return (
      <img
        src={typeof src === 'string' ? src : ''}
        alt={resolvedAlt}
        draggable={false}
        className={className}
        onError={() => setHasError(true)}
      />
    );
  }

  return <Image {...props} src={src} alt={resolvedAlt} className={className} onError={() => setHasError(true)} />;
};

export default SafeImage;
