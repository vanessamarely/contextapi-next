import { createContext, useEffect, useState } from "react";

type NotificationData = {
  title: string;
  message: string;
  status: string;
};

const Initialvalue = {
  title: "",
  message: "",
  status: "",
};

const NotificationContext = createContext({
  notification: Initialvalue,
  showNotification: (notificationData: NotificationData) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider(props: any) {
  const [activeNotification, setActiveNotification] =
    useState<NotificationData>(Initialvalue);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(Initialvalue);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: NotificationData) => {
    setActiveNotification(notificationData);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(Initialvalue);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
