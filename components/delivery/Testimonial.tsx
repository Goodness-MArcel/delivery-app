"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aisha Bello",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I sent important documents across town and they were delivered in 38 minutes. Super reliable and professional!",
    rating: 5,
  },
  {
    name: "Chinedu Okoro",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Best delivery service in town! Got my new phone delivered same day with zero stress. Highly recommended.",
    rating: 5,
  },
  {
    name: "Fatima Yusuf",
    role: "Pharmacist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "They delivered urgent medicines to my elderly mother within 25 minutes. Thank you for the excellent service!",
    rating: 5,
  },
  {
    name: "Emmanuel Adeyemi",
    role: "E-commerce Seller",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "My customers are always happy with the fast delivery. This service has increased my sales significantly.",
    rating: 4,
  },
  {
    name: "Nkechi Okafor",
    role: "Working Mom",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote: "I can order groceries while at work and they arrive fresh at home. Best decision I made this year!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real people
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="min-h-[380px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full bg-white border border-gray-100 rounded-3xl p-10 md:p-12 shadow-xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
                  “{testimonials[current].quote}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all active:scale-95"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-emerald-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Trust Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          ⭐ Over <span className="font-semibold text-emerald-700">8,450+</span> happy deliveries
        </motion.div>
      </div>
    </section>
  );
}