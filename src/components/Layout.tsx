import { useContext } from "react";
import Header from "./Header";
import Notification from "@/components/Notification";
import NotificationContext from "@/store/notificationContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  //create a notification to make use of the context
  const notificationCtx = useContext(NotificationContext);
  //create an active notification to make use of the notification context
  const activeNotification = notificationCtx.notification;

  return (
    <>
      <Header />
      <main>
        {children}
        {activeNotification.title && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </main>
    </>
  );
}
