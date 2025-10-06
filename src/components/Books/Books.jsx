import { use } from "react";
import Container from "../Layout/Container";
import Book from "./Book";

const Books = ({ bookPromise }) => {
  const books = use(bookPromise);

  return (
    <section className="py-10">
      <Container>
        <h2 className="text-center font-semibold text-4xl">Books</h2>
        {/* Books Not found Fallback */}
        {books.length === 0 && (
          <div
            role="alert"
            className="alert  bg-[#59C6D2] border-0 my-10 justify-center max-w-md mx-auto"
          >
            <span className="text-lg text-white">Books Not found!</span>
          </div>
        )}
        {/* Rendering Book list */}
        <div className="grid grid-cols-3 gap-10 my-10">
          {books.length > 0 &&
            books.map((book) => <Book key={book.bookId} book={book}></Book>)}
        </div>
      </Container>
    </section>
  );
};

export default Books;
