import { useState } from 'react';



const DateButton = () => {

    const printCurrentDate = () => {
        let currentDate = new Date();
        return currentDate.toLocaleString();
    };

    let [state, setState] = useState(1);

    const sumar1AlState = () => {
        setState((state += 1));
    };

    return (
        <div className="flex flex-col my-5 align-middle w-fit m-auto justify-center">
            <span className="text-center text-xl">{state}</span>
            <span className="text-center text-sm">{printCurrentDate()}</span>
            <button className="p-2 bg-indigo-900 rounded-2xl text-white" onClick={sumar1AlState}>
                Sumar 1
            </button>
        </div>
    );
};

export default DateButton