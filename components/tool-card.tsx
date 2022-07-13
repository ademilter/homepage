import { IAirtableImages, ITool } from "types/Tool";
import { motion, usePresence } from "framer-motion";
import IconLike from "./icons/like";
import cx from "classnames";

export default function VideoCard({ tool }: { tool: ITool }) {
  const { images, brand, name, wtf, rating, comment } = tool;
  const photo: IAirtableImages = images && images[0];

  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
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
    transition: { type: "spring", stiffness: 500, damping: 50, mass: 2 },
    onAnimationComplete: () => !isPresent && safeToRemove(),
  };

  return (
    <motion.article
      {...animations}
      className="rounded-lg bg-zinc-100 p-4 dark:bg-white dark:bg-opacity-10"
      style={{
        position: isPresent ? "static" : "absolute",
      }}
    >
      <div className="aspect-square overflow-hidden rounded-md">
        {photo && (
          <img
            src={photo.thumbnails.large.url}
            className="h-full w-full object-contain"
            alt=""
          />
        )}
      </div>

      <header className="mt-6 text-center">
        <h5 className="text-sm opacity-60">{brand ? brand : "-"}</h5>
        <h3 className="font-semibold dark:text-white">{name}</h3>
        <span className="text-sm opacity-60">{wtf}</span>
      </header>

      <div className="mt-6 rounded-md bg-white p-4 text-sm dark:bg-zinc-800">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((rate) => {
            return (
              <IconLike
                key={rate}
                size={10}
                className={cx(
                  rate <= rating
                    ? "fill-red-400 text-red-400 dark:fill-red-500 dark:text-red-500 dark:opacity-50"
                    : "fill-black text-black opacity-20 dark:fill-white dark:text-white"
                )}
              />
            );
          })}
        </div>

        <p className="mt-2 dark:opacity-80">{comment}</p>
      </div>
    </motion.article>
  );
}
