import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div>
                <Image
                    src="https://e7.pngegg.com/pngimages/168/333/png-clipart-trello-logo-business-microsoft-teams-management-argentina-national-football-team-2018-fifa-world-c-blue-text.png"
                    alt="Trello logo"
                    width={50}
                    height={50}
                />
            </div>
        </header>
    );
}