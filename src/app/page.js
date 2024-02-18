"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'


export default function Home() {
  /**
   * 
   * 
useState
Purpose: Manages state within a functional component. State allows you to track and update data that affects the component's rendering.
Usage: const [stateVariable, setStateFunction] = useState(initialValue);
stateVariable: Stores the current state value.
setStateFunction: Used to update the state value. Call it with a new value to trigger a re-render.
initialValue: Sets the initial state when the component is created

 const [count, setCount] = useState(0); // Initial state is 0

  const handleClick = () => {
    setCount(count + 1); // Update state, causing re-render
  };


   * 
   */
  let [name, setName] = useState("");
  const [time, settime] = useState();
  // useEffect(function,depende)


  /**
   * 
   * 
   * useEffect
Purpose: this is used to execute some piece of logic in a functional component when components renders for the first or re-render. We can execute logics like data fetching, subscriptions, or DOM manipulation using this.
Usage: useEffect(() => { effect }, [dependencies]);
effect: The function that performs the side effect. Runs after the component renders.
dependencies: An optional array of values. The effect runs again only when one of these values changes. If omitted, the effect runs only once after the initial render.

   */


  // useEffect(() => {
  //   console.log({ name }); 
  //   // data fetching logic can be written here 
  // }, [name])




  useEffect(() => {
    console.log("CHANGED", name)
    if (name === "Ritanshu") {
      alert("Ritanshu is here ")
    }
  }, [name])


  // setInterval(()=>{},3000)

  // const functionTest = (functions)=>{
  //   functions();
  // }

  const rohit = (mem1Plan, mem2Plan) => {
    console.log("Acche se saadi attain kro");
    mem1Plan()
    console.log("Thpoda partyu");
    mem2Plan();
  }

  const ritanshuPlan = () => {
    console.log("ritanshuPlan Forts")
    console.log("daal baati churma")
    console.log("Hawamahel")
  }



  const bharatPlan = () => {
    console.log(" bharatPlan Camel chadai")
    console.log("ret hi ret")
    console.log("jadumahel")
  }
  // rohit(bharatPlan, ritanshuPlan)

  const handleInput = (e) => {
    // console.log("typed value ", e.target.value)
    setName(e.target.value)
  }



  return (
    <main className={styles.main}>
      <Link href="/dashboard">Dashboard</Link>
      <div className="container">
        <div className="row input-group mb-3">
          <div className="col-6 m-auoo input-group-prepend">
            <input onKeyUp={(e) => {
              handleInput(e)
            }} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="row input-group mb-3">
          {name}
        </div>

      </div>
    </main>
  );
}


/**
 * Form Validation 
 * website with multiple pages 
 * Data fetching & posting using APIs
 * Wheather App 
 * Self application development : Assignments 
 * 
 */