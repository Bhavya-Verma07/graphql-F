import {
  useQuery,
  gql,
} from "@apollo/client";


const myquery = gql`
  query GetTodos {
    getTodos{
      id
      title
      completed
    }
  }
`;

function App() {
  const { data, loading } = useQuery(myquery);

  console.log(data);
if(loading) 
return <h1>Loading... </h1>

  return (
    <>
      {JSON.stringify(data)}
      {/* hello */}
<h4>Table for ToDos</h4>

<table>
  <tbody>
    {
      data?.getTodos.map(todo=>
      <tr>
      <td>{todo?.id}</td>
      <td>{todo?.title}</td>
      <td>{todo?.completed}</td>    
      </tr>)
    }
  </tbody>
</table>



    </>
  );
}

export default App;
