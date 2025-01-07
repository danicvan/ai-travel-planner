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
        <header>
            <div className="flex justify-between items-center max-w-7x1 mx-auto p-4">
                {/* Trello Logo with Navigation to Home */}
                <div>
                    <Link href="/">
                        <Image
                            src="https://cdn.worldvectorlogo.com/logos/trello-logo.svg"
                            alt="Trello logo"
                            width={100}
                            height={100}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Search Bar and Profile Section */}
                <div className="flex justify-between items-center max-w-7x1 gap-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-2 pl-10 rounded-md text-black border border-indigo-600"
                        />
                        <FaSearch
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                        />
                    </div>

                    <div>
                        <div
                            onClick={handleProfileClick}
                            className="cursor-pointer"
                        >
                            <Image
                                src="https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Profile photo"
                                width={100}
                                height={100}
                                className="w-14 h-14 rounded-full bg-cover bg-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
                <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-64">
                    <h2 className="text-lg font-bold mb-2">Profile</h2>
                    <p>Name: John Doe</p>
                    <p>Email: john.doe@example.com</p>
                    <button
                        onClick={() => setIsProfileOpen(false)}
                        className="mt-4 p-2 bg-indigo-600 text-white rounded"
                    >
                        Close
                    </button>
                </div>
            )}
        </header>
    );
}
