import RedHeart from "../assets/images/heart-red.png";
import Heart from "../assets/images/heart.png";
import Books from "../assets/images/icons8-books-emoji-48.png";

export default function BookList({ books, toggleWishlist }) {
  const sortedBooks = [...books].sort(
    (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
  );
  return (
    <div>
      {sortedBooks.map((book) => {
        return (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>by: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Release Date: {book.releaseDate}</p>
            <p>
              Time until release:{" "}
              {new Date(book.releaseDate) > new Date() ? (
                <>
                  {Math.floor(
                    (new Date(book.releaseDate) - new Date()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days,
                  {Math.floor(
                    ((new Date(book.releaseDate) - new Date()) %
                      (1000 * 60 * 60 * 24)) /
                      (1000 * 60 * 60)
                  )}{" "}
                  hours
                </>
              ) : (
                "Released"
              )}
            </p>

            <div className="container-div">
              <div className="wishlist">
                {book.wishlisted ? (
                  <>
                    <img
                      src={RedHeart}
                      alt=""
                      width={28}
                      height={28}
                      onClick={() => toggleWishlist(book.id)}
                    />
                    Wishlisted
                  </>
                ) : (
                  <>
                    <img
                      src={Heart}
                      alt=""
                      width={28}
                      height={28}
                      onClick={() => toggleWishlist(book.id)}
                    />
                    Add to Wishlist
                  </>
                )}
              </div>

              <div className="available">
                {new Date(book.releaseDate) < new Date() ? (
                  <>
                    <img src={Books} width={28} height={28} alt="" /> Now
                    Available!
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    /// sort the BookList
    // alert if any field is left blank
    // wishlist changes
  );
}
