import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type msgFunc = (msg: string) => void;

export const toastWarnNotify: msgFunc = (msg) => {
  toast.warn(msg, {
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-center",
    draggablePercent: 60,
    progressStyle: {
      background: "#EF4444",
      height: "1rem",
    },
  });
};

export const toastSuccessNotify: msgFunc = (msg) => {
  toast.success(msg, {
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-center",
    draggablePercent: 60,
    theme: "light",
    progressStyle: {
      background: "#00345b",
      height: "1rem",
    },
  });
};
