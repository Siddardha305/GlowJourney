"use client";

import React from "react";
import { Modal, Box } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem?: any;
  component: any;
  setRoute?: (route: string) => void;
  refetch?: any;
};

const CustomModal: React.FC<Props> = ({ open, setOpen, setRoute, component: Component, refetch }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
      className="backdrop-blur-sm"
    >
      <Box
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[900px] m-auto bg-black border border-white/10 rounded-[30px] shadow-[0_0_50px_rgba(227,27,109,0.15)] outline-none animate-fadeIn max-h-[90vh] overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 transition-colors group z-50"
          aria-label="Close modal"
        >
          <IoCloseOutline
            size={24}
            className="text-gray-400 group-hover:text-white transition-colors"
          />
        </button>

        <Component setOpen={setOpen} setRoute={setRoute} refetch={refetch} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
