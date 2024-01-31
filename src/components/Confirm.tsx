import { LojaContext } from '@/context/LojaContext'
import formatCurrency from '@/utils/formatCurrency'
import { useContext } from 'react'

const Confirm = () => {
    const {preco, buy, confirmPurchase} = useContext(LojaContext)

  return (
    <>
        {
            buy ? 
                <div className='bg-[rgba(0,0,0,.5)] absolute top-0 left-0 h-[100vh] w-[100vw] flex justify-center items-center'>
                    <div className='w-[500px] h-[500px] rounded-xl bg-orange-50 text-black flex justify-center items-center flex-col'>
                        <h2 className='text-[1.5rem]'>Compra confirmada no valor de {formatCurrency(preco)}</h2>
                        <h3 className='text-[1.4rem]'>Agradecemos a preferência!</h3>
                        <button onClick={confirmPurchase} className='bg-orange-500 text-white px-10 py-3 mt-10 rounded-md'>Voltar</button>
                    </div>
                </div>
            : ''
        }
    </>
  )
}

export default Confirm