import { useContext } from "react";
import Header from "./Header";
import Notification from "@/components/Notification";
import NotificationContext from "@/store/notificationContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const notificationCtx = useContext(NotificationContext);

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
