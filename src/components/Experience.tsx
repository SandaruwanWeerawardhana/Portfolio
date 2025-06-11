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
                      src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
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
                        href="https://1drv.ms/b/c/7096e17f88b7be67/EVzBs3pDmvVKrpxusRkrV_MBIhuHNxSDhXCfOYxnSFqcAA?e=Hl2Mre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        CoDeKu DevOps Academy
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img
                      src="https://png.pngtree.com/element_our/sm/20180410/sm_5acd1797b5783.jpg"
                      alt="Logo"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Cloud Computing for Beginners
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a
                        href="https://1drv.ms/b/c/7096e17f88b7be67/EYnPRJ61OZVPt3rt95WXgmkBoy5scXFBrnpb1yk7V1VaWg?e=jDskgt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                         CoDeKu DevOps Academy
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img
                      src="https://cdn1.vectorstock.com/i/1000x1000/77/50/sql-database-icon-logo-design-ui-or-ux-app-vector-17507750.jpg"
                      alt="Logo"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      SQL Basic
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a
                        href="https://www.hackerrank.com/certificates/iframe/f96297e0c07e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                         HackerRank
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
