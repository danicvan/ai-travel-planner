import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center max-w-7x1 mx-auto">
                <div>
                    <Image
                        src="https://e7.pngegg.com/pngimages/168/333/png-clipart-trello-logo-business-microsoft-teams-management-argentina-national-football-team-2018-fifa-world-c-blue-text.png"
                        alt="Trello logo"
                        width={50}
                        height={50}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 rounded-md text-black"
                    />
                </div>

                <div>
                    <Image
                        src="https://e7.pngegg.com/pngimages/168/333/png-clipart-trello-logo-business-microsoft-teams-management-argentina-national-football-team-2018-fifa-world-c-blue-text.png"
                        alt="Profile photo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <button
                        className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </header>
    );
}