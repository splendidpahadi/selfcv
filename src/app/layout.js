import "./globals.css";
import Script from "next/script";
import BackgroundAnimation from "../components/BackgroundAnimation";

export const metadata = {
  title: "SplendidPahadi",
  description: "Personal portfolio and resume website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/mylogo.webp" type="image/x-icon" />
        <meta name="description" content="Personal portfolio and resume website" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js"></script>
      </head>
      <body>
      <BackgroundAnimation />
      
        {children}

        {/* Load Ionicons properly */}
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
