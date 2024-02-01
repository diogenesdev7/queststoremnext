import { useState, useEffect } from 'react'
import godofwar from '@/assets/img/aventura/bannergod.jpg'
import donkey from '@/assets/img/aventura/donkey.jpg'
import sea from '@/assets/img/rpg/sea1.jpg'
import Link from 'next/link'
import Image from 'next/image'

const carouselImages = [godofwar, donkey, sea]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < 2) {
                setCurrentIndex(currentIndex + 1)
            } else {
                setCurrentIndex(0)
            }
        }, 7000)

        return () => clearInterval(interval)
    }, [currentIndex])

  return (
    <div className='carousel '>
        {carouselImages.map((img, index) => {
            return <div className={`carousel-item relative ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition duration-1000 ease-in-out absolute inset-0`} key={index}>
                        <Image width={1000} height={700} src={img.src} alt="carouselImage" />
                   </div>
        })}
        <Link href='/Loja' className='btn' >Ir para loja</Link>
    </div>
  )
}

export default Carousel