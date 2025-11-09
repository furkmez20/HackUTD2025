import "./globals.css";

export const metadata = {
  title: "CBRE Portfolio AI",
  description: "AI-Powered Real Estate Insight Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-light text-dark">
        <div className="flex flex-col flex-1">
          <main className="p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}