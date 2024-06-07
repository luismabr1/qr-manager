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

/* import Navbar from "./Navbar";
import { useRouter } from 'next/navigation';

export default function Layout({ children, session }) {
  const router = useRouter();
  const isPreviewPage = router.pathname.startsWith('/preview'); // Verifica si la ruta comienza con "/preview"

  return (
    <>
      {isPreviewPage ? null : <Navbar session={session} />}
      <main>{children}</main>
    </>
  );
} */



