import NextImage from "next/image";
import Link from "@/components/link";
import { motion } from "framer-motion";

function Photo({ links, urls, description, width, height }) {
  return (
    <motion.figure
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <Link href={links.html}>
        <NextImage
          src={urls.regular}
          alt={description}
          width={width}
          height={height}
          layout="responsive"
          quality={100}
          className="rounded-lg saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100"
        />
      </Link>
    </motion.figure>
  );
}

function Photos({ data }) {
  return (
    <motion.div
      variants={{
        visible: {
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="grid items-end gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:grid-cols-4"
    >
      {data.map((item) => {
        return <Photo key={item.id} {...item} />;
      })}
    </motion.div>
  );
}

export default Photos;
