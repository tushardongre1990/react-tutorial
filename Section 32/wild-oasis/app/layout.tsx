import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

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
      <body>
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
