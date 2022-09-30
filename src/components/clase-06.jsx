//# Fetching APIs
//@ Conceptos

//* URL = "https://rickandmortyapi.com/api/character/?page=2"

//* Query Params = ...?page=2"

//* URL Params = .../api/character/...

import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"






const Clase06 = ({items}) => {
    
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)

    const id = useParams();
    
    useEffect(() => {
        const res = fetch("https://rickandmortyapi.com/api/character")
        res.then( items => {
        return (items.json())
        }).then( values => {
            
        setState(values.results)
        setLoading(false)
        })

    }, [])
    
    return(
        loading ? <div className='bg-white flex justify-center items-center p-5 m-auto w-4/5 rounded-2xl font-bold'>CARGANDO...</div>:
        <div className="flex flex-col justify-center items-center m-3 my-5 rounded-2xl bg-white">
            <h1 className="p-5 text-indigo-600 font-extrabold">CLASE 06</h1>
                <div className="grid grid-cols-5 my-5 text-center">
                {state.map(char => {
                    let dot;
                    if(char.status === "Alive") dot = "🟢"
                    if(char.status === "Dead") dot = "🔴"
                    if(char.status === "unknown") dot = "❔"
                return(
                <div key={char.id} className="flex flex-col justify-center items-center p-3 mx-3 my-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img src={char.image} className="w-32 h-fit rounded-2xl"></img>
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{char.name}</h5>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{char.species}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{dot}{char.status}</p>
                </div>
                )})}
                </div>
        </div>
    )
}

export default Clase06