import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
  <div className="relative bg-white rounded-lg max-w-4xl w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 shadow-lg">
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-700 hover:text-black"
    >
      ✖
    </button>
    {/* Modal Content */}
    <div className="modal-content">{children}</div>
  </div>
</div>

  );
};

export default Modal;
