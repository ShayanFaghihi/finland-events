import { createPortal } from "react-dom";

const Backdrop = () => {
  return createPortal(
    <div className="absolute top-0 left-0 w-full h-screen bg-white bg-opacity-60"></div>,
    document.body
  );
};

export default Backdrop;
