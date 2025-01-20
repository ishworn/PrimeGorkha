"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:pb-2 lg:pt-10">
            <div className="flex flex-wrap gap-6 lg:justify-between lg:gap-0">
              {/* Logo Section */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>
                <p className="mt-4 text-black dark:text-white">
                  Where Service Meets Speed.
                </p>
              </motion.div>

              {/* Quick Links Section */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-1/4"
              >
                <h3 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  Quick Links
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      <h5 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                        Home
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      <h5 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                        Product
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      <h5 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                        Tracking Parcel
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      <h5 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                        Pricing
                      </h5>
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Contact Us Section */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-2/4"
              >


                <div className="w-full h-80 mb-7">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.2062605166695!2d85.31227311544483!3d27.70736668280244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e708b25a59951b%3A0xdbac4b68790c11bc!2sShantinagar%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1649396605863!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>





          {/* <!-- Footer Top --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-center lg:gap-0">


            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="flex justify-center items-center w-full">
                <p className="text-center">&copy; {new Date().getFullYear()}  PrimeGurkha. All rights reserved.</p>
              </div>


            </motion.div>
          </div>
        </div>


      </footer>
    </>
  );
};

export default Footer;