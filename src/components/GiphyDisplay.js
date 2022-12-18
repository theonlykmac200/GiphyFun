import {useState} from "react"

const GiphyDisplay = ({ giphy }) => {
    //I love this!! any extra JS practice and displaying the data randomly for trending is great!

    //you are getting a warning for iframe, needs title property, check for these warnings and fix them see below
    const num = Math.floor(Math.random() * 50)
    return (
           
        <>
        <h1> click the button to get your trending Giphy</h1>
       
        <iframe title='trending gif'src={giphy?.data[num].embed_url}></iframe>
        <h1>{giphy?.data[num].title}</h1>

        </>
    
        
    )
}

export default GiphyDisplay