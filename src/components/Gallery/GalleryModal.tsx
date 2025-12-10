"use client";

import Image from "next/image";
import { FC } from "react";
import { X } from "lucide-react";


interface GalleryModalProps {
  image: { src: string; alt: string };
  onClose: () => void;
}

const GalleryModal: FC<GalleryModalProps> = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80     p-4"
     >
      
 
			<button
				onClick={onClose}
				className="fixed top-4 right-4 bg-black/50 text-white z-50 hover:opacity-80 cursor-pointer rounded-full p-2"
				aria-label="Close gallery image"
			>
				<X className="w-6 h-6" strokeWidth={2} />
			</button>



      {/* Image Container */}
      <div
        className="relative cursor-auto"
        onClick={(e) => e.stopPropagation()} // prevent modal close on image click
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 1200}
          height={image.height || 900}
          className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-xl"
          priority
        />
      </div>
    </div>
  );
};

export default GalleryModal;
