const BookImage = ({ imageLink, bookName }) => {
  return (
    <figure className="flex-1 max-w-[580px] bg-gray-100 p-10 rounded-2xl flex justify-center items-center max-xl:mx-auto">
      <img
        src={imageLink}
        alt={bookName}
        className="w-[425px] h-full object-cover rounded-2xl"
      />
    </figure>
  );
};

export default BookImage;
