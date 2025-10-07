export const fetchBooks = async () => {
  try {
    const res = await fetch("/data/books.json");
    return res.json();
  } catch (err) {
    throw new Error(`Error in fetching books: ${err}`);
  }
};
