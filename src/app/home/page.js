
'use client'
import { Title } from "@/components/Title";
import { DragAndDrop } from "@/components/DragAndDrop";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
/* import { getServerSession } from 'next-auth/next' */
import { useSession } from "next-auth/react";
import Spinner from '../../components/Spinner'

function HomePage() {
   const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push('/');
    },
   }); 

/* 
  const session = async getServerSession(req, res, authOptions) */
  const router = useRouter();

/*    useEffect(() => {
    if (!router.isReady){
      
      return;
    } 
    if (status === 'loading') {
      setTimeout(() => {
        if (status === 'loading') {
          router.push('/');
        }
      }, 5000);
      return;
    }

    if (!session || session===null) {
      router.push('/');
    }
  }, [session, status, router.isReady]);

    if (status === 'loading' || !session || session===null) {
      setTimeout(() => {
      if (!session) {
        router.push('/');
      }
    }, 5000); 
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />  
        <p className="ml-4 text-lg">Cargando sesión...</p>
      </div>
    );
    }  */

  return (
    <div className="flex flex-col lg:flex-row items-stretch">
      <Title />
      <DragAndDrop />
    </div>
  )
}

export default HomePage;









