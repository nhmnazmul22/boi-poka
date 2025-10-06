import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-sm p-5 group">
      <Link to={`/bookDetails/${book.bookId}`} data-testid="book-img">
        <figure className="bg-gray-100 py-8 rounded-2xl">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-[200px] h-[200px] object-contain"
          />
        </figure>
      </Link>
      <div className="card-body gap-0 pt-4 pb-0 px-0">
        <div className="flex gap-2 items-center mb-2">
          {book.tags.length > 0 &&
            book.tags.map((tag, index) => (
              <div key={index} className="badge bg-[#22be0a2e] text-[#23BE0A]">
                {tag}
              </div>
            ))}
        </div>
        <Link to={`/bookDetails/${book.bookId}`} data-testid="book-name">
          <h2 className="card-title text-2xl group-hover:text-[#23BE0A] transition-colors duration-200">
            {book.bookName}
          </h2>
        </Link>
        <p className="text-base">
          By: <span className="font-medium">{book.author}</span>
        </p>
        <div className="w-full border-[1px] border-dashed border-gray-200 my-5"></div>
        <div className="flex justify-between items-center">
          <p className="text-left font-medium text-base">{book.category}</p>
          <p className="font-medium flex gap-2 items-center justify-end ">
            <span className="text-base">{book.rating}</span>
            <span>
              <Star
                data-testid="star-icon"
                fill="currentColor"
                size={18}
                className="text-orange-500"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
