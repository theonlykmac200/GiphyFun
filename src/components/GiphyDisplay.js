import {useState} from "react"

const GiphyDisplay = ({giphy}) => {
    return (
            // giphy.embed_url ?
        <>
        {/* <img src={giphy.data.slug}/> */}
        <h1>{giphy?.data.title}</h1>
        <iframe src={giphy?.data.embed_url}></iframe>
        </>
        // :
        // <h1> click the button to get your trending Giphy</h1>
    )
}

export default GiphyDisplay