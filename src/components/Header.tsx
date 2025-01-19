"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/trello-logo.svg"
                        alt="Trello logo"
                        width={120}
                        height={40}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Search Bar */}
                <div className="relative w-72">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-full text-sm text-gray-700 focus:outline-none focus:ring-indigo-500"
                    />
                    <FaSearch
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={16}
                    />
                </div>

                {/* Profile */}
                <div className="relative cursor-pointer">
                    <Image 
                        src="https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={30}
                        height={30}
                        className="rounded-full w-10 h-10 border-2 border-indigo-500"
                    />
                </div>
            </div>
        </header>
    );
}
