import { useState } from 'react'


export default function TextForm(props) {
  const  handleUpCLick = ()=> {
    // console.log("Upper case was Clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  }
  const  handleLoCLick = ()=> {
    // console.log("Upper case was Clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  }

  const  handleClearCLick = ()=> {
    // console.log("Upper case was Clicked:" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  }
  const  handleOnChange = (event)=> {
    // console.log("On Change");/
    setText(event.target.value)
  }

  // Credits: A
  const handleCopy = ()=> {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
  }

  // Credits: Coding wala
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success")
  }



  const [text, setText] = useState('');
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <div>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#040101'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'#040101'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpCLick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoCLick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearCLick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#040101'}}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and  {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </div>
  )
}
                
