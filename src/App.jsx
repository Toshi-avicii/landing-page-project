import Landing from './components/Landing'
import Navbar from './components/Navbar'
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  return (
    <div data-theme={theme}>
      <div className='w-[90%] mx-auto flex justify-center items-center flex-col'>
        <Navbar switchTheme={setTheme} theme={theme} />
        <Landing />
      </div>
    </div>
  )
}

export default App
