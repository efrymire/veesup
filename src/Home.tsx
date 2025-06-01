import { useState, useEffect } from 'react'
import './Home.css'
import Toggle from './components/Toggle';

enum Team { 
  valk = 'Valkyries', 
  nova = 'Villanova' 
};
// type Theme = 'v-light' | 'v-dark' | 'b-light' | 'b-dark';

function Home() {
  const [team, setTeam] = useState<Team>(Team.valk)
  // const [theme, setTheme] = useState<Theme>('v-light')

  // Apply theme class to body element
  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('v-light', 'v-dark', 'b-light', 'b-dark');
    
    if (team === Team.valk) {
      document.body.classList.add('v-light');
    } else if (team === Team.nova) {
      document.body.classList.add('b-light');
    }
  }, [team]);

  // const themeOptions: { value: Theme; label: string }[] = [
  //   { value: 'v-light', label: 'Violet Light' },
  //   { value: 'v-dark', label: 'Violet Dark' },
  //   { value: 'b-light', label: 'Blue Light' },
  //   { value: 'b-dark', label: 'Blue Dark' },
  // ];

  return (<div className='h-full w-full flex flex-col items-center justify-center'>
    <div className='absolute top-1 right-1'>
      <Toggle 
        options={[Team.valk, Team.nova]} 
        selected={team} 
        onChange={(team) => setTeam(team as Team)}
        />
    </div>
    <div className=''>
      <img src="/src/assets/veesup-black.svg" alt="Veesup Logo" className='h-16 fill-pink'/>
      <div>put your vees up</div></div>
  </div>)
}

export default Home
