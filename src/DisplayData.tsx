import { gql, useQuery } from "@apollo/client";

const DisplayData = () => {
  const QUERY_ALL_USERS = gql`
    query GetAllUsers {
      users {
        id
        name
        username
        age
      }
    }
  `;
  const { data } = useQuery(QUERY_ALL_USERS);
  if (data) console.log(data);
  return <div>data</div>;
};

export default DisplayData;
