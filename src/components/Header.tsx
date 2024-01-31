import Link from "next/link"
import { useContext, useState } from "react";

import { FiMenu } from "react-icons/fi";
import { BiJoystick } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import joystick from '@/assets/img/joystick.png'
import { LojaContext } from "@/context/LojaContext";

const Header = () => {
  const {qtd, handleIsCartActive} = useContext(LojaContext)

  const {isLojaActive} = useContext(LojaContext)
  const [menuVisibility, setMenuVisibility] = useState(false)

  const changeMenuVisibility = ():void => {
    setMenuVisibility(!menuVisibility)
    console.log(menuVisibility)
  }

  return (
    <header className='header flex justify-around items-center h-[70px] bg-violet-700'>
        <Link href='/'>
            <div className="lg:text-[2rem] text-[1.5rem] flex gap-3 items-center">
              <BiJoystick className='text-[2rem] text-orange-400' />
              <h1 className='logo'>QuestStore</h1>
            </div>
        </Link>
        <ul className='desktop-menu flex gap-7 text-[1rem] lg:text-[1.1rem] font-[500] uppercase'>
            <Link className='link' href='/'>Home</Link>
            <Link className='link' href='/Sobre'>Sobre</Link>
            <Link className='link' href='/Loja'>Loja</Link>
        </ul>
        <div className={`container-mobile-menu ${menuVisibility ? 'container-visible' : ''}`}>
          <ul className={`mobile-menu ${menuVisibility ? 'mobile-visible' : ''}`}>
              <Link className='link' href='/'>Home</Link>
              <Link className='link' href='/Sobre'>Sobre</Link>
              <Link className='link' href='/Loja'>Loja</Link>
              <img src={joystick.src} alt="joystick image" className='w-[4rem] absolute bottom-28 right-7' />
          </ul>
        </div>
        <button onClick={changeMenuVisibility} className='btn-mobile text-[1.7rem]'><FiMenu /></button>
        
        {
          isLojaActive &&
          <div onClick={handleIsCartActive} className='cart flex relative cursor-pointer'>
            <IoCartOutline className='text-orange-400 font-bold text-[2.5rem]' />
            <p className='tracking-wide bg-orange-400 rounded-[50%] text-[1rem] flex justify-center items-center h-[25px] w-[25px]'>{qtd}</p>
          </div>
        }

    </header>
  )
}

export default Header