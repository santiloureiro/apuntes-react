import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"

const ApiDetail = () => {

const [state, setState] = useState([])

const [loading, setLoading] = useState(true)

const id = useParams()

    useEffect(() => {
        const res = fetch("https://rickandmortyapi.com/api/character")
        res.then( items => {
        return (items.json())
        }).then( values => {
        let valuesFiltrados = values.results.filter((item) => item.id === parseInt(id))
        console.log(valuesFiltrados)
        setState(valuesFiltrados)
        setLoading(false)
        })

    }, [])

    return(
        <div className="flex bg-zinc-200 justify-center">
            {loading ? (
                <div className="h-screen w-screen bg-white">
                <div className="flex justify-center items-center h-full">
                <img className="h-10 w-10" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="TecladoDescrip"></img>
                </div>
                </div>
                )
                :(
                <div className="flex justify-center items-center bg-zinc-200 h-[90vh] text-xl">
                <Item product={state} />
            </div>)}

        </div>
    )
}

export default ApiDetail