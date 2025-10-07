import { render, screen } from "@testing-library/react";
import BookImage from "./BookImage";

describe("Book Image Components", () => {
  it("Should render a book images", () => {
    const mockBook = {
      imageLink: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
      bookName: "The Great Gatsby",
    };

    render(
      <BookImage
        imageLink={mockBook.imageLink}
        bookName={mockBook.bookName}
      ></BookImage>
    );

    const image = screen.getByAltText(mockBook.bookName);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockBook.imageLink);
  });
});
