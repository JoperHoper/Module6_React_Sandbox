import { useState } from 'react';

const AddCatForm = ({ handleCatListChange }) => {
    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [img, setImg] = useState('')


    const handleSubmit = (e) => {
        let newCat = { name: name, latinName: latinName, img: img }
        e.preventDefault();
        handleCatListChange(newCat);
        setName("")
        setLatinName("")
        setImg("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Cat Name
                    <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Add Cat Latin Name
                    <input type='text' name="latin-name" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
                </label>
                <label>Add Cat Img
                    <input type='text' name="img" value={img} onChange={(e) => setImg(e.target.value)} />
                </label>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )

}

export { AddCatForm }