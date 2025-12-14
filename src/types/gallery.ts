export interface GalleryItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface GalleryGridProps {
  data: GalleryItem[];
  onSelectImage: (item: GalleryItem) => void;
}

export interface GalleryModalProps {
  image: GalleryItem;
  onClose: () => void;
}

export interface GalleryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export type GalleryHeading  = {
  galleryPrimaryHeading: string;
  gallerySubHeading: string;
};