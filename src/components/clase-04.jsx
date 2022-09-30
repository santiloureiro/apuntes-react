//# State

import { useState } from "react"
import DateButton from "./ejercicio"

const FunctionState = () => {

let [state, setState] = useState(1)

const sumar1AlState = () => {
    setState(state += 1)
}


    return (
        <div className="flex flex-col align-middle w-64 m-auto my-5 p-10 font-bold justify-center rounded-2xl bg-slate-50">
            <h1 className="text-center text-2xl font-extrabold text-indigo-600 my-5">CLASE 4</h1>
            <h2 className="text-center text-xl">{state}</h2>
            <button className="p-2 bg-indigo-900 rounded-2xl text-white" onClick={sumar1AlState}>Sumar 1</button>
            <DateButton />
        </div>
    )
}


export default FunctionState