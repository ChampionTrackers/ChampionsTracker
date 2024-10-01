import Image, { StaticImageData } from "next/image";

import placeholder from "@/app/assets/profile-placeholder.png";

interface MessageProps {
  hidden: boolean;
  picture?: StaticImageData;
  message: string;
  type: string;
  children?: React.ReactNode;
}

const Message = ({
  hidden,
  picture,
  message,
  type,
  children,
}: MessageProps) => {
  return (
    <>
      {!hidden ? (
        <div
          className={`w-full h-full flex gap-5 ${
            type === "sender" ? "mr-auto" : "ml-auto"
          }`}
        >
          {type === "sender" && (
            <Image
              src={picture ? picture : placeholder}
              width={60}
              height={60}
              className="rounded-full h-full"
              alt=""
            />
          )}
          <div
            className={`max-w-sm w-full flex flex-col gap-3 ${
              type === "sender" ? "mr-auto items-start" : "ml-auto items-end"
            }`}
          >
            <div
              className={`p-2 px-4 bg-[#0A092D] rounded-lg text-sm ${
                type === "receiver" ? "text-right" : ""
              }`}
            >
              {message}
            </div>
            <div className="w-full flex flex-col">{children}</div>
          </div>
          {type === "receiver" && (
            <Image
              src={picture ? picture : placeholder}
              width={60}
              height={60}
              className="rounded-full h-full"
              alt=""
            />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Message;
