import React from "react";



const MyClock = () => {
    return(
        <div>
            <h2>This is my clock display</h2>
            <p>The date today is - {new Date().toLocaleDateString()}.</p>
            <p>The time is - <span id={"demo"}> </span> </p>

        </div>
    );
}

// export default MyClock;





// setInterval(myTimer, 1000);

// function myTimer() {
//     const d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }
// window.onload = function ()
// {
//     myTimer();
// }