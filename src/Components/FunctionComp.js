import React, {useState} from "react";
import colorContext from "../Context/ColorContext";
import ColorContext from "../Context/ColorContext";

export default function TextForm(props)
{
    const [text, setText] = useState(" ");
    const handleUpper = ()=>{
        // console.log("uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
    }
    const handlelower = ()=>{
        let newText1 = text.toLowerCase();
        setText(newText1);
    }

    const handleOnChange = (event)=>{
        // console.log("You have changed");
        setText(event.target.value);
    }
    return (
        <>
<ColorContext.Consumer >

</ColorContext.Consumer>
        <div>
            <h4>"My Demo Application is new app."</h4>
            <div className="mb-3">
                <label htmlFor={"Textarea"}  className="form-label">Enter the text to convert</label>
                <br/>
                <textarea className="form-control" id="my-box" rows="5" value={text} onChange={handleOnChange}> </textarea>
                <br/>
                <button className={"btn1"}  onClick={handleUpper}>Uppercase</button>
                <button className={"btn1"}  onClick={handlelower}>Lowercase</button>
            </div>
        </div>
        </>
    );
}
