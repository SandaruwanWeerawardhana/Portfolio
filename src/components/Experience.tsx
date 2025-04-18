import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/*================================ Education =============================================*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center mb-6">
              <GraduationCap
                className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <SpotlightCard
              className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg p-8"
              spotlightColor="rgba(100, 121, 167, 0.15)"
            >
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Diploma in Software Engineering
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  2024 - present
                </p>
                <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Relevant Coursework:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Spring Boot</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Angular</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Version Control Tool</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>MySQL</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Hibernate</span>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="flex-1 mt-5">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  GCE A/L
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-0">
                  2021-2024
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                Mihindu Central College, Agalawatta	
                </p>
                {/* <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Relevant Coursework:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                </ul> */}
              </div>

              <hr />
              <div className="flex-1 mt-5">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  GCE O/L
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-0">
                  2015-2020
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                Meril Kariyawasam Central College, Meegahathanna
                </p>
                {/* <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Relevant Coursework:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                </ul> */}
              </div>
            </SpotlightCard>
          </motion.div>

          {/*================================= Certifications ================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award
                className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <SpotlightCard
              className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg p-8"
              spotlightColor="rgba(70, 199, 255, 0.15)"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img
                      src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
                      alt="Postman API Logo"
                      className="w-10 h-10"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Postman API
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        Postman Certificate <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Introduction to Containerization
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a
                        href=""
                        // target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        CoDeKu DevOps Academy
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
                {/* 
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img
                      src="/images/uom.png"
                      alt="University of Moratuwa Logo"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Server-side Web Programming
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a
                        href="https://open.uom.lk/lms/mod/customcert/view.php?id=1025&downloadown=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        University of Moratuwa - DP Education Certificate
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li> */}
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
