const BigCats = () => {

    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', img: 'https://twpark.com/wp-content/uploads/2023/05/2023MAY02_BABY_CHEETAH_CUBS_KAZI_ZURI_ANDIALEXANDER_0_DSC06575-Enhanced-NR-1-scaled.jpg' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', img: 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_mountainlion%20copy.jpg' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', img: 'https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_LPR_soy_story_WW146388/magazine_small/5lgny6cc94_Medium_WW146388.jpg' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', img: 'https://i.natgeofe.com/k/86c7c0fe-43f4-4bf8-b348-ccdd48528116/Leopard-Mom-Cub_Leopards_KIDS_0621_2x3.jpg' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', img: 'https://th-thumbnailer.cdn-si-edu.com/OACQ5mJpMzgc92uVtSq7jR54qEc=/800x450/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a9/ff/a9ff31d0-aecd-464e-80c7-873e4651cd2b/mufasa.jpeg' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIDs6d09KDFS79kte7CJkKrZ9wwcA-6YL3xbGyLw6wKYQ7rUuw' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', img: 'https://cdn.drawception.com/drawings/998244/OtOlr17wvB.png' },
    ];

    const catListHandler = () => {
        return cats.map((cat) => <SingleCat catData={cat} />)
    };

    return <ul>{catListHandler()}</ul>
};

const SingleCat = ({ catData }) => {
    return (
        <>
            <li>
                <div>
                    <h2>{catData.name}</h2>
                    <p>{catData.latinName}</p>
                    <img src={catData.img} style={{width:"150px", height:"130px"}}></img>
                </div>
            </li>
        </>
    )
}

export { BigCats, SingleCat };