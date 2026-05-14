import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { cn } from "./ui/utils";

type ProjectPhotosGalleryModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectTitle: string;
  images: string[];
};

export function ProjectPhotosGalleryModal({
  open,
  onOpenChange,
  projectTitle,
  images,
}: ProjectPhotosGalleryModalProps) {
  const count = images.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open, projectTitle]);

  const clampedIndex = count > 0 ? Math.min(index, count - 1) : 0;
  const showNav = count > 1;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!open || !showNav) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, showNav, goPrev, goNext]);

  if (count === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-[min(100vw-1.5rem,56rem)] gap-0 overflow-hidden border-[#e6e6e6] p-0 sm:max-w-[min(100vw-2rem,56rem)]",
          "bg-white text-[#1b1c1c]",
        )}
      >
        <DialogHeader className="border-b border-[#e6e6e6] px-6 py-5 pr-14 text-left">
          <DialogTitle
            className="text-[#1b1c1c] pr-2 text-xl tracking-tight sm:text-2xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            {projectTitle}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Galería de fotografías del proyecto. Use las flechas o los puntos para
            cambiar de imagen.
          </DialogDescription>
          {showNav && (
            <p
              className="text-xs tracking-widest text-[#8192a7] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              aria-live="polite"
            >
              Foto {clampedIndex + 1} de {count}
            </p>
          )}
        </DialogHeader>

        <div className="relative aspect-[16/10] w-full bg-[#041627]">
          <ImageWithFallback
            key={images[clampedIndex]}
            src={images[clampedIndex]}
            alt={`${projectTitle} — foto ${clampedIndex + 1}`}
            className="absolute inset-0 h-full w-full object-contain"
          />

          {showNav && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute top-1/2 left-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#041627]/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#EEA906] hover:text-[#041627] hover:border-[#EEA906] md:left-4"
                aria-label="Fotografía anterior"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute top-1/2 right-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#041627]/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#EEA906] hover:text-[#041627] hover:border-[#EEA906] md:right-4"
                aria-label="Fotografía siguiente"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={2} />
              </button>
            </>
          )}
        </div>

        {showNav && (
          <div className="flex items-center justify-center gap-2 border-t border-[#e6e6e6] bg-[#f6f3f2] px-4 py-4">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all duration-200",
                  i === clampedIndex
                    ? "w-8 bg-[#EEA906]"
                    : "bg-[#c4c4c4] hover:bg-[#EEA906]/60",
                )}
                aria-label={`Ir a la foto ${i + 1}`}
                aria-current={i === clampedIndex ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
