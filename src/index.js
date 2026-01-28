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
  const getBook = (id) =>{
    const book = BookArr.find((bookie)=>bookie.id === id)
    console.log(book);
  }
  return (
    <section className="bookList">
    {
      BookArr.map((book)=>{
        return (
          <Book {...book} key={book.id} someVal={getBook}/>
        )
      })
    }
    </section>
  );
};

const EventExamples = () =>{
  const handleFormInput = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handling form input');
    
  }

  const handleFormSubmission = (e) =>{
    e.preventDefault()
    console.log('form submitted');
    
  }

  const handleButtonClick = (e) => {
    e.preventDefault()
    alert('button click')
  }

  return <section>
    <form onSubmit={handleFormSubmission}>
      <h2>Typical form</h2>
      <input type="text" name="example" style={{margin:'1rem 0'}} onChange={handleFormInput}></input>
      <div>
      <button type="submit">submiit</button>
    </div>
    </form>
    
    <button type="" onClick={handleButtonClick}>click me</button>
  </section>
}

const Book = (props) => {
  //console.log('props',props);
  const { img, children,title, author, someVal, id  } = props
  const displayTitle = (e) => {
    console.log(e);
    
    console.log(title);
    
  }
  return (
    <article className="book">
      <img
        src={img}
        alt="let them live"
      />
      <h2>{title}</h2>
      <button onClick={()=>someVal(id) }>Display Title</button>
      <p>{author}</p>
      {children}
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
