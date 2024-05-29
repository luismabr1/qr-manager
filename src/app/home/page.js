/* "use client";
import { Title } from "@/../../src/app/components/Title";
import { DragAndDrop } from "@/../../src/app/components/DragAndDrop";

function HomePage() {

  return (
    <div className="container-grid">
      <Title />
      <DragAndDrop />
    </div>
  );
}

export default HomePage; */

/* "use client";
import { Title } from "@/../../src/app/components/Title";
import { DragAndDrop } from "@/../../src/app/components/DragAndDrop";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../components/Spinner'

function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Si el router no está listo, no hacemos nada
    if (!router.isReady) return;

    // Si la sesión está cargando, no hacemos nada
    if (status === 'loading') return;

    // Si no hay sesión, redirigimos al usuario a la página de inicio de sesión
    if (!session) {
      router.push('/'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
    }
  }, [session, status, router.isReady]);

   // Si la sesión está cargando o no hay sesión, no renderizamos nada
  if (status === 'loading' || !session) {
    return <Spinner />; // Puedes reemplazar esto con un componente de carga si lo prefieres
  } 

  return (
    <div className="container-grid">
      <Title />
      <DragAndDrop />
    </div>
  );
}

export default HomePage; */

/* "use client";
import { Title } from "@/../../src/app/components/Title";
import { DragAndDrop } from "@/../../src/app/components/DragAndDrop";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../components/Spinner'

function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Si el router no está listo, no hacemos nada
    if (!router.isReady) return;

    // Si la sesión está cargando, esperamos 5 segundos y luego redirigimos al usuario
    if (status === 'loading') {
      setTimeout(() => {
        if (status === 'loading') {
          router.push('/'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
        }
      }, 5000);
      return;
    }

    // Si no hay sesión, redirigimos al usuario a la página de inicio de sesión
    if (!session) {
      router.push('/login'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
    }
  }, [session, status, router.isReady]);

  // Si la sesión está cargando o no hay sesión, mostramos el spinner
  if (status === 'loading' || !session) {
    return <Spinner />; // Puedes reemplazar esto con un componente de carga si lo prefieres
  }

  return (
    <div className="container-grid">
      <Title />
      <DragAndDrop />
    </div>
  );
}

export default HomePage; */

"use client";
import { Title } from "@/../../src/app/components/Title";
import { DragAndDrop } from "@/../../src/app/components/DragAndDrop";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../components/Spinner'

function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Si el router no está listo, no hacemos nada
    if (!router.isReady) return;

    // Si la sesión está cargando, esperamos 5 segundos y luego redirigimos al usuario
    if (status === 'loading') {
      setTimeout(() => {
        if (status === 'loading') {
          router.push('/'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
        }
      }, 5000);
      return;
    }

    // Si no hay sesión, redirigimos al usuario a la página de inicio de sesión
    if (!session) {
      router.push('/login'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
    }
  }, [session, status, router.isReady]);

  // Si la sesión está cargando o no hay sesión, mostramos el spinner
  if (status === 'loading' || !session) {
    setTimeout(() => {
      if (status === 'loading') {
        router.push('/'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
      }
    }, 5000);
    return <Spinner />; // Puedes reemplazar esto con un componente de carga si lo prefieres
  }

  return (
    <div className="container-grid">
      <Title />
      <DragAndDrop />
    </div>
  );
}

export default HomePage;







