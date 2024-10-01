import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    backgroundColor: "black",
    color: "white",
  });

  // const [btntext, setBtnText] = useState("Enable Light Mode");

  /* const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setmyStyle({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText("Enable Light Mode");
    }
  };*/

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <h1 className="my-2">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={{ backgroundColor: "white" }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "white" }}
            >
              My first app gives you a way to analyze your text quickly and
              efficiently.Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ backgroundColor: "white" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "white" }}
            >
              My first app is a free character counter tool that provides
              instant character count & word count statistics for a given text.
              My first app reports the number of words and characters.Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{ backgroundColor: "white" }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "white" }}
            >
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera.It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
