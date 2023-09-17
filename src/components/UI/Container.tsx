import { ReactNode } from "react";

interface ContainerProps {
  className: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={`w-[80%] max-w-5xl mx-auto flex flex-col gap-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
