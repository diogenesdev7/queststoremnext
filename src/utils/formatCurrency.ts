const formatCurrency = (valor:number):string => {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

export default formatCurrency