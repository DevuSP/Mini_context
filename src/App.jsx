import React from "react"
import UserContextProvider from "./context/UserContextProvider"
import Login from "./component/Login"
import Profile from "./component/Profile"

function App() {

  return (
    <div>
      <p style={{ textAlign: "center" }}>Start</p>
      <UserContextProvider>
        <hr />
        <Login />
        <Profile />
        <hr />
      </UserContextProvider>
      <p style={{ textAlign: "center" }}>End</p>
    </div>
  )
}

export default App
