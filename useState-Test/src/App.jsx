import useToggle from './Hooks/useToggle'
import ToggleSwitch from './Components/ToggleSwitch';
import './App.css'

function App() {
  const [isDarkMode, toggleMode] = useToggle(false);

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <h1>UseState</h1>
      <ToggleSwitch isOn={isDarkMode} onToggle={toggleMode} />
      <p>Modo actual: {isDarkMode ? 'Oscuro 🌑' : 'Claro ☀️ '}</p>
    </div>
  );
}

export default App
