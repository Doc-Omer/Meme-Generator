import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });


  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data.data.memes)
    }
    getMemes()
}, [])


  function getMemeImage() {
    const memesArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function getText(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name] : value
    }))
}

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" name = "topText" value = {meme.topText} onChange= {getText} />
        <input type="text" placeholder="Bottom text" className="form--input" name = "bottomText" value = {meme.bottomText} onChange= {getText} />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
