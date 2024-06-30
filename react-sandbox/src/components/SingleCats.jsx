export const SingleCat = ({ catData, handleCatDelete, catIndex }) => {

    return (
        <>
            <li>
                <div>
                    <h2>{catData.name}</h2>
                    <p>{catData.latinName}</p>
                    <img src={catData.img} style={{ width: "150px", height: "130px" }}></img>
                    <button onClick={() => handleCatDelete(catIndex)}>Delete</button>
                </div>
            </li>
        </>
    )
}
