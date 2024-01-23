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
  { author: "Pierce Brown", title: "Amanecer rojo", year: 2014 },
  {
    author: "Ana Kosutic",
    title: "El corazón de la jauría",
    year: 2023,
  },
  {
    author: "Jennifer Armentrout",
    title: "De sangre y cenizas",
    year: 2023,
  },
  {
    author: "Brandon Sanderson",
    title: "Pack El Imperio Final",
    year: 2015,
  },
];

function getBooks() {
  // Aquí es donde cargarías los datos de tus libros.
  // En este ejemplo, simplemente estoy devolviendo los datos estáticos.
  return books;
}

export default getBooks;
