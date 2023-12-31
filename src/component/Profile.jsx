import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return (<div style={{padding: "5px 0",color: "salmon" ,width: "100vw" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>Please Login</div>)
    return (
        <div style={{height: "50vh", width: "100vw" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ color: "blue" }}>Welcome {user.userName}</div>
        </div>
    )
}