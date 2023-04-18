import classes from "./notification.module.css";

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
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
