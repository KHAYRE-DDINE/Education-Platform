import React, {  useState } from "react";
import logo from "../../images/logo2.svg";
import Definition from "./Definition/Definition";
import frepeek from "../../images/freepik--Character--inject-119.svg";
import frepeek2 from "../../images/freepik--Character--inject-2.svg";
import brain from "../../images/brain.png";
import math from "../../images/math.svg";
import math2 from "../../images/math2.svg";
import math3 from "../../images/math3.svg";
import math4 from "../../images/math4.svg";
import math5 from "../../images/math5.svg";
import setting from "../../images/setting.svg";
import xy from "../../images/xy.svg";
import x2 from "../../images/x2.svg";
import atomP from "../../images/atom.svg";
import plan from "../../images/plan.svg";
import chimie from "../../images/chimie.svg";
import functionF from "../../images/function.svg";
import earth from "../../images/freepik--Earth--inject-2.svg";
import teach from "../../images/Frame 55.svg";
import teach1 from "../../images/Frame.svg";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { GoMoon } from "react-icons/go";
import { TfiShine } from "react-icons/tfi";

function EnglishLanding({ active, setActive }) {
  const [isDark, setIsDark] = useState(true);
  const [yProgress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <motion.div
      className={`landing-page overflow-hidden duration-[.3s] ${
        isDark ? "bg-black" : ""
      }`}
    >
      <motion.div
        className="top-line z-50 fixed left-0 top-0 right-0 bg-primary-100 h-3 rounded-lg shadow-secondary-100 shadow-md"
        style={{ scaleX: yProgress }}
      ></motion.div>
      <div className="header relative">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span
            className={`uppercase ${
              isDark ? "text-white" : "text-colorGray-700"
            }`}
          >
            al rihla
          </span>
        </div>
        <div
          className={`change-mode absolute left-[50%] top-[15px] translate-x-[-50%] ${
            isDark ? "bg-[#9e9e9e47]" : "bg-[#000000c2]"
          }`}
        >
          <button
            className={`${isDark ? "bg-primary-100" : ""}`}
            onClick={() => setIsDark(true)}
          >
            <GoMoon />
          </button>
          <button
            className={`${isDark ? "" : "bg-primary-100"}`}
            onClick={() => setIsDark(false)}
          >
            <TfiShine />
          </button>
        </div>
        <div className="btn cursor-pointer bg-colorBlue-600">
          <button>Join beta</button>
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="introduction relative"
      >
        <div className="circle absolute mt-[45px] sm:w-[119.875rem] md:w-[119.875rem] lg:w-[119.875rem] xl:w-[119.875rem] h-[119.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[135px] sm:w-[107.875rem] md:w-[107.875rem] lg:w-[107.875rem] xl:w-[107.875rem] h-[107.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[225px] sm:w-[95.875rem] md:w-[95.875rem] lg:w-[95.875rem] xl:w-[95.875rem] h-[95.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[315px] sm:w-[83.9375rem] md:w-[83.9375rem] lg:w-[83.9375rem] xl:w-[83.9375rem] h-[83.9375rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[405px] sm:w-[71.875rem] md:w-[71.875rem] lg:w-[71.875rem] xl:w-[71.875rem] h-[71.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[495px] sm:w-[59.9375rem] md:w-[59.9375rem] lg:w-[59.9375rem] xl:w-[59.9375rem] h-[59.9375rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[585px] sm:w-[48rem] md:w-[48rem] lg:w-[48rem] xl:w-[48rem] h-[48rem] !border-colorBlue-300"></div>
        <button
          className={`users z-10 relative  ${
            isDark
              ? "bg-[#5e5e5e] text-white"
              : "bg-colorGray-100 text-colorGray-700"
          }`}
        >
          Open for beta users
        </button>
        <Definition
          yProgress={yProgress}
          isDark={isDark}
          title="Choosing to study is the best decision you can ever make.We help you succeed"
          paragraph="Empower your learning journey. Gain knowledge, access support, and unlock your full potential."
          size="1.125rem"
          width="36.875rem"
        />
        <div
          className={`btns z-10 relative ${isDark ? "!bg-[transparent]" : ""}`}
        >
          <form
            className={`form !border-colorGray-200 ${
              isDark ? "!bg-[transparent]" : ""
            }`}
          >
            <input
              className={`text-colorGray-500  ${
                isDark ? "bg-[transparent] text-white" : ""
              }`}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="join bg-colorBlue-600">Join beta</button>
          </form>
          <button
            className={`sales ${
              isDark
                ? "bg-[transparent] border-[1px] border-solid text-white"
                : "bg-colorGray-200 text-colorGray-700"
            }`}
          >
            Contact sales
          </button>
        </div>
        <div className="image">
          <div className="border">
            <div></div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="trusted"
      >
        <h3 className="text-colorGray-500">Trusted by folks at</h3>
        <div className="images flex justify-between items-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="superpower"
      >
        <Definition
          yProgress={yProgress}
          isDark={isDark}
          title="Education with superpower"
          paragraph="Empower your learning journey. Gain knowledge, access support, and unlock your full potential."
          size="1rem"
          width="23.75rem"
        />
        <div
          className={`first  ${isDark ? "bg-[#282828]" : "bg-colorGray-100"}`}
        >
          <div className="info">
            <div className="head">
              <h3 className={`${isDark ? "text-white" : "text-colorGray-700"}`}>
                Explore, Learn, Thrive
              </h3>
            </div>
            <div className="para">
              <p
                className={`${
                  isDark ? "text-[#bfbfbf]" : "text-colorGray-500"
                }`}
              >
                One platform for everyone students, parents, teachers, and even
                schools.All content, tools, and help you need to get the best
                educational experience out there.
              </p>
            </div>

            <div className="buttons">
              <div className="btn">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={`${
                    isDark ? "text-[#bfbfbf] " : "text-colorGray-500"
                  } ${active === "student" ? "active" : ""} ${
                    isDark && active ? "bg-[#2c2c2c]" : ""
                  }`}
                >
                  student
                </button>
              </div>
              <div className="btn">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={`${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-500"
                  } ${active === "parent" ? "active" : ""} ${
                    isDark && active ? "!bg-[#2c2c2c]" : ""
                  }`}
                >
                  parent
                </button>
              </div>
              <div className="btn">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={`${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-500"
                  } ${active === "teacher" ? "active" : ""} ${
                    isDark && active ? "!bg-[#2c2c2c]" : ""
                  }`}
                >
                  teacher
                </button>
              </div>
              <div className="btn">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={` ${active === "schools" ? "active" : ""} ${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-500"
                  } ${isDark && active ? "!bg-[#2c2c2c]" : ""}`}
                >
                  schools
                </button>
              </div>
            </div>
          </div>
          <div className="image">
            <div className="border">
              <div></div>
            </div>
          </div>
        </div>
        <div className="second flex gap-6">
          <div
            className={`square  ${
              isDark ? "bg-[#282828]" : "bg-colorGray-100"
            }`}
          >
            <div className="images">
              <div className="icons">
                <img
                  className="absolute left-[9%]  w-[80px]"
                  src={math}
                  alt="board"
                />
                <img
                  className="absolute  right-[2.75rem] top-[0] w-[80px]"
                  src={brain}
                  alt="brain"
                />
                <img
                  className="absolute  left-[9%] bottom-[13%] w-[80px]"
                  src={math2}
                  alt="atom"
                />
                <img
                  className="absolute  left-7 top-[7.75rem] w-[80px]"
                  src={math3}
                  alt="einstein"
                />
                <img
                  className=" absolute  top-[35%] right-5 b-[40px] w-[80px]"
                  src={math4}
                  alt="school"
                />{" "}
                <img
                  className=" absolute  bottom-[60%] left-[45%] b-[40px] w-[80px]"
                  src={chimie}
                  alt="chimie"
                />
                <img
                  className=" absolute top-0  object-cover w-[80px]"
                  src={math5}
                  alt="school"
                />
                <img
                  className="absolute bottom-0 z-50"
                  src={frepeek}
                  alt="frepeek"
                />
              </div>
            </div>
            <div className="info mt-8">
              <h3 className={`${isDark ? "text-white" : "text-colorGray-700"}`}>
                Education for all ages
              </h3>
              <p
                className={`${
                  isDark ? "text-[#bfbfbf]" : "text-colorGray-500"
                }`}
              >
                Made it easy for anyone to study from home. Get all content
                delivered right into your account and enjoy online classrooms.
              </p>
            </div>
          </div>
          <div
            className={`square  ${
              isDark ? "bg-[#282828]" : "bg-colorGray-100"
            }`}
          >
            <div className="images">
              <div className="icons">
                <img
                  className="absolute left-[9%]  bottom-[24px] w-[80px]"
                  src={atomP}
                  alt="atom"
                />
                <img
                  className="absolute  right-[2.75rem] top-[0] w-[80px]"
                  src={plan}
                  alt="plan"
                />
                <img
                  className=" absolute  bottom-[25%] right-[1.25rem] b-[40px] w-[80px]"
                  src={setting}
                  alt="setting"
                />
                <img
                  className=" absolute  bottom-[60%] left-[45%] b-[40px] w-[80px]"
                  src={chimie}
                  alt="chimie"
                />
                <img
                  className=" absolute  bottom-[30%] left-[3.25rem] b-[40px] w-[80px]"
                  src={functionF}
                  alt="functionF"
                />
                <img
                  className="mr-[130px] mb-[40px] z-50 w-[80px]"
                  src={earth}
                  alt="earth"
                />
                <img
                  className="absolute bottom-0 z-50 "
                  src={frepeek2}
                  alt="frepeek2"
                />
                {/* <img
                  className="absolute bottom-[130px] mr-[30px] z-50 w-[80px]"
                  src={square}
                  alt="square"
                /> */}
                <img
                  className="absolute bottom-[250px] left-[13%] z-50 w-[80px]"
                  src={x2}
                  alt="x2"
                />
                <img
                  className="absolute top-[146px] right-[60px] z-50 w-[80px]"
                  src={xy}
                  alt="xy"
                />
              </div>
            </div>
            <div className="info mt-8">
              <h3 className={`${isDark ? "text-white" : "text-colorGray-700"}`}>
                All subjects supported
              </h3>
              <p
                className={`${
                  isDark ? "text-[#bfbfbf]" : "text-colorGray-500"
                }`}
              >
                Selected teachers for every subject. Get the right person to
                teach you the subject you need with collective or individual
                lessons.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="features">
        <Definition
          yProgress={yProgress}
          isDark={isDark}
          title="Key Features"
          paragraph="Powerful platform with superpowers made for you to thrive in your studies an secure your future"
          size="1rem"
          width="23.75rem"
        />
        <div className="boxes">
          <div className="squares ">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 200, x: -400 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`box  ${isDark ? "bg-[#282828]" : "bg-colorGray-100"}`}
            >
              <div className="image">
                <div className="inside-image">
                  <img src={teach} alt="teach" className="!h-[400px]" />
                </div>
              </div>
              <div className="info">
                <h3
                  className={`${isDark ? "text-white" : "text-colorGray-700"}`}
                >
                  Easy
                </h3>
                <p
                  className={`${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-700"
                  }`}
                >
                  Whatever age you are or what grade you are, We make your study
                  easy.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 400, x: 400 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`box  ${isDark ? "bg-[#282828]" : "bg-colorGray-100"}`}
            >
              <div className="image">
                <div className="inside-image">
                  {" "}
                  <img src={teach1} alt="teach1" />
                </div>
              </div>
              <div className="info">
                <h3
                  className={`${isDark ? "text-white" : "text-colorGray-700"}`}
                >
                  Secure
                </h3>
                <p
                  className={`${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-700"
                  }`}
                >
                  Your data, your control. <br />
                  Security at every stage.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 400, x: -400 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`box  ${isDark ? "bg-[#282828]" : "bg-colorGray-100"}`}
            >
              <div className="image">
                <div className="inside-image">
                  {" "}
                  <img src={teach1} alt="teach1" />
                </div>
              </div>
              <div className="info">
                <h3
                  className={`${isDark ? "text-white" : "text-colorGray-700"}`}
                >
                  Powerful
                </h3>
                <p
                  className={`${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-700"
                  }`}
                >
                  Experience an enjoyable educational experience with advanced
                  features.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -400, x: 400 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`box  ${isDark ? "bg-[#282828]" : "bg-colorGray-100"}`}
            >
              <div className="image">
                <div className="inside-image">
                  {" "}
                  <img src={teach1} alt="teach1" />
                </div>
              </div>
              <div className="info">
                <h3
                  className={`${isDark ? "text-white" : "text-colorGray-700"}`}
                >
                  Fast
                </h3>
                <p
                  className={`${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-700"
                  }`}
                >
                  Uncompromising speed. Optimal performance, all the time.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -400, x: -400 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`box  ${isDark ? "bg-[#282828]" : "bg-colorGray-100"}`}
            >
              <div className="image">
                <div className="inside-image">
                  <img src={teach1} alt="teach1" />
                </div>
              </div>
              <div className="info">
                <h3
                  className={`${isDark ? "text-white" : "text-colorGray-700"}`}
                >
                  Fun
                </h3>
                <p
                  className={`${
                    isDark ? "text-[#bfbfbf]" : "text-colorGray-700"
                  }`}
                >
                  Family takes fun seriously. Delightful interactions with every
                  tap.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className={`contact ${isDark ? "!bg-[#282828]" : ""}`}
      >
        <button
          className={`users  ${
            isDark
              ? "bg-[#5e5e5e] text-white"
              : "bg-colorGray-100 text-colorGray-700"
          }`}
        >
          Open for beta users
        </button>
        <Definition
          yProgress={yProgress}
          isDark={isDark}
          title="Are you ready to embark your journey"
          paragraph="Sign up for early access, and get a heads-up when we launch our platform and get to be one of our first customers."
        />
        <div className="btns">
          <motion.form
            variants={{
              hidden: { y: 75 },
              visible: { y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className={`form !border-colorGray-200 ${
              isDark ? "!bg-[transparent]" : ""
            }`}
          >
            <input
              className={`text-colorGray-500  ${
                isDark ? "bg-[#5e5e5e] text-white" : ""
              }`}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="join bg-colorBlue-600">Join beta</button>
          </motion.form>
          <motion.button
            variants={{
              hidden: { y: 75 },
              visible: { y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className={`sales ${
              isDark
                ? "bg-[#5e5e5e] text-white"
                : "bg-colorGray-200 text-colorGray-700"
            }`}
          >
            Contact sales
          </motion.button>
        </div>
      </motion.div>
      <motion.footer
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className={`footer flex ${
          isDark ? "bg-[#282828]" : "bg-colorGray-100"
        } `}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
          <span
            className={`uppercase ${
              isDark ? "text-white" : "text-colorGray-700"
            }`}
          >
            al rihla
          </span>
        </div>
        <ul className="list flex !flex-row">
          <li>
            <span className={`${isDark ? "text-white" : "text-gray-600"}`}>
              FAQ
            </span>
          </li>
          <li>
            <span className={`${isDark ? "text-white" : "text-gray-600"}`}>
              Privacy
            </span>
          </li>
          <li>
            <span className={`${isDark ? "text-white" : "text-gray-600"}`}>
              Terms
            </span>
          </li>
        </ul>
        <div className="btn bg-colorBlue-600">
          <button>Join beta</button>
        </div>
      </motion.footer>
    </motion.div>
  );
}

export default EnglishLanding;
