export default function Meme() {
    return (
        <form className="form">
            <input type="text" className="form--input" aria-aria-labelledby="Top Text" placeholder="Shut up" />
            <input type="text" className="form--input" aria-label="Bottom Text" placeholder="Take My Money" />
            <button className="form--button">Generate a new meme image 🖼</button>
        </form>
    )
}