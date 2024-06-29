export const SingleCat = ({ catData }) => {
    return (
        <>
            <li>
                <div>
                    <h2>{catData.name}</h2>
                    <p>{catData.latinName}</p>
                    <img src={catData.img} style={{ width: "150px", height: "130px" }}></img>
                </div>
            </li>
        </>
    )
}
