import { useState } from 'react';
import { SingleCat } from './SingleCats'

const BigCats = () => {
    const [catsData, setCatsData] = useState([
        { name: 'Leopard', latinName: 'Panthera pardus', img: 'https://i.natgeofe.com/k/86c7c0fe-43f4-4bf8-b348-ccdd48528116/Leopard-Mom-Cub_Leopards_KIDS_0621_2x3.jpg' },
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', img: 'https://twpark.com/wp-content/uploads/2023/05/2023MAY02_BABY_CHEETAH_CUBS_KAZI_ZURI_ANDIALEXANDER_0_DSC06575-Enhanced-NR-1-scaled.jpg' },
        { name: 'Lion', latinName: 'Panthera leo', img: 'https://th-thumbnailer.cdn-si-edu.com/OACQ5mJpMzgc92uVtSq7jR54qEc=/800x450/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a9/ff/a9ff31d0-aecd-464e-80c7-873e4651cd2b/mufasa.jpeg' },
        { name: 'Cougar', latinName: 'Puma concolor', img: 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_mountainlion%20copy.jpg' },
        { name: 'Jaguar', latinName: 'Panthera onca', img: 'https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_LPR_soy_story_WW146388/magazine_small/5lgny6cc94_Medium_WW146388.jpg' },
        { name: 'Tiger', latinName: 'Panthera tigris', img: 'https://cdn.drawception.com/drawings/998244/OtOlr17wvB.png' },
        { name: 'Snow leopard', latinName: 'Panthera uncia', img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIDs6d09KDFS79kte7CJkKrZ9wwcA-6YL3xbGyLw6wKYQ7rUuw' },
    ]);

    const sortingCats = (type) => {
        const sortedCats = [...catsData];

        sortedCats.sort((a, b) => {
            if (type === "asc") {
                if (a.name > b.name) {
                    return 1
                }
                else {
                    return -1
                }
            }
        })
        if (type === "desc") {
            sortedCats.sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        }
        setCatsData(sortedCats)
    };

    const filteredAnimal = () => {
        const filteredPanthera = [...catsData];
        const filteredResult = filteredPanthera.filter((animal) => {
            if (animal.latinName.includes("Panthera")) {
                return animal
            }
        })
        setCatsData(filteredResult)
    }

    const displayAll = () => {
        setCatsData([{ name: 'Leopard', latinName: 'Panthera pardus', img: 'https://i.natgeofe.com/k/86c7c0fe-43f4-4bf8-b348-ccdd48528116/Leopard-Mom-Cub_Leopards_KIDS_0621_2x3.jpg' },
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', img: 'https://twpark.com/wp-content/uploads/2023/05/2023MAY02_BABY_CHEETAH_CUBS_KAZI_ZURI_ANDIALEXANDER_0_DSC06575-Enhanced-NR-1-scaled.jpg' },
        { name: 'Lion', latinName: 'Panthera leo', img: 'https://th-thumbnailer.cdn-si-edu.com/OACQ5mJpMzgc92uVtSq7jR54qEc=/800x450/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a9/ff/a9ff31d0-aecd-464e-80c7-873e4651cd2b/mufasa.jpeg' },
        { name: 'Cougar', latinName: 'Puma concolor', img: 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_mountainlion%20copy.jpg' },
        { name: 'Jaguar', latinName: 'Panthera onca', img: 'https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_LPR_soy_story_WW146388/magazine_small/5lgny6cc94_Medium_WW146388.jpg' },
        { name: 'Tiger', latinName: 'Panthera tigris', img: 'https://cdn.drawception.com/drawings/998244/OtOlr17wvB.png' },
        { name: 'Snow leopard', latinName: 'Panthera uncia', img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIDs6d09KDFS79kte7CJkKrZ9wwcA-6YL3xbGyLw6wKYQ7rUuw' }
        ])
    }

    const catListHandler = () => {
        return catsData.map((cat) => <SingleCat catData={cat} />)
    };

    return (
        <div>
            <button onClick={() => sortingCats("asc")} style={{ border: "1px black solid", padding: "5px 20px", margin: "0px 5px" }}>Ascending</button>
            <button onClick={() => sortingCats("desc")} style={{ border: "1px black solid", padding: "5px 20px", margin: "0px 5px" }}>Decending</button>
            <button onClick={() => filteredAnimal()} style={{ border: "1px black solid", padding: "5px 20px", margin: "0px 5px" }}>Filter</button>
            <button onClick={() => displayAll()} style={{ border: "1px black solid", padding: "5px 20px", margin: "0px 5px" }}>Reset</button>
            <ul>{catListHandler()}</ul>
        </div>
    )


}

export { BigCats }