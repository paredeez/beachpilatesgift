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
    image: '/images/giftvouchers/2.png',
    url: 'https://buy.stripe.com/14A14n45k6WVbe91hM9AA03',
  },
  {
    id: 2,
    image: '/images/giftvouchers/3.png',
    url: 'https://buy.stripe.com/6oUaEXatI3KJfupgcG9AA04',
  },
  {
    id: 3,
    image: '/images/giftvouchers/4.png',
    url: 'https://buy.stripe.com/4gM6oH1Xc3KJbe9d0u9AA05',
  },
  {
    id: 4,
    image: '/images/giftvouchers/5.png',
    url: 'https://buy.stripe.com/9B65kDgS6epndmh3pU9AA06',
  },
  {
    id: 5,
    image: '/images/giftvouchers/6.png',
    url: 'https://buy.stripe.com/3cI8wPfO20yx6XTf8C9AA07',
  },
  {
    id: 6,
    image: '/images/giftvouchers/7.png',
    url: 'https://buy.stripe.com/fZu3cv0T82GF9619Oi9AA08',
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [vouchersVisible, setVouchersVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !vouchersVisible) {
            setVouchersVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const vouchersSection = document.getElementById('vouchers');
    if (vouchersSection) {
      observer.observe(vouchersSection);
    }

    return () => observer.disconnect();
  }, [vouchersVisible]);

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
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ 
                  willChange: 'opacity',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt="Beach illustration"
                    fill
                    className="object-contain"
                    priority
                    loading="eager"
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
          <p className="text-sm md:text-base text-gray-600 text-center max-w-xl mb-3 md:mb-4 px-2">
            Perfect for birthdays, Christmas or a "thinking of you" moment. They get a personalised code, instant email delivery and can book any of my classes that suit them.
          </p>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-xl mb-6 md:mb-8 px-2">
            Choose from single classes to multi-class packages.
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
      <div id="vouchers" className="bg-sage-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-white">
            Choose Your Package
          </h2>
          <p className="text-base md:text-lg text-white/90 text-center max-w-2xl mx-auto mb-12 px-2">
            Select the perfect gift voucher below. Each purchase includes instant delivery and a personalised code ready to use.
          </p>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {vouchers.map((voucher, index) => (
            <a
              key={voucher.id}
              href={voucher.url}
              className={`relative shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer block rounded-xl md:rounded-2xl overflow-hidden ${
                vouchersVisible ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: vouchersVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <Image
                src={voucher.image}
                alt={`Gift voucher ${voucher.id}`}
                width={800}
                height={1067}
                className="w-full h-auto"
                priority
              />
            </a>
          ))}
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sand py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-start gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/newlogo.png"
              alt="Beach Pilates Melbourne"
              fill
              className="object-cover scale-110"
            />
          </div>
          <p className="text-gray-700 text-sm">
            © 2025 Beach Pilates Melbourne. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

