import {useState} from "react";
import './App.css';
import Form from "./components/Form";
import GiphyDisplay from "./components/GiphyDisplay";

function App() {

  const [giphy, setGiphy] = useState(null);
  const makeApiCall= async () =>{
    const GiphyUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=z3n8ezDFCFKYT4oMiIfQSkEbGvAZJYrf'
    const res =await fetch(GiphyUrl);
    const json = await res.json();
    console.log(json.data)

    setGiphy(json)
  }
  console.log(giphy)
  
  return (
    <div className="App">
      <Form getGiphy={makeApiCall}/>
      <GiphyDisplay giphy={giphy}/>
      
      
    </div>
  );
}

export default App;
