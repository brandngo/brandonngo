import * as React from 'react'

const labelFont = {
  fontFamily: "Consolas",
  color: "white",
  fontSize: "18px",
}

const inputBox = {
  outline: "none",
  fontFamily: "Consolas",
}

const FormOption = ({inputType, label, inputStyle}) => {
  const commentInput = inputStyle !== null ?
    <div><textarea type="text" id={inputType} name={inputType} style={{...inputStyle, ...inputBox}}></textarea> <br /></div> :
    <div><input type="text" id={inputType} name={inputType} style={{...inputStyle, ...inputBox}}/> <br /></div>;

  return (
    <div style={{marginBottom: "1vh"}}>
      <label for={inputType} style={labelFont}>{label}</label><br />
      {commentInput}
    </div>
  )
}

FormOption.defaultProps = {
  inputStyle: null
}

export default FormOption