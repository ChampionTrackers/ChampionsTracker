import logoIcon from "@/app/assets/noob.png";
import addIcon from "@/app/assets/icons/add.svg";
import configIcon from "@/app/assets/icons/config.svg";
import dividerIcon from "@/app/assets/icons/divider.svg";
import newspaperIcon from "@/app/assets/icons/newspaper.svg";
import infoIcon from "@/app/assets/icons/info.svg";
import NavItem from "./navitem";

const navItem = [
  {
    id: 1,
    icon: logoIcon,
    tooltip: "",
    size: 45,
    link: "/",
  },
  {
    id: 2,
    icon: dividerIcon,
    tooltip: "",
    size: 10,
    link: "/",
  },
  {
    id: 3,
    icon: addIcon,
    tooltip: "Create",
    size: 30,
    link: "/",
  },
  {
    id: 4,
    icon: newspaperIcon,
    tooltip: "Updates",
    size: 30,
    link: "/",
  },
  {
    id: 5,
    icon: dividerIcon,
    tooltip: "",
    size: 10,
    link: "/",
  },
  {
    id: 6,
    icon: configIcon,
    tooltip: "Configuration",
    size: 30,
    link: "/",
  },
  {
    id: 7,
    icon: infoIcon,
    tooltip: "Info",
    size: 30,
    link: "/",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed min-h-screen px-3 py-7 flex flex-col items-center gap-5 custom-pattern">
      {navItem.map((item) => (
        <>
          <NavItem
            key={item.id}
            icon={item.icon}
            tooltip={item.tooltip}
            size={item.size}
            link={item.link}
          />
        </>
      ))}
    </aside>
  );
};

export default Sidebar;
