import { render, screen } from "@testing-library/react";
import BookInfo from "./BookInfo";

const mockBook = {
  bookId: 1,
  bookName: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
  review:
    "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age.",
  totalPages: 192,
  rating: 4.5,
  category: "Classic",
  tags: ["Fiction", "Romance"],
  publisher: "Scribner",
  yearOfPublishing: 1925,
};

describe("Book Info component", () => {
  it("Should render book name, author and category", () => {
    render(<BookInfo book={mockBook}></BookInfo>);

    const bookName = screen.getByRole("heading", { name: mockBook.bookName });
    expect(bookName).toBeInTheDocument();

    const author = screen.getByText(`By: ${mockBook.author}`);
    expect(author).toBeInTheDocument();

    const category = screen.getByText(mockBook.category);
    expect(category).toBeInTheDocument();
  });

  it("Should render book review content and tags when tags exist", () => {
    render(<BookInfo book={mockBook}></BookInfo>);

    const reviewContent = screen.getByText(new RegExp(mockBook.review, "i"));
    expect(reviewContent).toBeInTheDocument();

    mockBook.tags.forEach((t) => {
      const tag = screen.getByText(`#${t}`);
      expect(tag).toBeInTheDocument();
    });
  });

  it("Should have two button", () => {
    render(<BookInfo book={mockBook}></BookInfo>);

    const readButton = screen.getByRole("button", { name: /Read/i });
    expect(readButton).toBeInTheDocument();

    const wishlistButton = screen.getByRole("button", { name: /Wishlist/i });
    expect(wishlistButton).toBeInTheDocument();
  });
});
