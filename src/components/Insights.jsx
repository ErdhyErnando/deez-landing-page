import React from "react";
import { SiGoogleassistant, SiDatabricks } from "react-icons/si";
import { motion } from "framer-motion";

function Insights() {
  const insightsData = [
    {
      title: "Prductivity Enhancer",
      date: "July 2023",
      icon: SiGoogleassistant,
      description:
        "Dynamic visibility tools built to drice engagement and productivity.",
    },
    {
      title: "Remote Access",
      date: "August 2023",
      icon: SiDatabricks,
      description:
        "Access your platform from anywhere in the world on any device.",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
      <div className="md:w-1/3 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Industry Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint
          quaerat itaque error. Quasi maxime voluptatibus tenetur qui excepturi
          asperiores quibusdam corrupti itaque cupiditate facere, quidem culpa
          iure error suscipit?
        </motion.p>
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/8.jpg"
            alt=""
            className="w-12 h-12 rounded-full border-4"
          />
          <div>
            <h1 className="font-bold text-lg">Mike Oxlong</h1>
            <p className="text-sm text-gray-400">CEO, Founder</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
        {insightsData.map((insight, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            className="w-full p-4 border-4 border-white/50 rounded-xl space-y-4"
            key={index}
          >
            <div className="flex justify-between">
              <div className="space-y-2">
                <button className="p-3 rounded-full bg-green-300 text-green-800">
                  {insight.icon()}
                </button>
                <h1 className="text-xl font-bold">{insight.title}</h1>
              </div>
              <p>{insight.date}</p>
            </div>
            <p className="text-lg leading-loose">{insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Insights;
