import React, {createContext} from "react";
// import {render} from "react-dom";
// import data from "./dummy-data.json";
import Table from "./table";
import themecontext from "../Context/themecontext";

const userContext = createContext();
const Dataview2 = () => {
const [userData1 , setData] = React.useState([])


 React.useEffect(() => {
     fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((json1) => {
                console.log('dataview2 users ', json1);
                    console.log('dataview2 users typeof - json1 ', json1);
                // this.setState({userData : json1.users})
                setData(json1.users);
            }
            )
 },[])

    return (
        <>
            <div>
           <div>12344778</div>
            {/*{console.log('displaying userdata1', userData1)}*/}
            {/*{console.log('displaying typeof userdata1', typeof userData1)}*/}
            {/*{console.log("length of userdata1",userData1.length)}*/}
            {/*{console.log("displaying userData1",userData1)}*/}


            <hr />
<Component1 />

            <Table userData={userData1} />
        </div>

        </>
    );
}

function Component1()
{
    return (
        <>
            <h4>component 1</h4>
            <Component2 />
        </>
             );
}

function Component2()
{
    return (
        <>
            <h4>component 2</h4>
            <Component3 />
        </>
        );
}

function Component3()
{

    return (
<>
    <h4>component 3</h4>
<hr/>
        {/*<Table userData={userData1} />*/}

</>
    );
}


//
// const xyz = (abc) => {
//     console.log(abc/2);
// }
// xyz(5)
// xyz("hell world");
//
// export class Dataview2 extends React.Component {
//
//     constructor() {
//         super()
//         this.state = {userData : []}
//         // this.state =
//         //     {
//         //         list: [
//         //             {
//         //                 name: "Akshita",
//         //                 address: "abcd",
//         //                 phone_Number: 123,
//         //                 email: "ab.cd@email.com"
//         //             },//<td>akshita</td>
//         //             {
//         //                 name: "ayush",
//         //                 address: "xyz",
//         //                 phone_Number: 897,
//         //                 email: "xy.z@email.com"
//         //             }
//         //         ]
//         //     }
//     };
//
//     componentDidMount() {
//         // const options = {
//         //     method: 'GET', headers: {
//         //         'Content-Type':
//         //             'application/json;'
//         //     }
//         // }
//         fetch('https://dummyjson.com/users')
//             .then(res => res.json())
//             .then((json1) => {
//                 console.log('users', json1);
//                 this.setState({userData : json1.users})
//             }
//             )
//
//
//     }
//
//     render() {
//
//         return (
//             <div>
//                 123
//       <Table userData={this.state.userData} />
//             </div>
//         );
//     }
// }
//
//
//     // let myPromise = new Promise(function (resolve,reject);
//     // {
//     // resolve(console.log("hello"));
//     // reject(console.log("bye"));
//     // });
//


export default Dataview2;