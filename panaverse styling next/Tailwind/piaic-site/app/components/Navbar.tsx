"use client";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
   <div className="bg-teal-900 fixed w-full h-[65px]">
      <div className="flex justify-between items-center text-black ">
      <Link href="/"><Image src='/Logo.svg' width='90' height='120' alt='logo' className="m-4 ml-10"/></Link>
      <ul className="flex mr-10">
         <li>
            <Link href='/'>How it works</Link>
         </li>
         <li>
            <Link href='/'>Apply</Link>
         </li>
         <li>
            <Link href='/'>Available programs</Link>
         </li>
         <li>
            <Link href='/'>About</Link>
         </li>
         <li>
            <Link href='/'>Wit</Link>
         </li>
      </ul>
      </div>
   </div>
  );
}

      // <div className="flex justify-between items-center text-white">
      // <Link href="/"><Image src='/Logo.svg' width='90' height='120' alt='logo' className="m-7"/></Link>
      // <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
      //   <li className="">
      //   <Link href="/">How it works</Link>
      //   </li>
      //   <li className="p-4">
      //   <Link href="/">Apply</Link>
      //   </li>
      //   <li className="p-4">
      //   <Link href="/">Available Programs</Link>
      //   </li>
      //   <li className="p-4">
      //   <Link href="/">About</Link>
      //   </li>
      //   <li className="p-4">
      //   <Link href="/">Wit</Link>
      //   </li>
      // </ul>
      // <div onClick={handleNav} className="block sm:hidden z-10">
      // {nav ? (
      //       <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
      //     ) : (
      //       <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
      //     )}
      // </div>
      // <div
      //     className={
      //       nav
      //         ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
      //         : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}
      //       >
      //        <ul>
      //       <li className="p-4 text-4xl hover:text-gray-500">
      //         <Link href="/">Home</Link>
      //       </li>
      //       <li className="p-4 text-4xl hover:text-gray-500">
      //         <Link href="/#gallery">Gallery</Link>
      //       </li>
      //       <li className="p-4 text-4xl hover:text-gray-500">
      //         <Link href="/portfolio">Work</Link>
      //       </li>
      //       <li className="p-4 text-4xl hover:text-gray-500">
      //         <Link href="/contact">Contact</Link>
      //       </li>
      //     </ul>
      //       </div>
      // </div>