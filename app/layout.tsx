import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

