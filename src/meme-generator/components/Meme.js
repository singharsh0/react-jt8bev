import data from '../data';
import React from "react";

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    const meme = { topText: '', bottomText: '', randomImage: 'http://i.imgflip.com/1bij.jpg' }
    const [memeImage, setMemeImage] = React.useState(meme);
    const [allMemeImages, setAllMeme] = React.useState(data);

    function generateMeme() {
        const memeArray = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memeArray.length);
        const { url } = memeArray[randomNum];
        setMemeImage(prev => {
            return {
                ...prev,
                randomImage: url
            }
        })
        console.log(url)
    }
    return (
        <div className="form">
            <input type="text" className="form--input" placeholder="Shut up" />
            <input type="text" className="form--input" placeholder="Take My Money" />
            <button className="form--button" onClick={generateMeme}>Generate a new meme image 🖼</button>
            {memeImage.randomImage ? <img className="form--image" src={memeImage.randomImage} /> : ''}
        </div>
    )
}