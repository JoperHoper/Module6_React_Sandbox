import { useState } from "react"

export const Button = ({ loading }) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((count) => count + 1);
    };

    return (
        <div>
            {loading === true ? (<p>Loading....</p>) : (
                <button onClick={handleClick}> count: {count}</button>
            )}
        </div>
    )
}