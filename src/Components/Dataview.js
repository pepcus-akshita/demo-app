import React from "react";
// import {render} from "react-dom";
import data from "./dummy-data.json";
import Table from "./table";


export class Dataview extends React.Component {

    constructor() {
        super()
        this.state = {userData : []}
        // this.state =
        //     {
        //         list: [
        //             {
        //                 name: "Akshita",
        //                 address: "abcd",
        //                 phone_Number: 123,
        //                 email: "ab.cd@email.com"
        //             },//<td>akshita</td>
        //             {
        //                 name: "ayush",
        //                 address: "xyz",
        //                 phone_Number: 897,
        //                 email: "xy.z@email.com"
        //             }
        //         ]
        //     }
    };

    componentDidMount() {
        // const options = {
        //     method: 'GET', headers: {
        //         'Content-Type':
        //             'application/json;'
        //     }
        // }
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((json2) => {
                console.log('users', json2);
                this.setState({userData : json2.users})
            }
            )


    }

    render() {

        return (
            <div>
      <Table userData={this.state.userData} />
            </div>
        );
    }
}


    // let myPromise = new Promise(function (resolve,reject);
    // {
    // resolve(console.log("hello"));
    // reject(console.log("bye"));
    // });



export default Dataview;