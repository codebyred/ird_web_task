import { cn } from "@/lib/utils";
import React from "react";

interface IconButtonProps {
  icon: string;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  onClick
}) => {
  return (
    <button
      className={cn('flex gap-2 items-center p-2.5 bg-opacity-60 rounded-[30px]', className)}
      onClick={onClick}
      aria-label="Icon button"
    >
      <div dangerouslySetInnerHTML={{ __html: icon }} />
    </button>
  );
};

export default IconButton;
