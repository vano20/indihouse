import { Button, Container, FormControl, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import InputPassword from "../components/InputPassword"
import UsersRepository from "../api/users"
import { useAuth } from "../context/login"

function Login() {
  const navigate = useNavigate();
  const { handleIsLogin } = useAuth()

  const [user, setUser] = useState({ username: '', password: '' })
  const handleInput = (inputtedValue) => {
    setUser({
      ...user,
      ...inputtedValue,
    })
  }
  const handleLogin = async () => {
    try {
      const { username, password } = user;
      const { data } = await UsersRepository.getUser({ username })

      if (password === data.password) {
        handleIsLogin()
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item>
          <Typography variant="h3" component="h3">
            Welcome to indiHouse
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction="column" justifyContent="center">
            <Grid item>
              <FormControl fullWidth sx={{ minWidth: { xs: '200px', md: '400px' } }}>
                <TextField id="login-username" value={user.username} label="Username" variant="outlined" onChange={(e) => handleInput({ username: e.target.value })} />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputPassword id="login-password" value={user.password} label="Password" variant="outlined" onChange={(e) => handleInput({ password: e.target.value })} />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item mt={2}>
            <Button variant="contained" fullWidth onClick={handleLogin}>Login</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login