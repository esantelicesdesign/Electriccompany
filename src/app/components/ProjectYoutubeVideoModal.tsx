import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { cn } from "./ui/utils";

type ProjectYoutubeVideoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectTitle: string;
  /** ID del video de YouTube (p. ej. desde youtube.com/shorts/XXXX) */
  videoId: string | null;
};

export function ProjectYoutubeVideoModal({
  open,
  onOpenChange,
  projectTitle,
  videoId,
}: ProjectYoutubeVideoModalProps) {
  const embedSrc =
    videoId != null && videoId.length > 0
      ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`
      : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-[min(100vw-1.5rem,22rem)] gap-0 overflow-hidden border-[#e6e6e6] p-0 sm:max-w-[min(100vw-2rem,22rem)]",
          "bg-white text-[#1b1c1c]",
        )}
      >
        <DialogHeader className="border-b border-[#e6e6e6] px-5 py-4 pr-12 text-left">
          <DialogTitle
            className="text-[#1b1c1c] text-lg leading-tight tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            {projectTitle}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Reproductor de video de YouTube embebido del proyecto.
          </DialogDescription>
        </DialogHeader>

        <div className="relative aspect-[9/16] w-full bg-black">
          {open && embedSrc != null ? (
            <iframe
              title={`Video: ${projectTitle}`}
              src={embedSrc}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
