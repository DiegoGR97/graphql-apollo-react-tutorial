import { gql, useQuery } from "@apollo/client";

function BookList() {
  const getBooks = gql`
    {
      books {
        name
        id
      }
    }
  `;

  const { error, data, loading } = useQuery(getBooks);
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
