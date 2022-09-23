import React from "react";

class MyClass extends React.Component {
    constructor() {
        super();
        this.state = {fname: "Akshita",
            lname: "Gupta" };
    }
    render(){
        return (<>
                <h4>Learn React with {this.state.fname}.</h4>
                <div className="Hello">
                    <div>Learn React with Akshita! </div>
                    The New member, Hello!
                </div>
            </>
        );
    }
}
