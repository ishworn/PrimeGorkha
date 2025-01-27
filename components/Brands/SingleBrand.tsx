// components/Brands/SingleBrand.tsx
import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, id } = brand;

  return (
    <motion.a
   
     
      transition={{ duration: 1, delay: id }}
    
      href={href}
      className="block h-20 w-[98px] relative"
    >
      <Image
        className="opacity-65 transition-all duration-300 hover:opacity-100"
        src={image}
        alt={name}
        fill
        objectFit="contain"
      />
    </motion.a>
  );
};

export default SingleBrand;
