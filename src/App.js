import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { AuthProvider } from './context/login'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App