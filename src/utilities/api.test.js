import { fetchBooks } from "./apis";

describe("Fetching books", () => {
  it("Should return a promise of fetching books", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const response = fetchBooks();

    expect(response).toBeInstanceOf(Promise);
  });
});
