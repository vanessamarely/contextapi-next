import { useRef, useContext } from "react";
import NotificationContext from "@/store/notificationContext";

export default function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const notificationCtx = useContext(NotificationContext);

  const registrationHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error("Something went wrong!");
        });
      })
      .then((data) =>
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter!",
          status: "success",
        })
      )
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });
  };
  return (
    <section className="mb-2">
      <h2 className="text-xl mb-2">Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className="border border-teal-600 rounded p-1.5 m-1.5">
          <div className="mb-2">
            <label htmlFor="email">Your Email</label>
            <input
              className="rounded text-sm p-1.5 m-1.5"
              type="email"
              id="email"
              ref={emailInputRef}
              required
              placeholder="Your email"
            />
          </div>
          <button className="rounded text-sm bg-teal-600 text-white p-1.5 m-1.5">
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
