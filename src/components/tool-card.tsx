"use client";

import type { IAirtableImages, ITool } from "@/types";
import { motion, usePresence } from "framer-motion";
import Image from "next/image";
import Rating from "@/components/rating";

export default function ToolCard({ tool }: { tool: ITool }) {
  const { images, brand, name, rating, comment } = tool.fields;
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
      className="rounded-lg bg-zinc-100 p-4 dark:bg-white/10"
      style={{
        position: isPresent ? "static" : "absolute",
      }}
    >
      <figure className="aspect-square overflow-hidden rounded-md">
        {photo && (
          <Image
            src={photo.thumbnails.large.url}
            className="h-full w-full object-contain"
            alt={`${brand} ${name}`}
            width={photo.thumbnails.large.width}
            height={photo.thumbnails.large.height}
          />
        )}
      </figure>

      <header className="mt-6 text-center">
        <h5 className="text-sm">{brand ? brand : "-"}</h5>
        <h3 className="shine font-semibold">{name}</h3>
      </header>

      <div className="mt-6 rounded-md bg-white p-4 text-center dark:bg-zinc-800">
        <div className="flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((rate) => {
            return <Rating key={rate} rate={rate} rating={rating} />;
          })}
        </div>

        <p className="mt-2 text-sm">{comment}</p>
      </div>
    </motion.article>
  );
}
