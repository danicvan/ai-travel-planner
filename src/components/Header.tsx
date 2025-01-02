import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center max-w-7x1 mx-auto p-4">
                <div>
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/trello-logo.svg"
                        alt="Trello logo"
                        width={100}
                        height={100}
                    />
                </div>

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
        </header>
    );
}