import { render, screen } from "@testing-library/react";
import BookOtherInfo from "./BookOtherInfo";

describe("Book Other Info Component", () => {
  it("Should render a book info label and it value", () => {
    const mockBook = { label: "Number of Pages:", value: 192 };

    render(
      <BookOtherInfo
        label={mockBook.label}
        value={mockBook.value}
      ></BookOtherInfo>
    );

    const label = screen.getByText(mockBook.label);
    const value = screen.getByText(mockBook.value);

    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
