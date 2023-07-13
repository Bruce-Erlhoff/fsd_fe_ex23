import { useEffect, useState } from "react";


const Check1 = () => {
   
   let [counter,setCounter] = useState(0);
   let [title,setTitle] = useState("my Title");

// first useEffect call has no dependencies, so is called every time rendered 
   useEffect(() => {
    console.log("hello from use effect no dependencies");
    });  

// second useEffect has an empty array (no dependencies), so is called once (when mounted)
    useEffect(() => {
        console.log("hello from use effect empty array");
    },[]);

// third useEffect call has [counter] in array, so is called whenever counter is updated.
// since counter is updated, it is called.  If counter is even it turns pink, else white.
   useEffect(() => {
    console.log("hello from use effect when counter changed");
    if(counter%2 == 0) {
        document.body.style.backgroundColor ="pink";
    }
    else {
        document.body.style.backgroundColor ="white";
    }
    }, [counter]);


//  since we have two differnt click handlers updating counter, rather than have code to update 
//  each clickHandler, we can put that logic into the useEffect calls above.  we can have multiple
//  useEffect calls depending on what we want to do.  

// first clickHandler updates counter by one
    let clickHandler1 = () => {
        counter++;
        setCounter(counter);
        // if(counter%2 == 0) {
        //     document.body.style.backgroundColor ="pink";
        // }
        // else {
        //     document.body.style.backgroundColor ="white";
        // }
    }

// this clickHandler increments by two...
    let clickHandler2 = () => {
        counter = counter+2;
        setCounter(counter);
        // if(counter%2 == 0) {
        //     document.body.style.backgroundColor ="pink";
        // }
        // else {
        //     document.body.style.backgroundColor ="white";
        // }
    }

// update the title
    let changeTitleHandler = () => {
        setTitle("Changed Title");
    }

// update the Title in tab title changes
    useEffect(() => {
        console.log("hello from change title");
        document.title = title;
    },[title]);

    return (
        <div>
            <h2> Check 1</h2>
            <button onClick={clickHandler1}> +1 Click to increment</button>
            <button onClick={clickHandler2}> +2  Click to increment</button>
            <button onClick={changeTitleHandler}> Click to change title</button>
            {counter}
        </div>
     );
}
 
export default Check1;
