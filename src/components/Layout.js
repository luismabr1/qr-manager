// Layout.js
import Navbar from "./Navbar";


export default function Layout({ children, session }) {
  return (
    <>
      <Navbar session={session} /> 
      <main>{children}</main>
    </>
  );
}




