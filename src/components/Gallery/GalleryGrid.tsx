"use client";

import Image from "next/image";
import { FC } from "react";

interface GalleryGridProps {
  data: { src: string; alt: string }[];
  onSelectImage: (item: { src: string; alt: string }) => void;
}

const GalleryGrid: FC<GalleryGridProps> = ({ data, onSelectImage }) => {
  return (
    <div className="masonry">
      {data.map((item, index) => (
        <div
          key={index}
          className="masonry-item relative w-full rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => onSelectImage(item)}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={500}
            height={600}
            className="w-full h-auto object-cover cursor-pointer"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
 
     </div>
  );
};

export default GalleryGrid;
