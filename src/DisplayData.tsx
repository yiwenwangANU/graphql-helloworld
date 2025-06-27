import { gql, useQuery } from "@apollo/client";
enum Nationality {
  CANADA,
  BRAZIL,
  INDIA,
  GERMANY,
  CHILE,
  UKRAINE,
}
export type User = {
  id: string;
  name: string;
  username: string;
  age: number;
  nationality: Nationality;
  friends?: [User];
  favoriteMovies?: [Movie];
};
export type Movie = {
  id: string;
  name: string;
  yearOfPublication: number;
  isInTheaters: boolean;
};
const DisplayData = () => {
  const QUERY_ALL_USERS = gql`
    query GetAllUsers {
      users {
        id
        name
        username
        age
        nationality
      }
    }
  `;
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  if (loading) return <h1>Data is Loading</h1>;
  if (data) console.log(data);
  if (error) console.error(error);
  if (data.users) {
    return data.users.map((user: User) => {
      return (
        <>
          <div>{user.name}</div>
          <div>{user.age}</div>
          <div>{user.nationality}</div>
        </>
      );
    });
  }
};

export default DisplayData;
