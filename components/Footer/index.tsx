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
                  Your trusted brand for products.
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
               <h3 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white text-center">
  Contact Us
</h3>

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
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
     

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
            <p>&copy; {new Date().getFullYear()} Prime Gurkha  All rights reserved.</p>
          </motion.div>

          {/* Social Media Icons */}
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
            <ul className="flex items-center gap-5">
              <li>
                <a href="#" aria-label="Facebook">
                  <svg
                    className="fill-[#FFA500] transition-all duration-300 hover:fill-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <svg
                    className="fill-[#FFA500] transition-all duration-300 hover:fill-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30528 12.0801 6.1329C11.7038 6.96053 11.6209 7.88278 11.845 8.75993C9.98546 8.67146 8.17382 8.19084 6.52 7.34993C4.86618 6.50902 3.40753 5.32848 2.24 3.87993C1.64054 4.92591 1.46975 6.16318 1.766 7.33093C2.06224 8.49868 2.80506 9.48959 3.84 10.0799C3.17256 10.057 2.51885 9.87292 1.92 9.54993V9.59993C1.92099 10.6817 2.31953 11.7242 3.047 12.4999C3.77447 13.2755 4.77624 13.7174 5.84 13.7499C5.18413 13.9364 4.50124 13.9642 3.836 13.8319C4.0912 14.6591 4.62037 15.3777 5.34 15.8999C6.05963 16.422 6.93227 16.7222 7.84 16.7499C6.89783 17.4903 5.77985 17.9511 4.596 18.0799C4.15825 18.1091 3.7182 18.1226 3.28 18.1199C4.30873 18.7371 5.46194 19.0489 6.64 19.0299C12.235 19.0299 16.015 14.9999 16.015 10.6499C16.015 10.5049 16.015 10.3599 16.005 10.2149C16.833 9.64784 17.5401 8.916 18.085 8.05993C17.3412 8.38129 16.551 8.58236 15.74 8.65593C16.5705 8.16292 17.232 7.44582 17.63 6.59993C16.8624 7.05417 16.0085 7.36456 15.12 7.50993C14.9895 7.24635 14.8144 7.00364 14.604 6.79484C14.3935 6.58603 14.1515 6.41529 13.889 6.28993C13.6266 6.16457 13.3478 6.08655 13.0632 6.05977C12.7786 6.03298 12.4929 6.05815 12.216 6.13393C11.939 6.2097 11.6756 6.33524 11.4374 6.50479C11.1993 6.67434 10.9903 6.88436 10.82 7.12493C10.3727 7.76766 10.118 8.52695 10.086 9.30893C10.054 10.0909 10.246 10.8653 10.64 11.5299C10.0993 11.4972 9.56441 11.3772 9.06 11.1799C9.55152 12.4213 10.4796 13.4017 11.64 13.8799C11.1589 14.0467 10.6481 14.1311 10.134 14.1299C9.89763 14.1291 9.66185 14.1096 9.43 14.0719C9.91068 15.0375 10.7465 15.7575 11.74 16.0799C12.7335 16.4023 13.8219 16.3042 14.74 15.7999C15.655 15.2953 16.3289 14.4177 16.615 13.3899C17.605 13.304 18.5769 13.0632 19.48 12.6799C18.8579 13.7132 18.0099 14.5982 17.015 15.2799C16.0201 15.9616 14.899 16.4235 13.72 16.6299C12.5399 16.8375 11.3314 16.7821 10.18 16.4685C9.02861 16.1549 7.96078 15.5921 7.04 14.8199C8.46964 14.8747 9.88819 14.5703 11.14 13.9299C12.3814 13.2896 13.4143 12.3424 14.12 11.1799C13.3512 11.4172 12.5466 11.5537 11.74 11.5899C12.6362 10.9871 13.4122 10.2204 14.03 9.31993C14.6481 8.41953 15.0897 7.40758 15.33 6.34993C14.5392 7.13928 13.5476 7.72121 12.47 8.04993C13.5476 7.72121 14.5392 7.13928 15.33 6.34993Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

        
      </footer>
    </>
  );
};

export default Footer;
