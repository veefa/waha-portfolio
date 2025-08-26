import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type HeaderProps = {
  text: string;
  className?: string;
};

export function Stret({ text, className }: HeaderProps) {
  return (
    <motion.h1
      whileHover={{ scaleX: 1.2 }} // Stretch horizontally
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={cn(
        "text-4xl font-bold tracking-tight cursor-pointer origin-left",
        className
      )}>
      {text}
    </motion.h1>
  );
}
