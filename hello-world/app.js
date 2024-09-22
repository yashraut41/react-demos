import React from "react";
import ReactDOM from 'react-dom/client'

const heading = <h1>Hello world in </h1>

console.log(heading);


const Title = () => {
    return(
        <h1>I am Title</h1>
    )
}
const HeaderComponent = () => (<h1>I am heder Component</h1>)
//React Component 

//Functional Component 
const FunctionalComponent = () => {

    return (
        <div id="container ">
            <Title/>
            <Title></Title>
            {Title()}
            <HeaderComponent />
            <h1>I am Functional Component</h1>
        </div>

    )
}
//jsx
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FunctionalComponent />)
