import { Button, Stack } from "@mui/material"
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/login";

function Layout() {
  const { logout } = useAuth();

  return (
    <div>
      <Stack direction="row" spacing={2} maxWidth="200px" alignItems="center" mb={2}>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Button variant="contained" onClick={() => logout()}>Logout</Button>
      </Stack>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout