import ProductoPromise from "./ejercicio-clase5"



const Clase05 = () => {

const randomNumber = (ceil) => {
    let randomNumber = Math.round(Math.random()*ceil)
    return randomNumber
}

const productos = [
    {   id: randomNumber(1000),
        name: "Zapato",
        description: "Este es un zapato lokura",
        stock: randomNumber(100),
    },
    {   id: randomNumber(1000),
        name: "Gorra",
        description: "Este es una gorra lokura",
        stock: randomNumber(100),
    },
    {   id: randomNumber(1000),
        name: "Remera",
        description: "Este es una remera lokura",
        stock: randomNumber(100),
    },
    {   id: randomNumber(1000),
        name: "Zapatilla",
        description: "Este es una zapatilla lokura",
        stock: randomNumber(100),
    },
]

    return(
        <div className="bg-white text-center w-fit m-auto my-5 rounded-2xl p-10">
            <h1 className="text-indigo-600 font-extrabold">CLASE 05</h1>
            <div className="flex">
                {productos.map(item =>
            <div key={item.id} className="p-6 mx-5 my-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.stock}</p>
            <a href="#_" className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-indigo-600 rounded-full hover:bg-white group">
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Comprar {item.name}</span>
            </a>
                        
        </div>
)}
            </div>
        </div>
    )
}

export default Clase05