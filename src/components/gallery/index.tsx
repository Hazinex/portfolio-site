"use client"

import { useState } from "react"
import { GalleryPreview } from "@/components/gallery/GalleryPreview"
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox"

type GalleryItem = {
  src: string
  alt: string
  type?: "image" | "video"
  thumbnail?: string
}

type ProjectGalleryProps = {
  images: GalleryItem[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <GalleryPreview
        images={images}
        onOpen={(index) => setOpenIndex(index)}
      />

      {openIndex !== null && (
        <GalleryLightbox
          images={images}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  )
}
