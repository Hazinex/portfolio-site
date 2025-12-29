"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLast, ChevronLeft, ChevronRight, Cross, X } from "lucide-react"
import { useEffect, useState } from "react"

type Image = {
  src: string
  alt: string
}

export function GalleryLightbox({
  images,
  startIndex = 0,
  onClose,
}: {
  images: Image[]
  startIndex?: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () =>
    setIndex((i) => (i + 1) % images.length)

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Image container */}
        <motion.div
          className="relative max-w-[90vw] max-h-[90vh]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x > 20) prev()
            if (info.offset.x < -20) next()
          }}
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            draggable={false}
          />

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {index + 1} / {images.length}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-70 hover:cursor-pointer"
          >
            <X />
          </button>

          {/* Navigation buttons (desktop) */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 px-4 text-white text-4xl hover:opacity-70 hover:cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 px-4 text-white text-4xl hover:opacity-70 hover:cursor-pointer"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
