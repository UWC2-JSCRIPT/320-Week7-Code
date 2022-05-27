import './App.css';
import Button from './Button';
import ThemeContext, { ThemeController } from './ThemeContext';

function Form() {
  return (
    <form>
      <Button />
    </form>
  )
}

function App() {
  return (
    <div className="App">
      <ThemeController>
        <Button />
      </ThemeController>

      {/* <ThemeContext.Provider value={{
        themeName: 'vaporware'
      }}>
        <div>
          <ThemeContext.Provider value={{
            themeName: 'dark'
          }}>
            <Button />
            <Form />
          </ThemeContext.Provider>
        </div>
      </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
