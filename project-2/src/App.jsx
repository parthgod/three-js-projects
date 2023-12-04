import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { BallCanvas, EarthCanvas } from './components/canvas'
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "./assets";

function App() {

  return (
    <BrowserRouter>
      <div className='w-screen h-screen'>
        <BallCanvas icon={html} />
      </div>
    </BrowserRouter>
  )
}

export default App
