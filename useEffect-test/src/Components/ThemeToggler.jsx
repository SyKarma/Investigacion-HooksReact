import './ThemeToggler.css'; 

export default function ThemeToggler({ darkMode, onToggle }) {
  return (
    <div className="theme-toggler-container">
      <button 
        onClick={onToggle}
        className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
        aria-label={darkMode ? 'Modo claro' : 'Modo oscuro'}
      >
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>
      <p className="theme-status">
        Preferencia guardada: {darkMode ? 'Oscuro' : 'Claro'}
      </p>
    </div>
  );
}