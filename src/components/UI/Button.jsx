import React from "react";

const Button = ({ children, className, textOnly, ...props }) => {
  const cssClasses = textOnly ? "text-button" : "button";

  return (
    <button className={`${cssClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
