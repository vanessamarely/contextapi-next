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

//create context
const NotificationContext = createContext({
  notification: Initialvalue,
  showNotification: (notificationData: NotificationData) => {},
  hideNotification: () => {},
});

// create a function that will be used to wrap the app using the context provider
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

  //create context object
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  //return context provider
  return (
    <NotificationContext.Provider value={context}>
      {/** props.children is the content that will be wrapped by the provider */}
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
