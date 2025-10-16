import React from "react";

interface LabelProps {
  htmlFor?: string;
  text: string;
  required?: boolean;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  text,
  required = false,
  className = "",
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
    >
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
