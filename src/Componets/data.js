const books = [
    {
      author: "J.R.R. Tolkien",
      title: "The Lord of the Rings",
      year: 1954,
    },
    {
        author: "J.K. Rowling",
        title: "Harry Potter",
        year: 1997, // Año de publicación del primer libro
      },
      {
        author: "George R. R. Martin",
        title: "A Song of Ice and Fire",
        year: 1996, // Año de publicación del primer libro
      },
      {
        author: "Frank Herbert",
        title: "Dune",
        year: 1965,
      },
  ];
  
  function getBooks() {
    // Aquí es donde cargarías los datos de tus libros.
    // En este ejemplo, simplemente estoy devolviendo los datos estáticos.
    return books;
  }
  
  export default getBooks;
  