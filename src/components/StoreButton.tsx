import Image from "next/image";

interface StoreButtonProps {
  icon: string;
  topText: string;
  bottomText: string;
  className?: string;
}

export default function StoreButton({
  icon,
  topText,
  bottomText,
  className = "",
}: StoreButtonProps) {
  return (
    <button
      className={`bg-white rounded-lg w-[180px] h-[52px] flex items-center px-4 ${className}`}
    >
      <Image
        src={icon}
        alt="Store Icon"
        width={24}
        height={24}
        className="mr-2"
      />
      <div className="flex flex-col items-start -space-y-1">
        <span className="text-[10px] text-black text-left">{topText}</span>
        <span className="text-[16px] text-black font-medium text-left">
          {bottomText}
        </span>
      </div>
    </button>
  );
}
