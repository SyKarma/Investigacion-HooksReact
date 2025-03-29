// components/SearchBar.jsx
const SearchBar = ({ value, onChange }) => {
    return (
      <input
        type="text"
        placeholder="UseMemo Test"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
    );
  };
  
  export default SearchBar;