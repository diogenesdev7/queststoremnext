import Link from "next/link"

const Footer = () => {
  return (
    <div className='bg-black h-[60px] flex justify-center items-center'>
        <Link target="_blank" href='https://github.com/diogenesdev7/queststoremnext' className='text-[1rem]'> By diogenesdev7</Link>
    </div>
  )
}

export default Footer