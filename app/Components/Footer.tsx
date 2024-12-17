import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex gap-9 flex-col md:flex-row justify-between bg-white py-5 px-6 lg:pl-24">
      <div className="w-[100% ]lg:w-[35%]">
        <h1 className="text-[#3563E9] font-semibold text-2xl">MORENT</h1>
        <p className="pt-3 text-sm">Our vision is to provide convenience and help increase your sales business.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 w-[100%] lg:w-[55%]">
        <div>
          <h1 className="text-lg font-semibold">About</h1>
         <div className="flex flex-col gap-2 mt-3">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">How it works</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Featured</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Partnership</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Business Relation</Link>
         </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Community</h1>
        <div className="flex flex-col gap-2 mt-3">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Events</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Blog</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Podcast</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Invite a friend</Link>
        </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Socials</h1>
         <div className="flex flex-col gap-2 mt-3">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Discord</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Instagram</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Twitter</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Facebook</Link>
         </div>
        </div>
      </div>
    </footer>
  );
}
