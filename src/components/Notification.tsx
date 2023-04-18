import { useContext } from "react";
import classes from "./notification.module.css";
import NotificationContext from "@/store/notificationContext";

export default function Notification({
  title,
  message,
  status,
}: {
  title: string;
  message: string;
  status: string;
}) {
  let statusClasses = "";
  const notificationCtx = useContext(NotificationContext);
  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses} p-4`;

  return (
    <div className={cssClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
