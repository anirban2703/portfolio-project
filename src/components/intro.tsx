"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import my_image from "@/lib/images/my_image.jpg";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id={"Home"}
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              width={192}
              height={192}
              quality={95}
              priority={true}
              src={my_image}
              alt={""}
              className="h-24 w-24 rounded-full border-white
            border-[0.35rem]
            object-cover shadow-xl"
            />
            <span className="text-2xl absolute bottom-0 right-0">👦🏽</span>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className=" px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Anirban Ghosh.</span>{" "}
        I&apos;m a <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>.
        {/* My focus is{" "}
        <span className="underline">UI Development</span>. */}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center 
      justify-center gap-2 px-4 text-lg font-medium mt-4"
      >
        <Link
          href={"#contact"}
          className="bg-gray-900 text-white px-7 py-3 
          flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          className="bg-white px-7 py-3 
          flex items-center gap-2 rounded-full"
        >
          Download CV <HiDownload />
        </a>
        <a
          href={"www.linkedin.com/in/anirban-ghosh-2703"}
          target="_blank"
          className="bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
