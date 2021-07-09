import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Motion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
export default Motion;
