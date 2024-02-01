import { LojaContext } from "@/context/LojaContext"
import formatCurrency from "@/utils/formatCurrency"
import Image from "next/image"
import { useContext } from "react"

const Cart = () => {
    const {confirmPurchase, cart, addToCart, resetCart, isCartActive, removeFromCart, qtd, preco} = useContext(LojaContext)
 
  return (
    <div className={`carrinho ${isCartActive ? 'cart-active' : ''}`}>
        {
            cart.length === 0 ? (<p>O carrinho está vazio.</p>) : 
            (
                <>
                <div className='border-b border-slate-950 py-2'>
                    <h2 className='text-[1.3rem] font-semibold'>Quantidade: {qtd}</h2>
                    <h2 className='text-[1.3rem] font-semibold'>Preço total: {formatCurrency(preco)}</h2>
                    <div className='flex gap-3 py-3'>
                        <button onClick={confirmPurchase} className='bg-orange-500 py-1 text-white rounded-md w-1/2'>Confirmar compra</button>
                        <button onClick={resetCart} className='bg-orange-500 py-1 text-white rounded-md w-1/2'>Cancelar</button>
                    </div>
                </div>

                {cart.map(item => {
                    return (
                        <div key={item.id} className='cart-item border-b border-slate-950 pt-3 pb-2'>
                            <div className='flex gap-5'>
                                <Image width={250} height={150} className='h-[100px] w-[200px] object-cover' src={item.img.src} alt={item.title} />
                                <div>
                                    <h3 className='text-[1.2rem]'>Qtd: {item.quantity}</h3>
                                    <div className='flex'>
                                        <button onClick={() => removeFromCart(item)} className='px-2 mr-2 border rounded-sm border-black font-semibold text-[1.3rem]'>-</button>
                                        <button onClick={() => addToCart(item)} className='px-2 rounded-sm border border-black font-semibold text-[1.3rem]'>+</button>
                                    </div>
                                </div>
                            </div>
                            <h2 className='text-[1.2rem] font-semibold pt-1'>{item.title}</h2>
                            <h2 className='text-[1.3rem] font-bold'>{formatCurrency(item.price)}</h2>
                        </div>
                    )
                })}
                </>
            )
            }

        
        
    </div>
  )
}

export default Cart