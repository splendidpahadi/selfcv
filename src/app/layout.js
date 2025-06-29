import "./globals.css";
import Script from "next/script";
import BackgroundAnimation from "../components/BackgroundAnimation";

export const metadata = {
  title: "SplendidPahadi",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/mylogo.webp" type="image/x-icon" />
        <meta name="description" content="Personal portfolio and resume website" />
      </head>
      <body>
        {/* Vanta.js & Three.js scripts – loaded early */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js"
          strategy="beforeInteractive"
        />

        {/* Your animated background */}
        <BackgroundAnimation />

        {/* Main content */}
        {children}

        {/* Ionicons */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="lazyOnload"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
