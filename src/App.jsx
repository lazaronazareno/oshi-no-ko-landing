import './App.css'
import Characters from './components/Characters'
import Home from './components/Home'
import Info from './components/Info'
import Layout from './components/Layout'
import Music from './components/Music'

function App () {
  return (
    <Layout>
      <div className='App'>
        <Home />
        <Info />
        <Characters />
        <Music />
      </div>
    </Layout>
  )
}

export default App
