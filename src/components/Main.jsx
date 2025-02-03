import React from "react"



export default function Main(props){

    const {data}=props
    return (
        
        <div className="imgContainer">
            <img className="picture" src={data?.hdurl} alt="nasa picture of the day"></img>
        </div>
            
       
    )
}