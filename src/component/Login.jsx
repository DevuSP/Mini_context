import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {user, setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!userName || !password) return
        setUser({userName, password});
    }
    if(user) return  // if login is successfull return nothing.
    return (
        <div style={{width: "100vw" ,display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2>Login</h2>
            <input
            style={{marginBottom: "5px"}}
                value={userName}
                onChange={(e) => setUserName(e.target.value)} type="text" placeholder="username" />

            <input
            style={{marginBottom: "10px"}}
                value={password}
                onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}