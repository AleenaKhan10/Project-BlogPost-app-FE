import React from "react";
import clsx from "clsx";

interface AppButtonProps {
  text: string; // Button text
  className?: string; // Extra/conditional classes
  onClick?: () => void; // Click handler
  type?: "button" | "submit" | "reset"; // For forms
  disabled?: boolean; // Disabled state
  icon?: React.ReactNode; // Icon (Lucide or any React element)
  iconPosition?: "left" | "right"; // Icon placement
}

const AppButton: React.FC<AppButtonProps> = ({
  text,
  className,
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "left",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",
        "bg-blue-600 text-white",
        "disabled:bg-gray-400 disabled:cursor-not-allowed",
        className
      )}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default AppButton;
