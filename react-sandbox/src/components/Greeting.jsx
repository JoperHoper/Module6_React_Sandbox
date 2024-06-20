export const greeting = ({name}) => {
    
    var welcomeString = "Hello World"

    if(name){
        welcomeString.slice(0,9)
    }

    return(
        <div>
            <h1>{welcomeString}</h1>
        </div>
    );
};

// export const greetingHoC = ({name}) => {
    
//     var welcomeString = "Hello World"

//     if(name){
//         welcomeString.slice(0,9)
//     }

//     return(
//         <div>
//             <h1>{welcomeString}</h1>
//         </div>
//     );
// };