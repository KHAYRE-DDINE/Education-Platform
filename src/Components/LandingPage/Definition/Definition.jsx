import React from "react";
import "./Definition.css";
import { motion } from "framer-motion";

function Definition({ title, paragraph, width, size, isDark }) {
  return (
    <div className="about z-10 relative">
      <motion.div
        className="title relative"
        variants={{
          hidden: { left: "-500px" },
          visible: { left: "0" },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
      >
        <h1 className={`${isDark ? "text-white" : "text-colorGray-800"}`}>
          {title}
        </h1>
      </motion.div>
      <motion.div
        className="para relative"
        variants={{
          hidden: { left: "500px" },
          visible: { left: "0px" },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
      >
        <p
          className={`${isDark ? "text-[#bfbfbf]" : "text-colorGray-800"}`}
          style={{ width: width, fontSize: size }}
        >
          {paragraph}
        </p>
      </motion.div>
    </div>
  );
}

export default Definition;
