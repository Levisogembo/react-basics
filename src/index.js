import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BookArr } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>Amazon BestSellers</h1>
      <section className="bookList">
        {
          BookArr.map((book, index) => {
            return (
              <Book {...book} index={index} key={book.id} />
            )
          })
        }
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
