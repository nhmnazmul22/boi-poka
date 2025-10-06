export const fetchBooks = async () => {
  const res = await fetch("/data/books.json");
  return res.json();
};
