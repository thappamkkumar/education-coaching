"use client";

import { FC } from "react";
import { useState, useEffect } from "react";
import { galleryData } from "@/content/galleryData";
import GalleryGrid from "./GalleryGrid";
import GalleryPagination from "./GalleryPagination";
import GalleryModal from "./GalleryModal";
import type { GalleryItem } from "@/types/gallery";

const Gallery: FC = ()  => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(10);
      else if (window.innerWidth < 1024) setItemsPerPage(15);
      else setItemsPerPage(20);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(galleryData.length / itemsPerPage);
  const paginatedData = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Navigate to top of gallery on page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const el = document.getElementById("gallery"); 
		if (el) {
			window.scrollBy(0, -50); // adjust scroll offset before smooth scroll
			setTimeout(() => {
				el.scrollIntoView({ behavior: 'smooth' });
			}, 10);
		}
  };

  return (
    <section
      id="gallery"
      className="w-full py-20 bg-[var(--color-background)]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
         <h2
          id="gallery-heading"
          className="text-3xl  md:text-4xl font-bold text-center mb-2 text-[var(--color-text-primary)]"
        >
          Snapshots of Our Work
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          A curated collection showcasing our projects, creativity, and achievements.
        </p>

        <GalleryGrid data={paginatedData} onSelectImage={setSelectedImage} />

        {galleryData.length > itemsPerPage && (
          <GalleryPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {selectedImage && <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
      </div>
    </section>
  );
};

export default Gallery;
