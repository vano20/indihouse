import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { AuthProvider } from './context/login'
import { ToastProvider } from './context/toast'

function App() {
  return (
    <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App