import SliderProducts from '@/components/SliderProducts'
import { useContext, useEffect} from 'react'

import { aventura, corrida, rpg, } from '@/utils/produtos'
import { LojaContext } from '@/context/LojaContext'
import Cart from '@/components/Cart'
import Confirm from '@/components/Confirm'

const Loja = () => {
  const {handleIsLojaActive} = useContext(LojaContext)

  useEffect(() => {
    handleIsLojaActive(true)
    return () => {
      handleIsLojaActive(false)
    } 
  }, [handleIsLojaActive])


  return (
    <div className='loja p-8'>
          <SliderProducts title='Aventura' type={aventura} />
          <SliderProducts title='Corrida' type={corrida} />
          <SliderProducts title='RPG' type={rpg} />
          <Cart />
          <Confirm />
    </div>
  )
}

export default Loja