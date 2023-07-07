import { Main } from "./components/main";
import { useTheme } from "./hooks";

function App() {
  // const { setDarkTheme } = useTheme();
 
  
  return (
    <>
      {/* <button onClick={() => setDarkTheme((v) => !v)}>Change Theme</button> */}
      <Main />
    </>
  );
}

export default App;
