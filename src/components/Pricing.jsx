import { motion } from "framer-motion";
function Pricing() {
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
    <div className="py-20 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Maximize Your Efficiency with Deez Inc.
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold">$29,99.99</h3>
        <p className="md:text-2xl leading-8">
          {""} We offer tailored virtual services for your business, supporting
          your team remotely so they can thrive.
        </p>
      </div>
      <div className="w-full md:w-1/3">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={imageVariant}
          viewport={{ amount: 0.5 }}
          src=""
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Pricing;
