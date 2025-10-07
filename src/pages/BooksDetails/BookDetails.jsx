import { useLoaderData, useParams } from "react-router";
import Container from "../../components/Layout/Container";
import BookImage from "../../components/BookDetails/BookImage";
import BookInfo from "../../components/BookDetails/BookInfo";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === Number(id));

  return (
    <section className="py-20">
      <Container>
        {book && (
          <div className="flex flex-col xl:flex-row gap-10 items-start">
            <BookImage
              imageLink={book.image}
              bookName={book.bookName}
            ></BookImage>
            <BookInfo book={book}></BookInfo>
          </div>
        )}
      </Container>
    </section>
  );
};

export default BookDetails;
