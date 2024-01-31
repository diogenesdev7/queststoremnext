import noticias from "@/utils/noticias"
import Link from "next/link"

const News = () => {
  return (
    <section className='pt-10 pb-20 px-5'>
        <h2 className='text-violet-50 font-semibold text-[1.7rem] text-center'>Novidades</h2>
        <div className='flex flex-wrap justify-center gap-10 mt-8'>
            {noticias.map(item => {
                return (
                    <Link href={{pathname:`/NoticiaPage/${item.id}`}} className='hover:scale-105 news-card h-[450px] overflow-hidden w-[350px] relative rounded-xl' key={item.id}>
                        <img className='object-cover transition duration-300 w-full h-full rounded-xl' src={item.img.src} alt={item.titulo} />
                        <div className='news-title absolute flex flex-col justify-center bottom-0 w-full h-[150px] p-3 rounded-xl rounded-t-none bg-[rgba(0,0,0,.4)]'>
                            <h2 className='text-white transition duration-300 opacity-100 text-center text-[1.4rem] font-semibold'>{item.titulo}</h2>
                        </div>
                    </Link>
                )
            })}
        </div>
    </section>
  )
}

export default News