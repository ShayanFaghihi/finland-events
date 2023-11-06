import React from "react";
import { ContainerProps } from "../../interfaces/interfaces";

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={`w-[80%] max-w-5xl mx-auto flex flex-col gap-8 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
