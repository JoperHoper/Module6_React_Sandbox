import { useState } from "react"

export const emojiContainer = () => {
    const [emoji, setEmoji] = useState("(✿◠‿◠)")
    const [color, setcolor] = useState("#00000")
    const emojiArray = [{ emoji: "¯\_( ͡° ͜ʖ ͡°)_/¯", color: "#1eff00" }, { emoji: "~\(≧▽≦)/~", color: "#fcba03" }, { emoji: "ʕっ•ᴥ•ʔっ", color: "#0083e8" }, { emoji: "⊙ω⊙", color: "#e97aff" }]

    const emojiHandler = () => {
        let index = Math.round(Math.random()*3)
        let selectedObj = emojiArray[index]
        setEmoji(selectedObj.emoji)
        setcolor(selectedObj.color)
    }

    return (
        <div>
            <h2>Current Emoji: <p style={{ color: color }}>{emoji}</p></h2>
            <button style={{ border: "1px black solid" }} onClick={emojiHandler}>Change Mood</button>
        </div>
    )
}