import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  title: "The let them theory",
  author: "Mel Robbins",
  img: "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL900_SR900,600_.jpg"
}

const secondBook = {
  title: "Dog Man: Big Jim Believes: A Graphic Novel",
  author: "Dav Pilkey",
  img: "https://images-na.ssl-images-amazon.com/images/I/91cUuNGL-GL._AC_UL900_SR900,600_.jpg"
}


const BookList = () => {
  return (
    <section className="bookList">
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img}>
      <p>Lorem ipsum sit amet conceretuer</p>
      <button onClick={()=>console.log("new button")
      }>Click Me</button>
      </Book>
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}/>
      </section>
  );
};


const Book = (props) => {
  console.log(props);
  const {img,children} = props
  return (
    <article className="book">
      <img
        src={img}
        alt="let them live"
      />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      {children}
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
