import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import getBooks from "./data.js";

function FilterBooksList(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [buttonText, setButtonText] = useState("Show Table");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  function toggleInput() {
    const input = document.getElementById("inputSearch");

    if (input.style.display === "inline-block") {
      input.style.display = "none";
      setButtonText("Show Table")
      setBooks([]); // Limpiar la lista de libros cuando se oculta la entrada
      setSelectedBook(null); // Limpiar el libro seleccionado
    } else {
      setButtonText("Hide Table")
      input.style.display = "inline-block";
      setBooks(getBooks()); // Cargar los datos de los libros cuando se muestra la entrada
    }
  }

  function showBookDetails(book) {
    setSelectedBook(book);
  }

  return (
    <div id={props.id}>
      <button onClick={toggleInput} id="buttonSearch">
        {buttonText}
      </button>
      <input
        type="text"
        id="inputSearch"
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({ filter: "" });
          }
        }}
      />
      <div id="DisplayBookData">
        <div id="allBooksDisplay">
          {books
            .filter((book) => {
              let filter = searchParams.get("filter");
              if (!filter) {
                return true;
              }
              let title = book.title.toLowerCase();
              return title.startsWith(filter.toLowerCase());
            })
            .map((book, index) => (
              <div key={index}>
                <p>
                  <a href="#" onClick={() => showBookDetails(book)}>
                    {book.title}
                  </a>
                </p>
              </div>
            ))}
        </div>
        <div id="BookInsideData">
          {selectedBook && (
            <div>
              <p>Autor: {selectedBook.author}</p>
              <p>Título: {selectedBook.title}</p>
              <p>Año: {selectedBook.year}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterBooksList;
