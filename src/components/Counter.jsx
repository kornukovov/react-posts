import React, { useState } from "react"

export const Counter = () => {

   const [count, setCount] = useState(0)

   function increment() {
      setCount(count + 1)
   }

   function derement() {
      setCount(count - 1)
   }

   return (
      <div>
         <h1>{count}</h1>
         <button onClick={increment}>increment</button>
         <button onClick={derement}>decrement</button>
      </div>
   )
}