import { IAirtableImages, ITool } from "types/Tool";
import { motion, usePresence } from "framer-motion";

export default function VideoCard({ tool }: { tool: ITool }) {
  const { images, brand, name, rating, comment } = tool;
  const photo: IAirtableImages = images && images[0];

  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
    style: {
      position: isPresent ? "static" : "absolute",
    },
    animate: isPresent ? "in" : "out",
    variants: {
      in: {
        scale: 1,
        opacity: 1,
      },
      out: {
        scale: 0.8,
        opacity: 0,
        zIndex: -1,
        transition: { duration: 0 },
      },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { type: "spring", stiffness: 800, damping: 50, mass: 1 },
  };

  return (
    <motion.article
      {...animations}
      className="rounded bg-zinc-100 p-4 dark:bg-white dark:bg-opacity-10"
    >
      <div className="aspect-square overflow-hidden rounded bg-zinc-100">
        {photo && (
          <img
            src={photo.thumbnails.large.url}
            className="h-full w-full bg-white object-contain"
            alt=""
          />
        )}
      </div>

      <header className="mt-6">
        <h5 className="text-sm opacity-60">{brand ? brand : "-"}</h5>
        <h3 className="font-semibold dark:text-white">{name}</h3>
      </header>

      <div className="mt-6 rounded bg-white p-3 text-sm dark:bg-zinc-800">
        <span className="flex items-center gap-0.5">
          <span>{rating}</span>
          <span className="opacity-50">/</span>
          <span className="opacity-50">5</span>
        </span>

        <p className="mt-1">{comment}</p>
      </div>
    </motion.article>
  );
}
