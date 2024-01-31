import {createContext, useState} from 'react'

interface LojaContextProps {
    cart: cartProps[]
    preco: number
    qtd: number
    isLojaActive: boolean
    isCartActive: boolean
    buy: boolean
    handleIsLojaActive: (valor:boolean) => void
    addToCart: (prod:cartProps) => void
    removeFromCart: (prod:cartProps) => void
    handleIsCartActive: () => void
    resetCart: () => void
    confirmPurchase: () => void
}

interface cartProps {
    id: number
    title: string
    quantity: number
    img: {src: string}
    price: number
}

export const LojaContext = createContext<LojaContextProps>({} as LojaContextProps)

export const LojaProvider = ({children}:any) => {
    const [cart, setCart] = useState<cartProps[]>([])
    const [preco, setPreco] = useState<number>(0)
    const [qtd, setQtd] = useState<number>(0)
    const [isLojaActive, setIsLojaActive] = useState<boolean>(false)
    const [isCartActive, setIsCartActive] = useState<boolean>(false)
    const [buy, setBuy] = useState<boolean>(false)

    const resetCart = () => {
        setCart([])
        setPreco(0)
        setQtd(0)
    }

    const confirmPurchase = () => {
        if (buy) {
            resetCart()
        }
        setBuy(!buy)
    }

    const addToCart = (prod:cartProps) => {
        const existingItem = cart.find(item => item.id === prod.id)
        if (existingItem) {
            const newCart = cart.map(item => item.id === existingItem.id ? {...prod, quantity: (item.quantity || 0) + 1} : item)
            setCart(newCart)
        }
        else {
            const newCart = [...cart, {...prod, quantity: 1}]
            setCart(newCart)
        }
        setQtd(qtd + 1)
        setPreco(preco + prod.price)
        console.log(cart)
    }

    const removeFromCart = (prod:cartProps) => {
        const existingItem = cart.find(item => item.id === prod.id)
        if (existingItem && existingItem.quantity > 1) {
            const newCart = cart.map(item => item.id === existingItem.id ? {...prod, quantity: item.quantity - 1} : item)
            setCart(newCart)
        }
        else {
            const newCart = cart.filter(item => item.id !== prod.id)
            setCart(newCart)
        }
        setPreco(preco - prod.price)
        setQtd(qtd - 1)
    }

    const handleIsLojaActive = (valor:boolean) => {
        setIsLojaActive(valor)
    }

    const handleIsCartActive = () => {
        setIsCartActive(!isCartActive)
    }

    return <LojaContext.Provider value={{cart, confirmPurchase, buy, resetCart, isCartActive, handleIsCartActive, removeFromCart, addToCart, preco, qtd, isLojaActive, handleIsLojaActive}}>
                {children}
           </LojaContext.Provider>
}