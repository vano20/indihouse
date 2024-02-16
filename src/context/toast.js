import { Alert, Snackbar } from "@mui/material"
import { createContext, useContext, useState } from "react"

const ToastContext = createContext()

export function ToastProvider({ children}) {
  const [toast, setToast] = useState({
    vertical: 'top',
    horizontal: 'center',
    open: false,
    message: '',
    key: Math.round(Math.random() * 9999),
    severity: 'success',
  })

  const openToast = (message, severity) => {
    setToast({
      ...toast,
      message,
      open: true,
      severity: severity || toast.severity
    })
  }

  const closeToast = () => {
    setToast({
      ...toast,
      open: false,
    })
  }

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      {children}
      <Snackbar
        anchorOrigin={{vertical: toast.vertical, horizontal: toast.horizontal}}
        open={toast.open}
        onClose={closeToast}
        // message={toast.message}
        key={toast.key}
        autoHideDuration={1000}
      >
        <Alert onClose={closeToast} severity={toast.severity} variant="filled">
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  return useContext(ToastContext)
}