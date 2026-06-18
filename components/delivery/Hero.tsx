"use client";

import deliveryguy from "../animations/Delivery guy out for delivery.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-700 text-white pt-20 pb-20 relative overflow-hidden min-h-[90vh] flex items-center">
      
      {/* ==================== MAIN CONTENT ==================== */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full">
        
        {/* ==================== LEFT CONTENT ==================== */}
        <div className="space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm"
          >
            ⚡ Same-day delivery • From ₦800
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-bold leading-tight"
          >
            Fast package delivery
            <br />
            on a <span className="text-emerald-200">bike</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-md"
          >
            Send documents, parcels, electronics, and more across Town within
            minutes. Reliable bike couriers at your service.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-10 py-4 rounded-3xl transition text-lg"
            >
              Send a Package
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/70 hover:bg-white/10 font-semibold px-8 py-4 rounded-3xl transition"
            >
              Track Package
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-10 text-sm pt-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏍️</span>
              <div>
                <p className="font-semibold">500+ Riders</p>
                <p className="text-emerald-200 text-xs">Online now</p>
              </div>
            </div>
            <div>⭐ 4.95 (8,450 reviews)</div>
          </motion.div>
        </div>

        {/* ==================== RIGHT VISUAL ==================== */}
        <div
          className="hidden md:block relative w-full flex justify-center"
          style={{ overflow: "hidden", background: "transparent" }}
        >
          <div className="absolute -right-10 top-10 w-[520px] h-[520px]" />

          <DotLottieReact
            data={deliveryguy}
            loop={true}
            autoplay={true}
            backgroundColor="transparent"
            style={{
              width: "520px",
              height: "520px",
            }}
          />
        </div>
      </div>

      {/* ==================== WAVY BOTTOM (Fixed) ==================== */}
      <div className="absolute bottom-0 left-0 w-full -mb-1 overflow-hidden">
        <svg
          width="100%"
          height="160"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block"
          fill="white"
        >
          <path
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,69.3C672,64,768,96,864,101.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,160L0,160Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}