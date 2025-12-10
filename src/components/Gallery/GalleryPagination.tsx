"use client";

import { FC } from "react";

interface GalleryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const GalleryPagination: FC<GalleryPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-15">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded bg-[var(--color-primary)] text-white disabled:opacity-50 cursor-pointer"
      >
        Prev
      </button>
      <span className="text-[var(--color-text-primary)]">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded bg-[var(--color-primary)] text-white disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default GalleryPagination;
