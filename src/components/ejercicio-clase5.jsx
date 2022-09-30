

const ProductoPromise = () => {
    const producto = {
        id: 1034534,
        name: "Zapato",
        description: "Este es un zapato lokura",
        stock: 30,
    }
    

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto)
        }, 3000);
    })
    
    task.then((res)=>{texto = `Este es un ${res.name}, su id es ${res.id} y tenemos ${res.stock} en stock, su descripcion es: ${res.description}`})


    return(
        <div>
            <span></span>
        </div>
    )
}

export default ProductoPromise