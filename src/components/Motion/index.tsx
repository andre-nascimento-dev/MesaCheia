import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Motion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
      style={{ transformOrigin: "left" }}
    >
      {children}
    </motion.div>
  );
};
export default Motion;
