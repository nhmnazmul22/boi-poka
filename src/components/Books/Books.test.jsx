import { render, screen, waitFor } from "@testing-library/react";
import Books from "./Books";
import { Suspense } from "react";
import { MemoryRouter } from "react-router";

const mockBooks = [
  { bookId: 1, title: "Book One", tags: [] },
  { bookId: 2, title: "Book Two", tags: [] },
];

const bookPromise = Promise.resolve(mockBooks);
const emptyBookPromise = Promise.resolve([]);

describe("Books Component", () => {
  it("Should have a heading", () => {
    render(
      <MemoryRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Books bookPromise={bookPromise} />
        </Suspense>
      </MemoryRouter>
    );
    waitFor(() => {
      const heading = screen.getByRole("heading", { name: "Books" });
      expect(heading).toBeInTheDocument();
    });
  });

  it("Should render the book list when books exist", () => {
    render(
      <MemoryRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Books bookPromise={bookPromise} />
        </Suspense>
      </MemoryRouter>
    );

    waitFor(() => {
      mockBooks.forEach((book) => {
        expect(screen.getByText(book.title)).toBeInTheDocument();
      });
    });
  });

  it("Should render a alert message when books not exist", () => {
    render(
      <MemoryRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Books bookPromise={emptyBookPromise} />
        </Suspense>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(
        screen.getByRole("alert", { name: /Books Not found!/i })
      ).toBeInTheDocument();
    });
  });
});
