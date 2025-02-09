import { useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Future We Make",
      author: "Jane Doe",
      releaseDate: "2025-08-10",
      genre: "Science Fiction",
      wishlisted: true,
    },
    {
      id: 2,
      title: "Echoes of the Past",
      author: "John Smith",
      releaseDate: "2025-05-20",
      genre: "Historical Fiction",
      wishlisted: false,
    },
  ]);

  function toggleWishlist(bookId) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, wishlisted: !book.wishlisted } : book
      )
    );
  }

  return (
    <div className="main-container">
      <h1>Upcoming Book Releases</h1>

      <BookForm setBooks={setBooks} />
      <BookList books={books} toggleWishlist={toggleWishlist} />
    </div>
  );
}

export default App;
