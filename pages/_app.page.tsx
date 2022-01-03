import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.scss";
import { MobileNavbar } from "@/components/MobileNavbar";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import clsx from "clsx";
import { ThemeProvider } from "@/lib/theme";
import { Footer } from "@/components/Footer";
import { Spacer } from "@/components/Spacer";

function MyApp({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Husker"
        defaultTitle="Husker"
        description="Northeastern websites are bad"
      ></DefaultSeo>

      <ThemeProvider>
        {!showSidebar && (
          <div className={clsx("block md:hidden sticky top-0")}>
            <MobileNavbar
              onMenuClick={() => {
                setShowSidebar(!showSidebar);
              }}
            ></MobileNavbar>
          </div>
        )}

        <main className={clsx("md:flex")}>
          {/* 
          TODO
          Wrapping this element in a div will fix the safari scroll bug
          https://stackoverflow.com/q/51792783/8677167
          But it causes an issue with the sidebar
          */}
          <div
            className={clsx(
              { hidden: !showSidebar },
              "md:block sticky top-0 bottom-0 left-0"
            )}

          >
            <Sidebar onCloseClick={() => setShowSidebar(false)}></Sidebar>
          </div>

          <div className="w-full">
            <div className="min-h-screen">
              <Component {...pageProps} />
            </div>
            {/* <Spacer></Spacer> */}
            <hr />
            <Spacer></Spacer>
            <Footer></Footer>
            <Spacer></Spacer>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
