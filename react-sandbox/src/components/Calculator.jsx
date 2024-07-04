import { useState } from "react";

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [value_1, setValue_1] = useState(0)
    const [value_2, setValue_2] = useState(0)

    const calStyle = {
        padding: "8px 15px",
        margin: "5px",
        border: "1px solid grey"
    }

    const Addition = () => {
        setResult(parseInt(value_1) + parseInt(value_2));
    }
    const Subtraction = () => {
        setResult(parseInt(value_1) - parseInt(value_2));
    }
    const Divide = () => {
        setResult(parseInt(value_1) / parseInt(value_2)).toFixed(3)
    }
    const Multiply = () => {
        setResult(parseInt(value_1) * parseInt(value_2));
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                Value 1<input name="value_1" value={value_1} type="number" style={{ margin: "8px" }} onChange={(e) => parseInt(setValue_1(e.target.value))} />
                Value 2<input name="value_2" value={value_2} type="number" style={{ margin: "8px" }} onChange={(e) => parseInt(setValue_2(e.target.value))} />
            </div>
            <button style={calStyle} onClick={Addition}>+</button>
            <button style={calStyle} onClick={Subtraction}>-</button>
            <button style={calStyle} onClick={Divide}>/</button>
            <button style={calStyle} onClick={Multiply}>*</button>
            <div>Result: {result}</div>
        </div>
    )
}

export { Calculator }