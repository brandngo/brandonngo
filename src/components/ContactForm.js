import * as React from "react";
import FormOption from "./FormOption";

const commentBox = {
  width: "70%",
  height: "30vh",
};

const submitBtn = {
  width: "15%",
  fontSize: "2vh",
  padding: "10px 0",
  fontFamily: "Consolas",
  textAlign: "center",
  backgroundColor: "dodgerblue",
  outline: "none",
  color: "white",
  border: "none",
};

const handleClick = () => {};

const ContactForm = () => {
  return (
    <div>
      <FormOption inputType="name" label="Name:" />
      <FormOption inputType="email" label="Email:" />
      <FormOption
        inputType="comment"
        label="Message:"
        inputStyle={commentBox}
      />
      <input
        type="submit"
        value="Send"
        onClick={(e) => handleClick()}
        style={submitBtn}
      />
    </div>
  );
};

export default ContactForm;
