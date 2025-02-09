import React from "react";
import { useState } from "react";

export default function BookForm({ setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  let id = 3;

  function handleSubmit(e) {
    e.preventDefault();

    if (!(title && author && date && genre)) {
      alert("please fill in all the fields");
    }

    const newBook = {
      id: id,
      title: title,
      author: author,
      releaseDate: date,
      genre: genre,
      wishlisted: false,
    };

    console.log(date);
    console.log(typeof date);

    setBooks((prevBooks) => [...prevBooks, newBook]);
    setTitle("");
    setAuthor("");
    setDate("");
    setGenre("");
    id += 1;
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="date"
          placeholder="Release Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => setGenre(e.target.value)}
        />

        <button>Add Book</button>
      </form>
    </div>
  );
}
