import { useEffect } from "react"


const Clase09 = () => {

    const bloquearVocal = (e) => {
        const keyDown = e.key.toLowerCase();
        if(keyDown === "a" || keyDown === "e" || keyDown === "i" || keyDown === "o" || keyDown === "u" ){
            console.log(keyDown)
            e.preventDefault()
        }
    }

    
    return(
        <div className="bg-white text-center w-fit m-auto my-5 rounded-2xl p-10">
            <h1 className="text-indigo-600 font-extrabold">CLASE 09</h1>
            <div>
                <h2 className="text-zinc-900 font-extrabold mb-2">Este Input no permite letras vocales!</h2>
                <input type="text" onKeyDown={bloquearVocal} className="bg-black border-grey rounded-lg text-white border-2" />
            </div>
        </div>
    )
}


export default Clase09