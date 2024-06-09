"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
} from "@/utils/motion";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="mb-[20px] text-[15px] text-center">
                Contact us : help@chyp.dev
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Skynyx 2024 Inc. All rights reserved
            </div>
        </div>      
    </div>
  )
}

export default Footer