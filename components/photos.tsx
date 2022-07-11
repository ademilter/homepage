import NextImage from "next/image";
import A from "components/a";
import { motion } from "framer-motion";

function Photo({ links, urls, description, width, height }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className="mb-8"
    >
      <A href={links.html}>
        <NextImage
          src={urls.regular}
          alt={description}
          width={width}
          height={height}
          layout="responsive"
          quality={100}
          className="rounded saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100"
        />
      </A>
    </motion.div>
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
      className="grid items-end gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {data.map((item) => {
        return <Photo key={item.id} {...item} />;
      })}
    </motion.div>
  );
}

export default Photos;
