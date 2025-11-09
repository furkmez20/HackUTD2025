import "./globals.css";



export const metadata = {

  title: "EstateWise AI",

  description: "Your Smartest Path to Real Estate Investment",

};



export default function RootLayout({ children }) {

  return (

    <html lang="en" className="light">

      <body className="bg-[#14542c] dark:bg-[#14542c] text-gray-900 dark:text-gray-50 font-sans antialiased transition-colors duration-300">

        {children}

      </body>

    </html>

  );

}

