import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationContextProvider } from "@/store/notificationContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Component {...pageProps} />
        </main>
      </Layout>
      
    </NotificationContextProvider>
  );
}
