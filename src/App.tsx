import { useState, useEffect } from 'react'
import './App.css'

type Theme = 'v-light' | 'v-dark' | 'b-light' | 'b-dark';

function App() {
  const [theme, setTheme] = useState<Theme>('v-light')

  // Apply theme class to body element
  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('v-light', 'v-dark', 'b-light', 'b-dark');
    
    // Add current theme class if it's not the default (v-light)
    if (theme !== 'v-light') {
      document.body.classList.add(theme);
    }
  }, [theme]);

  const themeOptions: { value: Theme; label: string }[] = [
    { value: 'v-light', label: 'Violet Light' },
    { value: 'v-dark', label: 'Violet Dark' },
    { value: 'b-light', label: 'Blue Light' },
    { value: 'b-dark', label: 'Blue Dark' },
  ];

  return (
    <div className='flex items-center justify-center h-screen'>
    Hello world
      <div className="theme-selector" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <select 
          value={theme} 
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="p-2 rounded border"
        >
          {themeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default App
