import { LojaContext } from "@/context/LojaContext"
import formatCurrency from "@/utils/formatCurrency"
import { rpg } from "@/utils/produtos"
import { useRef, useEffect, useState, useContext, memo } from "react"

import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"

interface itemProps {
    id: number
    title: string
    quantity: number
    price: number
    img: any
}

const SliderProducts = memo(({title, type}:any) => {
    const carousel = useRef<HTMLDivElement>(null)
    const [scroll, setScroll] = useState<number>(950)
    const {addToCart} = useContext(LojaContext)

    useEffect(() => {
        const handleResize = () => {
            if (carousel.current)
                if (carousel.current.offsetWidth > 768)
                    setScroll(carousel.current.offsetWidth)

            else
                setScroll(300)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        } 
    }, [carousel])
    

    const handleLeftClick = (e:any) => {
        e.preventDefault()
        if (carousel.current)
            carousel.current.scrollLeft -= scroll
    }

    const handleRightClick = (e:any) => {
        e.preventDefault()
        if (carousel.current)
            carousel.current.scrollLeft += scroll
    }

  return (
        <div className='mb-16'>
            <h2 className='text-center text-[1.3rem] font-semibold mb-5'>{title}</h2>
            <div className='carousel-loja overflow-auto' ref={carousel}>
                <div className="carousel-loja-slider flex gap-5 mb-5">
                    {type.map((item:itemProps) => {
                        return (
                            <div className='carousel-loja-card rounded-lg relative flex-none w-[300px] h-[400px]' key={item.id}>
                                <img loading="lazy" className='w-full h-full object-cover hover:opacity-95 transition duration-300 rounded-lg' src={item.img.src} alt={item.title} />
                                <div className="info rounded-b-lg bg-[rgba(0,0,0,.6)] p-4 w-full absolute bottom-0">
                                    <h2 className='text-[1.3rem] font-semibold'>{item.title}</h2>
                                    <h2 className='text-[1.3rem] mb-2 font-bold'>{formatCurrency(item.price)}</h2>
                                    <button onClick={() => addToCart(item)} className="w-full rounded-md py-1 border border-orange-500 bg-orange-400 hover:bg-transparent text-orange-100 font-semibold text-[1.3rem] transition duration-300">Add ao carrinho</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                <div className='buttons gap-5 text-center text-[2.5rem] font-semibold'>
                    <button onClick={handleLeftClick}><BiChevronLeft /></button>
                    <button onClick={handleRightClick}><BiChevronRight /></button>
                </div>
        </div>
  )
})

export default SliderProducts