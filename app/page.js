'use client';

import Image from 'next/image';

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
  const scrollToVouchers = () => {
    document.getElementById('vouchers')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with split layout */}
      <div className="relative min-h-screen overflow-hidden bg-sand">
        <div className="min-h-screen flex items-center justify-center py-8 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            {/* Left Side - Images */}
            <div className="flex flex-row md:flex-col justify-center gap-3 md:gap-4 flex-wrap max-w-[280px] md:max-w-none">
              <div className="relative w-[60px] h-[60px] md:w-[140px] md:h-[140px]">
                <Image
                  src="/images/waterimages/IMG_3684.jpeg"
                  alt="Dolphin"
                  fill
                  className="object-contain scale-150"
                />
              </div>
              <div className="relative w-[60px] h-[60px] md:w-[140px] md:h-[140px]">
                <Image
                  src="/images/waterimages/IMG_3686.jpeg"
                  alt="Shell"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[60px] h-[60px] md:w-[140px] md:h-[140px]">
                <Image
                  src="/images/waterimages/IMG_3685.jpeg"
                  alt="Waves"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[60px] h-[60px] md:w-[140px] md:h-[140px]">
                <Image
                  src="/images/waterimages/IMG_3684.jpeg"
                  alt="Dolphin"
                  fill
                  className="object-contain scale-150"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4 relative w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl rounded-full overflow-hidden">
                <Image
                  src="/images/newlogo.png"
                  alt="Beach Pilates Melbourne"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-center mb-2 md:mb-3 text-gray-800">
                Gift Vouchers
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-gray-700 text-center max-w-xl mb-2 md:mb-4 px-2">
                Give the gift of wellness and movement by the beach
              </p>
              <p className="text-xs md:text-base text-gray-600 text-center max-w-md mb-6 md:mb-8 px-4">
                Perfect for friends, family, or yourself. Choose from single classes to multi-class packages.
              </p>
              <button
                onClick={scrollToVouchers}
                className="group flex flex-col items-center gap-1 md:gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Scroll to vouchers"
              >
                <span className="text-sm md:text-lg font-medium">View Vouchers</span>
                <svg
                  className="w-5 h-5 md:w-8 md:h-8 animate-bounce"
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
        </div>
      </div>

      {/* Vouchers Grid */}
      <div id="vouchers" className="max-w-7xl mx-auto px-4 py-16">
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

      {/* Bottom decorative water image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/waterimages/IMG_4024.jpeg"
            alt="Beach"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sand to-transparent" />
      </div>

      {/* Footer */}
      <footer className="bg-sage py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6 relative w-32 h-32 mx-auto rounded-full overflow-hidden drop-shadow-2xl">
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

