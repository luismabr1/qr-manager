'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function FullScreenImage() {

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image
        src="https://res.cloudinary.com/do9autydw/image/upload/v1716921892/aqzu8ou1ucnqkqd74net.png" // Reemplaza esto con tu URL de imagen
        alt="Descripción de la imagen"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}