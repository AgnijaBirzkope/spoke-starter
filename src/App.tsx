import { Frame47 } from './components/Frame47'
import './App.css'

function App() {
  return (
    <main className="app">
      <Frame47
        title="Flat tyre repair"
        description="Tube or tyre swap, any wheel size."
        duration="30 min"
        bikeType="All bikes"
        price="€15"
        nextSlot="today at 16:30"
      />
    </main>
  )
}

export default App
