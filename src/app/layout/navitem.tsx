import Image from "next/image";

interface NavItemProps {
  icon: string;
  tooltip: string;
  size: number;
  link: string;
}

const NavItem = ({ icon, tooltip, size, link }: NavItemProps) => {
  return (
    <>
      <a
        href={link}
        data-tip={tooltip}
        className={`
              relative 
              ${
                tooltip !== ""
                  ? "cursor-pointer before:absolute before:hidden hover:before:flex before:items-center before:justify-center before:content-[attr(data-tip)] before:top-1 before:left-16 before:text-center before:text-sm before:font-semibold before:min-w-32 before:bg-[#6E8ED9] before:text-[#04031F] before:p-1 before:rounded-lg before:transition-all before:z-20 after:hidden hover:after:inline-block after:absolute after:content-[''] after:w-4 after:h-4 after:bg-[#6E8ED9] after:right-[-46px] after:rotate-45 after:top-[10px] after:z-10"
                  : "cursor-default"
              }
            `}
      >
        <Image src={icon} width={size} alt="" />
      </a>
    </>
  );
};

export default NavItem;
