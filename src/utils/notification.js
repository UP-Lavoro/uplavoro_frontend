import { enqueueSnackbar } from "notistack";

export const XMark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const successNotification = (msg) => {
  return enqueueSnackbar(msg, { variant: "success" });
};

export const errorNotification = (msg) => {
  return enqueueSnackbar(msg, { variant: "error" });
};

export const warningNotification = (msg) => {
  return enqueueSnackbar(msg, { variant: "warning" });
};
