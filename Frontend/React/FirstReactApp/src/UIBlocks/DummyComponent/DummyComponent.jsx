import React, { useEffect, useRef, useState } from 'react'

function DummyComponent() {
    // let number = 0

    const [number, setNumber] = useState(0)
    
    const ghostNumber = useRef(0)
    // console.log(useRef())

    useEffect(() => {
        console.log("use Effect function is executed....")
    })

    useEffect(() => {
        console.log("use Effect hook with empty dependency array is executed....")
    }, [])

    useEffect(() => {
        console.log("use effect hook with the dependency array of number")
    }, [ghostNumber.current])


    const increaseBtn = () => {
        setNumber(number + 1)
        console.log(number)
    }

    const decreaseBtn = () => {
        setNumber(number - 1)
        console.log(number)
    }

    const reset = () => {
        setNumber(0)
        console.log(number)
    }

    const increaseGhostNumber = () => {
        ghostNumber.current += 1;
    }
  return (
    <div>
        <h1>Counter</h1>
        <div>
            number : {number}  ghostNumber : {ghostNumber.current}
        </div>
        <div>
            <button onClick={increaseBtn}>increase</button>
            <button onClick={decreaseBtn}>decrease</button>
            <button onClick={reset}>reset</button>
            <button onClick={increaseGhostNumber}>increase ghost number</button>
        </div>
    </div>
  )
}

export default DummyComponent