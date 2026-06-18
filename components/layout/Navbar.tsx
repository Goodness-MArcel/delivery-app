'use client';

import Link from 'next/link';
import { Package, User, MapPin, Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [notificationCount] = useState(2);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
              🏍️
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BikeDash</h1>
              <p className="text-[10px] text-gray-500 -mt-1">Courier Delivery</p>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-xl mx-8  text-gray-900">
            <div className="relative">
              <input
                type="text"
                placeholder="Track package or search delivery..."
                className="w-full bg-gray-100 border border-gray-200 rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-emerald-600 transition"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 absolute left-4 top-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/track" className="flex items-center gap-2 hover:text-emerald-600 transition">
              <Package className="w-5 h-5  text-gray-900" />
              <span className="font-medium  text-gray-900">Track</span>
            </Link>

            <Link href="#" className="relative hover:text-emerald-600 transition">
              <Bell className="w-5 h-5  text-gray-900" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </Link>

            <Link href="/account" className="flex items-center gap-2 hover:text-emerald-600 transition">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5  text-gray-900" />
              </div>
              <span className="font-medium  text-gray-900">Account</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black/70 rounded-lg hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Track package..."
              className="w-full bg-gray-100 border border-gray-200 rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-emerald-600"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 absolute left-4 top-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-6 flex flex-col gap-6 text-lg">
            <Link href="/track" className="flex items-center gap-3 hover:text-emerald-600 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
              <Package className="w-6 h-6" />
              Track Package
            </Link>

            <Link href="#" className="flex items-center gap-3 hover:text-emerald-600 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
              <Bell className="w-6 h-6" />
              Notifications
              {notificationCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {notificationCount}
                </span>
              )}
            </Link>

            <Link href="/account" className="flex items-center gap-3 hover:text-emerald-600 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
              <User className="w-6 h-6" />
              My Account
            </Link>

            <div className="pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-5 h-5 text-emerald-600" />
                {/* <div>
                  <p className="font-medium">Deliver from</p>
                  <p>University of Lagos, Akoka</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}