import { createContext, useEffect, useState } from "react";

//create a type for the notification data
type NotificationData = {
  title: string;
  message: string;
  status: string;
};
//create initial value for the notification data
const Initialvalue = {
  title: "",
  message: "",
  status: "",
};

//create the context to manage our notification data
const NotificationContext = createContext({
  notification: Initialvalue,
  showNotification: (notificationData: NotificationData) => {},
  hideNotification: () => {},
});

// create a function that will be used to wrap the app using the context provider
export function NotificationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //create a state to hold the notification data
  const [activeNotification, setActiveNotification] =
    useState<NotificationData>(Initialvalue);

  //create a useEffect to clear the notification after 3 seconds
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      //create a timer to clear the notification
      const timer = setTimeout(() => {
        setActiveNotification(Initialvalue);
      }, 3000);
      return () => {
        //clear the timer
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  //create a function to show the notification
  const showNotificationHandler = (notificationData: NotificationData) => {
    setActiveNotification(notificationData);
  };

  //create a function to hide the notification
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
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
