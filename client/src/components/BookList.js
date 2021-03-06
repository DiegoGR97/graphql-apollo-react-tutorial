import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

function BookList() {
  const { error, data, loading } = useQuery(getBooksQuery);
  console.log({ error, data, loading });

  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}

export default BookList;
