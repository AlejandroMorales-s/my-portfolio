import React, { useEffect } from "react";

import {
  disableScroll,
  enableScroll,
} from "../../utils/enableAndDisableScrollInBody";

const PopUpWrapper = ({ isOpen, onClose, children }) => {
  const handleClosePopUpWrapper = () => onClose();

  useEffect(() => {
    if (isOpen) disableScroll();

    return () => {
      enableScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="button"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        handleClosePopUpWrapper();
      }}
      className="popup-wrapper-bg-container"
    >
      {children}
    </div>
  );
};

export default PopUpWrapper;
