
'use client'
export default HomePage;
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
    if (!router.isReady) return;
    if (status === 'loading') {
      setTimeout(() => {
        if (status === 'loading') {
          router.push('/');
        }
      }, 5000);
      return;
    }

    if (!session) {
      router.push('/');
    }
  }, [session, status, router.isReady]);

  if (status === 'loading' || !session) {
    setTimeout(() => {
      if (status === 'loading') {
        router.push('/');
      }
    }, 5000);
    return (
      
      <div className="flex items-center justify-center h-screen">
        <Spinner /> {/* Asegúrate de tener un componente Spinner */}
        <p className="ml-4 text-lg">Cargando sesión...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row items-stretch">
      <Title />
      <DragAndDrop />
    </div>
  )
}








