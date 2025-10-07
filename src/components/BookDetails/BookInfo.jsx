import React from "react";
import BookOtherInfo from "./BookOtherInfo";

const BookInfo = ({ book }) => {
  return (
    <div className="flex-1">
      <div>
        <h2 className="text-4xl font-semibold mb-2">{book.bookName}</h2>
        <p className="text-lg font-medium mb-5">By: {book.author}</p>
        <hr className="my-3 border-gray-200" />
        <span className="font-medium text-base">{book.category}</span>
        <hr className="my-3 border-gray-200" />
      </div>
      <div>
        <p className="text-base my-5">
          <span className="font-semibold">Review : </span>
          {book.review}
        </p>
        <div className="flex gap-10 items-center">
          <span className="text-base font-semibold">Tag:</span>
          <div className="flex gap-2 items-center">
            {book.tags.length > 0 &&
              book.tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge bg-[#22be0a2e] text-[#23BE0A]"
                >
                  #{tag}
                </div>
              ))}
          </div>
        </div>
      </div>
      <hr className="my-5 border-gray-200" />
      <div className="space-y-4 mb-10">
        <BookOtherInfo
          label="Number of Pages:"
          value={book.totalPages}
        ></BookOtherInfo>
        <BookOtherInfo
          label="Publisher:"
          value={book.publisher}
        ></BookOtherInfo>
        <BookOtherInfo
          label="Year of Publishing:"
          value={book.yearOfPublishing}
        ></BookOtherInfo>
        <BookOtherInfo label="Rating:" value={book.rating}></BookOtherInfo>
      </div>
      <div className="flex gap-5 items-center">
        <button className="btn btn-outline border-gray-200 hover:bg-transparent hover:scale-103 transition-all duration-300">
          Read
        </button>
        <button className="btn bg-[#59C6D2] text-white border-0 hover:border-0 hover:scale-103 transition-all duration-300">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default BookInfo;
