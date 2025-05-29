import { useState } from "react";
import Icon from "@/components/ui/icon";

interface PortraitItem {
  id: number;
  url: string;
  title: string;
  description: string;
}

const portraits: PortraitItem[] = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/files/973cf71b-17b7-4ccc-8e93-1145987c6182.jpg",
    title: "Golden Hour",
    description: "Портрет в тёплом свете",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400",
    title: "Natural Light",
    description: "Естественное освещение",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    title: "Studio Portrait",
    description: "Студийная съёмка",
  },
];

export default function PortraitGallery() {
  const [selectedImage, setSelectedImage] = useState<PortraitItem | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-3xl font-light tracking-wide">Portrait Gallery</h1>
        <p className="text-gray-400 mt-2">Коллекция портретной фотографии</p>
      </header>

      {/* Gallery Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portraits.map((portrait) => (
            <div
              key={portrait.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(portrait)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900">
                <img
                  src={portrait.url}
                  alt={portrait.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-medium">{portrait.title}</h3>
                    <p className="text-sm text-gray-300">
                      {portrait.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h2 className="text-2xl font-light">{selectedImage.title}</h2>
              <p className="text-gray-300 mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
