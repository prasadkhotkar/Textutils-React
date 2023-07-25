import React,{ useState} from 'react'

export default function TextForm(props) {
    const uppercase=()=>
    {
        let newtxt=text.toUpperCase();
        setText(newtxt);  
    }
    const lowercase=()=>
    {
        let newtxt=text.toLowerCase();
        setText(newtxt);  
    }
    const copytext=()=>
    {
        var text=document.getElementById("floatingTextarea2");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const removeExtraSpace=()=>
    {
         let newtxt=text.split(/[ ]+ /);
         setText(newtxt.join(''));
    }
    const cleartxt=()=>
    {
        setText(" ");
    }
    const handelonchange=(e)=>
    {
      setText(e.target.value);
    }
    const[text,setText]=useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  style={{backgroundColor:props.mode==="dark"?"gray":"white",color:props.mode==="dark"?"white":"#042743"}}  onChange={handelonchange}   id="floatingTextarea2" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={uppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={lowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={copytext} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1" onClick={cleartxt}>Clear text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes Required to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in above textbox to preview it here"}</p>
        </div>
        </>
    )
}

