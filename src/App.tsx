import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "@/components";

function App() {
  const [count, setCount] = useState(0)
    const { t } = useTranslation()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} and has been counted
        </button>
        <p>
            {t('Welcome')}
        </p>
      </div>
      <p className="read-the-docs">
          <LanguageSwitcher />
          <br />
          {t('date', { date: new Date() })}
      </p>
    </div>
  )
}

export default App
