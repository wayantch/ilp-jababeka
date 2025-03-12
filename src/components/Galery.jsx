import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "assets/gallery/image2.jpg",
      alt: "Lokasi Kursus Bahasa",
      description: "Gedung kursus bahasa dengan fasilitas modern dan nyaman.",
    },
    {
      src: "assets/gallery/image1.jpg",
      alt: "Kota di malam hari",
      description: "Pembelajaran yang menyenangkan",
    },
    {
      src: "assets/gallery/image7.jpg",
      alt: "Gunung yang tinggi",
      description: "Memperkenalkan ILP di santoleo",
    },
    {
      src: "assets/gallery/ciktim.jpg",
      alt: "Hutan hijau yang lebat",
      description: "Memperkenalkan ILP di SMAN 1 Ciktim",
    },
    {
      src: "assets/gallery/image5.jpg",
      alt: "Pantai yang eksotis",
      description: "Rapat manajemen tim",
    },
  ];

  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Galeri</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:grid-rows-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
              <p className="text-white text-sm text-center">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
