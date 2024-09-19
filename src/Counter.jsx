import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("Type Here !")
    return (
        <>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <h3>You Type {value.length} Char</h3>
            <button onClick={()=>setCount(count+1)}>Click me!</button>
            <button onClick={()=>setCount(0)}>reset</button>
            <p>You Click {count} time</p>
        </>
    )
}