import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css"; // we should import tailwnd here as this layout encloses our whole app

export const metadata = {
  title: "Wild Oasis",
  description: "Welcome to Paradise Island",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen ">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Wild Oasis</footer>
      </body>
    </html>
  );
}
