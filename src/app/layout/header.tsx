import Image from "next/image";

import banner from "@/app/assets/banner.png";
import profile from "@/app/assets/profile.png";

const tournamentDetails = [
  {
    id: 1,
    icon: "A",
    detail: "10 jogadores",
  },
  {
    id: 2,
    icon: "B",
    detail: "Roblox",
  },
  {
    id: 1,
    icon: "C",
    detail: "Virtual",
  },
  {
    id: 1,
    icon: "D",
    detail: "08 de Abril, 2023",
  },
];

const navigation = [
  {
    id: 1,
    name: "Informações",
    active: true,
  },
  {
    id: 2,
    name: "Histórico",
    active: false,
  },
  {
    id: 3,
    name: "Partidas",
    active: false,
  },
  {
    id: 4,
    name: "Configurações",
    active: false,
  },
];

interface HeaderProps {
  tournament: string;
}

const Header = ({ tournament }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col">
      <Image className="w-full" src={banner} alt="" />
      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-10 justify-between px-12 md:px-24 py-5 bg-slate-950">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 md:gap-1">
            <h1 className="text-3xl font-semibold">{tournament}</h1>
            <div className="flex flex-col gap-1 md:flex-row md:gap-5">
              {tournamentDetails.map((item) => (
                <>
                  <div key={item.id} className="flex gap-2 items-center">
                    <i className="text-base">{item.icon}</i>
                    <p className="text-sm">{item.detail}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <nav className="flex gap-10">
            {navigation.map((item) => (
              <>
                <li
                  className={`text-sm list-none relative hover:text-white cursor-pointer transition ${
                    item.active
                      ? "text-white after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:rounded-full after:w-full after:h-[2px] after:bg-[#EFB00F]"
                      : "text-zinc-400"
                  }`}
                  key={item.id}
                >
                  {item.name}
                </li>
              </>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5 mr-auto lg:mr-0">
          <div className="flex flex-col text-left lg:text-right">
            <p className="text-sm lg:text-base">Organizado por:</p>
            <p className="text-sm lg:text-base text-[#EFB00F]">Antônio</p>
          </div>
          <Image className="w-12 lg:w-20" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
