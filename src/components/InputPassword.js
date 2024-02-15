import { Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"

function InputPassword({ children, ...rest }) {
    const [showPassword, setShowPassowrd] = useState(false)

    return (
        <TextField {...rest} type={showPassword ? 'text' : 'password'} InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton aria-label="Toggle password visibility" onClick={() => setShowPassowrd(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            )
        }} />
    )
}

export default InputPassword