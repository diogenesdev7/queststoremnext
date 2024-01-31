import { useRouter } from 'next/router'
import noticias from '@/utils/noticias'

const NoticiaPage = () => {
  const router = useRouter()
  const { NoticiaPage } = router.query

  const notice = noticias.find(item => item.id === Number(NoticiaPage))

  if (!notice) {
    return <div>Noticia não encontrada.</div>
  }

  return (
    <div className='md:py-10 md:px-12 p-8'>
      <div className='noticePage rounded-md md:p-16 p-8 flex flex-col items-center'>
        <h2 className='text-violet-950 text-[1.7rem] text-center font-semibold mb-10'>{notice.titulo}</h2>
        <img src={notice.img.src} alt={notice.titulo} className='img w-full md:h-[450px] h-[250px] mb-10' />
        <p className='text-gray-950 mb-10 leading-8'>{notice.text}</p>
        <h2 className='text-violet-950 text-[1.3rem] text-center font-semibold mb-10'>Veja o trailer</h2>
        <iframe src={notice.video} className='video rounded-md'></iframe>
      </div>
    </div>
  )
}

export default NoticiaPage