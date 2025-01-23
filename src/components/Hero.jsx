import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Hero() {
  const textVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transiton: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transiton: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transiton: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="w-4/5  py-20 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="ms:w-1/2 space-y-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
        >
          ______Innovation Requires Invasion
        </motion.p>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className="text-5xl md:text-7xl font-bold"
        >
          Being Invader Requires Lots of Balls
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className="md:text-lg"
        >
          Understanding your capacity of invasion can ensure your success in
          navigating your new teritory.
        </motion.p>
        <div className="flex space-x-5">
          <button className="px-5 py-3 rounded-full font-semibold bg-black text-white">
            Book
          </button>
          <button className="flex space-x-4 items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
              {""}
              <IoPlay />
            </span>
            {""}
            <span> Watch Video</span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={imageVariant}
          className="w-full"
          src="./blob.svg"
          alt="hero"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
}
