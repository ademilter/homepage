import { motion } from "framer-motion";

// source: https://codesandbox.io/s/framer-motion-side-menu-mx2rw

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.6"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export default function MenuToggle({ onClick = () => {}, isOpen }) {
  return (
    <motion.button
      onClick={onClick}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex items-center justify-center opacity-50 sm:hidden"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
}
