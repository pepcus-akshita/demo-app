import React from "react";



const MyClock = () => {
    return(
        <div>
            <h2>This is my clock display</h2>
            <p>The date today is - {new Date().toLocaleDateString()}.</p>
            <p>The time is - {new Date().toLocaleTimeString()}.</p>
            {/*{setInterval(Tick,1000)}*/}

        </div>
    );
}

export default MyClock;
//
//
// function Tick()
// {
//
//     return(
//         const d = new Date().toLocaleTimeString()
//
//
//
//     );
//
// }