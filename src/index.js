import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookArr = [
  { 
    id: 1,
    title: "Dog Man: Big Jim Believes: A Graphic Novel",
    author: "Dav Pilkey",
    img: "https://images-na.ssl-images-amazon.com/images/I/91cUuNGL-GL._AC_UL900_SR900,600_.jpg"
  },
  {
    id: 2,
    title: "The let them theory",
    author: "Mel Robbins",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL900_SR900,600_.jpg"
  }
]

const BookList = () => {
  return (
    <section className="bookList">
      <EventExamples/>
    {
      BookArr.map((book)=>{
        return (
          <Book {...book} key={book.id}/>
        )
      })
    }
    </section>
  );
};

const EventExamples = () =>{
  const handleFormInput = () => {
    console.log('handling form input');
    
  }

  const handleButtonClick = () => {
    alert('button click')
  }

  return <section>
    <form>
      <h2>Typical form</h2>
      <input type="text" name="example" style={{margin:'1rem 0'}} onChange={handleFormInput}></input>
    </form>
    <button onClick={handleButtonClick}>click me</button>
  </section>
}

const Book = (props) => {
  //console.log('props',props);
  const { img, children,title, author } = props
  return (
    <article className="book">
      <img
        src={img}
        alt="let them live"
      />
      <h2>{title}</h2>
      <p>{author}</p>
      {children}
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
