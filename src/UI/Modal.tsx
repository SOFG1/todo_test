import React from "react";

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: IProps) => {
  return (
    <div className="fixed inset-0 p-20 bg-slate-200">
      <button
        className="absolute top-3 right-3 text-3xl font-bold"
        onClick={onClose}
      >
        X
      </button>
      {children}
    </div>
  );
};
