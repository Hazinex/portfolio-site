"use client"

import { Play } from "lucide-react"

type GalleryItem = {
  src: string
  alt: string
  type?: "image" | "video"
  thumbnail?: string
}

export function GalleryPreview({
  images,
  onOpen,
}: {
  images: GalleryItem[]
  onOpen: (index: number) => void
}) {
  const preview = images.slice(0, 4)

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-xl overflow-hidden">
      {preview.map((item, index) => (
        <button
          key={item.src}
          onClick={() => onOpen(index)}
          className="relative aspect-4/3 overflow-hidden hover:cursor-pointer group"
        >
          {/* eslint-disable-next-line */}
          <img
            src={item.type === "video" && item.thumbnail ? item.thumbnail : item.src}
            alt={item.alt}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {item.type === "video" && (
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <Play className="text-white fill-white" size={32} />
            </div>
          )}

          {index === 3 && images.length > 4 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                +{images.length - 4}
              </span>
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
