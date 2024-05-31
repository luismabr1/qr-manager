// Layout.js
import Navbar from "./Navbar";

// Añade session a tus LayoutProps
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children}: LayoutProps) {
  return (
    <>
      <Navbar /> {/* Pasa la sesión al componente Navbar */}
      <main>{children}</main>
    </>
  );
}




