import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "SplendidPahadi",
  description: "Personal portfolio and resume website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/logo.ico" type="image/x-icon" />
        <meta name="description" content="Personal portfolio and resume website" />
      </head>
      <body>
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
