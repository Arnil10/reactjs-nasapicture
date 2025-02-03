import React from "react"


export default function SideBar(props){

    const {handleToggleModal,data}=props
    return(
        
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContent">

            <h2 className="sibebarheading">{data?.title}</h2>
            <div>
                <p className="desTitle">{data?.date}</p>
                <p>{data?.explanation}</p>
            </div> 

            <button
                onClick={handleToggleModal}><i className="fa-solid fa-right-long"></i></button>
            </div>
        </div>
    )
}