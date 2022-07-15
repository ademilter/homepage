import { IAirtableImages, ITool } from "types/Tool";
import { motion, usePresence } from "framer-motion";
import Text from "./text";
import Rating from "./rating";

export default function VideoCard({ tool }: { tool: ITool }) {
  const { images, brand, name, rating, comment } = tool;
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
        <Text as="h5" size="small" dim={2}>
          {brand ? brand : "-"}
        </Text>
        <Text as="h3" className="font-semibold">
          {name}
        </Text>
      </header>

      <div className="mt-6 rounded-md bg-white p-4 text-center dark:bg-zinc-800">
        <div className="flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((rate) => {
            return <Rating key={rate} rate={rate} rating={rating} />;
          })}
        </div>

        <Text as="p" size="small" className="mt-2" dim={2}>
          {comment}
        </Text>
      </div>
    </motion.article>
  );
}
