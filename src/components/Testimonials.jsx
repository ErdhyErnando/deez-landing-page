import { motion } from "framer-motion";

function Testimonials() {
  const testmtVariant = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const testimonialsData = [
    {
      image: "https://randomuser.me/api/portraits/men//24.jpg",
      name: "Ben Dover",
      position: "Founder",
      feedback:
        "Their feedback has streamlines out operations, offering techincal expertise whenever we need them",
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Candy Barr",
      position: "CEO",
      feedback:
        "Their feedback has streamlines out operations, offering techincal expertise whenever we need them",
    },
    {
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      name: "Bofa deez",
      position: "CTO",
      feedback:
        "Their feedback has streamlines out operations, offering techincal expertise whenever we need them",
    },
  ];
  return (
    <div className="py-10 bg-white/50">
      <div className="w-4/5 m-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 "
        >
          <h1 className="text-center text-lg">______Client Reviews</h1>
          <h2 className="text-sm md:text-xl md:font-semibold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,{" "}
            <br />
            ipsum veniam delectus deserunt perferendis aut iste, dolorum
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 py-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={testmtVariant}
              viewport={{ amount: 0.5 }}
              className="p-5 space-y-5 border border-black rounded-lg flex flex-col items-center"
            >
              <div className="flex items-center space-x-2">
                <img
                  className="w-16 h-16 rounded-full border-2"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-lg">{testimonial.name}</h1>
                  <p className="text-sm text-grey-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-center text-lg">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
