import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img2 from "./img/download.png";
import  img3 from "./img/flower-3140492_1920.jpg";
import  img4 from "./img/tree-736885_1280.jpg";

//add props
const Person = ({img, name, job, children }) => {
  //template litrals
  // const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article  className =  "person">
      {/* {<img src={url}></img>} */}
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

//create component
const PersonList = () => {
  return (
    <section className = "person-list">
      <Person img="56" name="Franklin" job="WordPress dev">
        <img src = {img2}></img>
      </Person>
      <Person img="22" name="Benjamin" job="Frontend dev">
        <img src = {img3}></img>
      </Person>
      <Person img="17" name="Edwin" job="DB dev">
        <img src={img4}></img>
        <p>
          lorem ipsum dolor sit blah blah blah. Delectus nisi.
        </p>
      </Person>
    </section>
  )
}

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
