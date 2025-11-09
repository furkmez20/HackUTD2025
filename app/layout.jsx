//layout.jsx
import "./globals.css";

export const metadata = {
  title: "EstateWise",
  description: "Your Smartest Path to Real Estate Investment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-[#12352f] dark:bg-[#12352f] text-[#12352f] dark:text-gray-50 font-sans antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
