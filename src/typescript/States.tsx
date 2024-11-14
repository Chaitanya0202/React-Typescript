import { useState } from "react";
import { useGlobelContext } from "./ContextAPI/UserContext";


const States:React.FC=()=>{
    // using ContextAPI
    const{count,incre,decre}=useGlobelContext();
    const [text,setText]=useState<string>('')

    const onChnageHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value);
    }
    return(
        <>
        <div>
            <h1>States Comp</h1>
            <h1>{count}</h1>
            <button onClick={incre}>Increments</button>
            <button onClick={decre}>Decremets</button>
        </div>
    <div>
        <input type="text" onChange={onChnageHandler} />
        <p>{text}</p>
    </div>
        </>
    )
}
export default States;