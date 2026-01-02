"use client"

type Image = {
  src: string
  alt: string
}

export function GalleryPreview({
  images,
  onOpen,
}: {
  images: Image[]
  onOpen: (index: number) => void
}) {
  const preview = images.slice(0, 4)

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-xl overflow-hidden">
      {preview.map((img, index) => (
        <button
          key={img.src}
          onClick={() => onOpen(index)}
          className="relative aspect-4/3 overflow-hidden hover:cursor-pointer"
        >
          {/* eslint-disable-next-line */} 
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />

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
