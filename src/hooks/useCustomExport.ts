'use client';

import { RefObject } from 'react';

const useCustomExport = (canvasRef: RefObject<HTMLDivElement | null>, filename = 'charm-design-vluffy') => {
  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      const { toPng } = await import('html-to-image');

      await document.fonts.ready;

      const images = Array.from(canvasRef.current.querySelectorAll('img'));

      await Promise.all(
        images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            }),
        ),
      );

      const dataUrl = await toPng(canvasRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: '#ffffff',
        filter: (node) => {
          if (!(node instanceof HTMLElement)) return true;

          return !node.hasAttribute('data-download-ignore');
        },
      });

      const link = document.createElement('a');

      link.download = `${filename}-${Date.now()}.png`;
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('PNG Export Error:', error);
    }
  };

  return {
    handleDownload,
  };
};

export default useCustomExport;
