import { Provider } from "react-redux";
import "../styles/globals.css";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";


export default function App({ Component, pageProps }) {
  console.log("🚀 ~ file: _app.js:12 ~ App ~ pageProps:", Component, pageProps)
  const myOptions = {
    style: { width: "400px", borderRadius: "10px" },
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider refetchOnWindowFocus={false} session={pageProps?.session}>
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={2000}
            {...myOptions}
          >
            {pageProps?.notShowHeader === true ? null : <Header callFrom={pageProps?.callFrom}/>}
            
            <Component {...pageProps} />
            {pageProps?.notShowHeader === true ? null : <Footer callFrom={pageProps?.callFrom}/>}
          </SnackbarProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
