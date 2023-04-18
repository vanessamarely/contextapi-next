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
  //create a notification to make use of the context
  const notificationCtx = useContext(NotificationContext);
  //conditional classes
  if (status === "success") {
    statusClasses = classes.success;
  }
  //conditional classes
  if (status === "error") {
    statusClasses = classes.error;
  }
  //create a constant to hold the css classes
  const cssClasses = `${classes.notification} ${statusClasses} p-4`;

  return (
    <div className={cssClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
