import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

function Stats() {
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
    <div className="py-20 bg-white/50">
      <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3">
          <motion.img
            className="w-full rounded-md"
            src="/workdesk.webp"
            alt=""
            initial="hidden"
            whileInView="visible"
            variants={imageVariant}
            viewport={{ amount: 0.5 }}
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">Over 42,069</h1>
          <p className="md:text-4xl font-bold">
            {" "}
            Remote professionals warlord providing essential services for your
            war needs globally, delivering support for any location.
          </p>
          <div className="flex">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-green-500 text-green-800">
                  <FaChartLine />
                </span>
                <h1>Data Validation</h1>
              </div>
              <p>
                {" "}
                Ask your AI-Powered warlord assistance for everything. Your
                virtual companion is here to help your every need.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-green-500 text-green-800">
                  <FaChartLine />
                </span>
                <h1>Optimize Efficiency</h1>
              </div>
              <p>
                {" "}
                Get expert assistance for technical or performance-related
                challenge, all managed remotely
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
