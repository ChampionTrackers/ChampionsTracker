import Image from "next/image";

import searchIcon from "@/app/assets/icons/search.svg"
import profileIcon from "@/app/assets/profile.png"

const Navbar = () => {
  return(
    <header className="w-full bg-[#04031F]">
      <div className="max-w-3xl w-full h-full px-3 py-2 mx-auto flex items-center justify-end gap-5">
        <button>
          <Image src={searchIcon} width={25} alt=""/>
        </button>
        <button>
          <Image src={profileIcon} width={40} alt=""/>
        </button>
      </div>
    </header>
  )
}

export default Navbar;