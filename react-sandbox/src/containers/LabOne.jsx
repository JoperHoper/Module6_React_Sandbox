import { GreetingsHoC } from "../components/Greeting";

export const LabOne = () => {
    const labQuestioncontainerStyle = {
        backgroundColor: 'lightgrey',
        color: "black",
        padding: "5px"
    }
    return (
        <div style={{ margin: "5px", width: "100%" }}>

            <LabelAndContent labelText={"Lab 1a & b"}>
                <div style={labQuestioncontainerStyle}>
                    <GreetingsHoC name={"Josephine"} />
                </div>
            </LabelAndContent>

            <LabelAndContent labelText={"Lab 1c"}>
                <div style={labQuestioncontainerStyle}>
                    <GreetingsHoC name={"Josephine"} />
                    <p>I want to welcome you to my website</p>
                </div>
            </LabelAndContent>
        </div>
    );
};

const LabelAndContent = ({ labelText, children }) => {
    const labelStyle = {
        textAlign: "left",
    }

    return (
        <>
            <h6 style={labelStyle}>{labelText}</h6>
            {children}
        </>
    )
}

export { }