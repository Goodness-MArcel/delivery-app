"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import deliveryAnimation from "../animations/Delivery.json";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request a Pickup",
      description: "Tell us where to pick up and deliver. Add package details in under 30 seconds.",
    },
    {
      number: "02",
      title: "Rider Assigned Instantly",
      description: "A nearby verified rider is matched and heads to your location within minutes.",
    },
    {
      number: "03",
      title: "Real-time Tracking",
      description: "Follow your package live on the map until it reaches the destination safely.",
    },
    {
      number: "04",
      title: "Delivered & Notified",
      description: "Get instant notification when your package is delivered. Cash or card payment.",
    },
  ];

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0 
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How it works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 max-w-lg mx-auto"
          >
            From request to delivery in minutes. Super simple
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ==================== LEFT COLUMN - ANIMATION ==================== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-[4rem] -rotate-6 scale-105" />
              
              <DotLottieReact
                data={deliveryAnimation}
                loop={true}
                autoplay={true}
                backgroundColor="transparent"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "560px",
                }}
              />
            </div>
          </motion.div>

          {/* ==================== RIGHT COLUMN - STEPS ==================== */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariant}
                  className="flex gap-6 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}   {/* ← Transition moved here */}
                >
                  {/* Step Number */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Vertical Line */}
            <motion.div 
              className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-300 -z-10"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}