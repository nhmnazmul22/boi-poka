import { render, screen, within } from "@testing-library/react";
import Book from "./Book";
import { MemoryRouter } from "react-router";

const mockBook = {
  bookId: 1,
  bookName: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
  rating: 4.5,
  category: "Classic",
  tags: ["Fiction", "Romance"],
};

describe("Book Cart Components", () => {
  it("Should render a book images within in link", () => {
    render(
      <MemoryRouter>
        <Book book={mockBook}></Book>
      </MemoryRouter>
    );

    const link = screen.getByTestId("book-img");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/bookDetails/${mockBook.bookId}`);

    const image = within(link).getByAltText(mockBook.bookName);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockBook.image);
  });

  it("Should render all books tags when tags is exist", () => {
    render(
      <MemoryRouter>
        <Book book={mockBook}></Book>
      </MemoryRouter>
    );

    mockBook.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("Should not render any tags if tags array is empty", () => {
    const bookWithoutTags = { ...mockBook, tags: [] };
    render(
      <MemoryRouter>
        <Book book={bookWithoutTags} />
      </MemoryRouter>
    );

    expect(screen.queryByText(mockBook.tags[0])).not.toBeInTheDocument();
  });

  it("Should have a book name heading within a link", () => {
    render(
      <MemoryRouter>
        <Book book={mockBook}></Book>
      </MemoryRouter>
    );

    const link = screen.getByTestId("book-name");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/bookDetails/${mockBook.bookId}`);

    const heading = within(link).getByRole("heading", {
      name: mockBook.bookName,
    });
    expect(heading).toBeInTheDocument();
  });

  it("Should render other book info: author, category and rating", () => {
    render(
      <MemoryRouter>
        <Book book={mockBook}></Book>
      </MemoryRouter>
    );

    const author = screen.getByText(mockBook.author);
    expect(author).toBeInTheDocument();

    const category = screen.getByText(mockBook.category);
    expect(category).toBeInTheDocument();

    const rating = screen.getByText(mockBook.rating);
    expect(rating).toBeInTheDocument();

    const starIcon = screen.getByTestId("star-icon");
    expect(starIcon).toBeInTheDocument();
  });
});
