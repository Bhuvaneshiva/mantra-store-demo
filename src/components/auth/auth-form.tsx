import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <section>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form>
                {!isLogin && (
                    <Box sx={{ my: 2 }}>
                        <TextField
                            required
                            type="text"
                            id="username"
                            name="username"
                            label="Username"
                            value={username}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setUsername(event.target.value)}
                            sx={{ width: "600px", maxWidth: "100%" }}
                        />
                    </Box>
                )}
                <Box sx={{ my: 2 }}>
                    <TextField
                        required
                        type="email"
                        id="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setEmail(event.target.value)}
                        sx={{ width: "600px", maxWidth: "100%" }}
                    />
                </Box>
                <Box sx={{ my: 2 }}>
                    <TextField
                        required
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setPassword(event.target.value)}
                        sx={{ width: "600px", maxWidth: "100%" }}
                    />
                </Box>
                <Box sx={{ my: 2 }}>
                    <Button variant="outlined" type="submit">
                        {isLogin ? "Login" : "Create Account"}
                    </Button>
                    <Box sx={{ my: 2 }}>
                        <Button
                            type="button"
                            variant="text"
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin
                                ? "Create new account"
                                : "Login with existing account"}
                        </Button>
                    </Box>
                </Box>
            </form>
        </section>
    );
}

export default AuthForm;
