// Layout.js
import Navbar from "./Navbar";

export default function Layout({ children, session }) {
  return (
    <>
      <Navbar session={session} /> {/* Pasa la sesión al componente Navbar */}
      {children}
    </>
  );
}


