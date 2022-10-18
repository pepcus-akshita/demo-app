import React from 'react';
import data from "./dummy-data.json";

export default function Table(props) {
console.log('props in table component',props);
    // const key1 = Object.keys(props);
    // const val1 = Object.values(props);
    // const key2 = Object.keys(val1)
    // const val2 = Object.values(val1);


    {/*{console.log("displaying keys of props" , key1)}*/}
    {/*{console.log("displaying values of props" , val1)}*/}
    {/*{console.log("displaying keys of val1" , key2)}*/}
    {/*{console.log("displaying values of val1" , val2)}*/}


    return (<div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>

                {/*{props.userData.map(list1 => <tr key={Math.random()}>*/}
                {/*    <td key={Math.random()}>{list1.firstName}</td>*/}
                {/*    <td key={Math.random()}>{list1.address.address}</td>*/}
                {/*    <td key={Math.random()}>{list1.phone}</td>*/}
                {/*    <td key={Math.random()}>{list1.email}</td>*/}
                {/*</tr>)}*/}

                {/*<td>{this.state.Name}</td>*/}
                {/*<td>{this.state.Address}</td>*/}
                {/*<td>{this.state.Phone_Number}</td>*/}
                {/*<td>{this.state.Email}</td>*/}
                </tbody>
            </table>


        </div>);
}


// export default Table;