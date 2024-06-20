"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div

    initial={{
        opacity:0,
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?h=710&fakeurl=1&type=.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold"> Here is a little background</h4>
        <p className="text-base">
          Hardworking, highly motivated professional eager to lend combined
          knowledge and skills to enhance business performance. Operates well in
          both individual and team capacities, leveraging seasoned work ethic to
          quickly adapt to different processes and drive company objectives.
          Resourceful and results-driven with a passion for growth and
          efficiency to meet company needs and increase service value.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
