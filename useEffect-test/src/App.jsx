import useLocalStorage from './Hooks/useLocalStorage';
import ThemeToggler from './Components/ThemeToggler';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <h1>Persistencia con localStorage utilizando UseEffect</h1>
      <ThemeToggler 
        darkMode={darkMode} 
        onToggle={() => setDarkMode(!darkMode)} 
      />
    </div>
  );
}

export default App
