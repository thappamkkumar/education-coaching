
import Image from "next/image";
import {galleryData} from "@/content/galleryData";

 const Gallery  = ( ) => {
  return (
    <section id="gallery" className="w-full py-20 " >
		
      <div className=" max-w-7xl mx-auto
          px-6  px-4">

        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "var(--color-text-primary)" }}
        >
          Gallery
        </h2>

        <div className="masonry">
          {galleryData.map((src, index) => (
            <div key={index} className="masonry-item">
              <div
                className="relative w-full overflow-hidden rounded-xl"
                style={{
                  borderRadius: "var(--radius-base)",
                  boxShadow: "var(--shadow-soft)"
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;