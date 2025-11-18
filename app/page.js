'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/images/updatedicons/1.png',
  '/images/updatedicons/2.png',
  '/images/updatedicons/3.png',
];

const vouchers = [
  {
    id: 1,
    title: 'One Class',
    price: '$15',
    image: '/images/giftvouchers/2.png',
    url: 'https://buy.stripe.com/14A14n45k6WVbe91hM9AA03',
  },
  {
    id: 2,
    title: '2 Classes',
    price: '$30',
    image: '/images/giftvouchers/3.png',
    url: 'https://buy.stripe.com/6oUaEXatI3KJfupgcG9AA04',
  },
  {
    id: 3,
    title: '4 Classes',
    price: '$60',
    image: '/images/giftvouchers/4.png',
    url: 'https://buy.stripe.com/4gM6oH1Xc3KJbe9d0u9AA05',
  },
  {
    id: 4,
    title: '6 Classes',
    price: '$90',
    image: '/images/giftvouchers/5.png',
    url: 'https://buy.stripe.com/9B65kDgS6epndmh3pU9AA06',
  },
  {
    id: 5,
    title: '8 Classes',
    price: '$120',
    image: '/images/giftvouchers/6.png',
    url: 'https://buy.stripe.com/3cI8wPfO20yx6XTf8C9AA07',
  },
  {
    id: 6,
    title: '20 Classes',
    price: '$300',
    image: '/images/giftvouchers/7.png',
    url: 'https://buy.stripe.com/fZu3cv0T82GF9619Oi9AA08',
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToVouchers = () => {
    document.getElementById('vouchers')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden bg-sand">
        {/* Header - only visible in hero */}
        <header className="absolute top-0 left-0 right-0 z-50 bg-sage shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
              <Image
                src="/images/newlogo.png"
                alt="Beach Pilates Melbourne"
                fill
                className="object-cover scale-110"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          {/* Carousel Images */}
          <div className="relative w-full h-64 md:h-80 mb-4 md:mb-6">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt="Beach illustration"
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-3 md:mb-4 text-gray-800 font-[family-name:var(--font-playfair)]">
            Beach Pilates Gift Vouchers
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-center max-w-2xl mb-3 md:mb-4 px-2">
            Give the gift of wellness and movement by the beach
          </p>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-xl mb-6 md:mb-8 px-2">
            Perfect for friends, family, or yourself. Choose from single classes to multi-class packages.
          </p>
          <button
            onClick={scrollToVouchers}
            className="group flex flex-col items-center gap-1 md:gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Scroll to vouchers"
          >
            <span className="text-base md:text-lg font-medium">View Vouchers</span>
            <svg
              className="w-6 h-6 md:w-8 md:h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Vouchers Grid */}
      <div id="vouchers" className="relative bg-white py-16 overflow-hidden">
        {/* Ocean Background */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/waterimages/IMG_4024.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-gray-800">
            Choose Your Package
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vouchers.map((voucher) => (
            <a
              key={voucher.id}
              href={voucher.url}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-80">
                <Image
                  src={voucher.image}
                  alt={`${voucher.title} voucher`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{voucher.title}</p>
                    <p className="text-3xl font-light text-gray-800">{voucher.price}</p>
                  </div>
                  <button className="bg-sage group-hover:bg-sage-dark text-gray-800 px-6 py-3 rounded-full font-medium transition-colors duration-300">
                    Purchase
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sage py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/newlogo.png"
              alt="Beach Pilates Melbourne"
              fill
              className="object-cover opacity-80 scale-110"
            />
          </div>
          <p className="text-gray-700">
            © 2025 Beach Pilates Melbourne. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

