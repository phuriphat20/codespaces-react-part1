import "./Hello.css"

// export default function Hello(firstname,lastname){
//     return (<><h1>Hello world {firstname}{lastname}</h1>    </>
//     );
// }

// const Hello = function(prop) {
//     return (
//         <>
//             <h1>Hello World {props.name+"!!!"}</h1>
//         </>
//     )
// }
// export default Hello;

const Hello = prop =><><h1>Hello World {prop.firstname} {prop.lastname}</h1></>
export default Hello;