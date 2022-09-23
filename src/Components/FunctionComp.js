import React from "react";

export default function Test()
{
    return (
        <div>
            <h4>"My Demo Application is new app."</h4>
            {new Date().toLocaleDateString()}
            <br /><br />
            <input style={{border: '3px solid blue'}} type="number" min={5} max={10} />
            <br /><br />
            <textarea  autoFocus maxLength={10} spellCheck ></textarea>

        </div>
    );
}


// export default Test;