import { useGetTodosQuery } from "./app/api/todosApi";
import { Main } from "./components/main";
import { useTheme } from "./hooks";

function App() {
  // const { data, isError, isLoading } = useGetTodosQuery(null);

  // if (isLoading) {
  //   return <h1>LOADING</h1>;
  // }

  // if (isError) {
  //   return null;
  // }


  // const { setDarkTheme } = useTheme();

  return (
    <>
      {/* <button onClick={() => setDarkTheme((v) => !v)}>Change Theme</button> */}
      <Main />
    </>
  );
}

export default App;
