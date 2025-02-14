"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header({ onSearch }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);
    const [searchKey, setSearchKey] = useState("");

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
    }

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)){
            setIsProfileOpen(false);
        }
    }
    
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchKey(value);
        onSearch(value);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-gray-400 sticky top-0 z-50">
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
                        onChange={handleSearch}
                        value={searchKey}
                    />
                    <FaSearch
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={16}
                    />
                </div>

                {/* Profile */}
                <div 
                    className="relative cursor-pointer" 
                    onClick={handleProfileClick}
                    ref={profileRef}
                >
                    <Image 
                        src="https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={30}
                        height={30}
                        className="rounded-full w-8 h-8 border-2 border-transparent hover:border-2 hover:border-stone-200"
                    />

                    {isProfileOpen && (
                        <div className="absolute py-6 right-0 mt-2 w-60 bg-white shadow-md rounded-lg">
                            <p className="text-xs font-semibold text-gray-400 px-4">ACCOUNT</p>
                            <div className="mt-4 flex items-center gap-2 px-4">
                                <Image
                                    src="https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    width={40}
                                    height={40}
                                    alt="Profile"
                                    className="rounded-full w-12 h-12"
                                />
                                <div>
                                    <p className="text-sm text-gray-500">John.Doe</p>
                                    <p className="text-xs text-gray-500">john.doe@email.com</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">Log out</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
