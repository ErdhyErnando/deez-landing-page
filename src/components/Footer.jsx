import { motion } from "framer-motion";

function Footer() {
  const footerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={footerVariant}
      viewport={{ amount: 0.5 }}
      className="py-20"
    >
      <div className="w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4">
        <div>
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-grey-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tenetur porro ipsa mollitia necessitatibus et similique illum
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Customer Service</h2>
          <ul>
            <li>
              <a href="" className="">
                Contact Us
              </a>
            </li>

            <li>
              <a href="" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>

            <li>
              <a href="" className="text-gray-400 hover:text-white">
                Refunds
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Follow Us</h2>
          <ul>
            <li>
              <a href="" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>

            <li>
              <a href="" className="text-gray-400 hover:text-white">
                YouTube
              </a>
            </li>

            <li>
              <a href="" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="">News Letter</h3>
          <p>Enter your email to get the latest update!</p>
          <form action="" className="mt-4">
            <input
              type="text"
              placeholder="your email address"
              className="p-2 w-full rounded-md text-gray-600 border"
            />
            <button className="mt-2 w-full p-2 bg-stone-800 rounded-md font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        <p>&copy; {new Date().getFullYear()} Lunar. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
