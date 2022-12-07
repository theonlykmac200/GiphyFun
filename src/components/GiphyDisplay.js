import {useState} from "react"

const GiphyDisplay = ({giphy}) => {
    const num = Math.floor(Math.random() * 50)
    return (
           
        <>
        <h1> click the button to get your trending Giphy</h1>
       
        <iframe src={giphy?.data[num].embed_url}></iframe>
        <h1>{giphy?.data[num].title}</h1>

        </>
    
        
    )
}

export default GiphyDisplay