'use client'
import { Title } from "@/components/Title";
import { DragAndDrop } from "@/components/DragAndDrop";
import { useRouter } from 'next/navigation';
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

  const router = useRouter();

  // Muestra un componente de carga mientras se verifica la autenticación
  if (status === 'loading') {
    return <Spinner />; // Reemplaza esto con tu componente de carga
  }

  return (
    <div className="flex flex-col lg:flex-row items-stretch">
      <Title />
      <DragAndDrop />
    </div>
  )
}

export default HomePage;










