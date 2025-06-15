'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center flex-col bg-[#222222] px-6 p-[20px]">
      <Image src="https://i.imgur.com/LCqevSS.png" width={230} height={200} className="h-[40px] invert brightness-0" alt="logo" />
    </div>
  );
}
