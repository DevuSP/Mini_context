import React, { createContext } from "react";

const UserContext = createContext();

export default UserContext;

 // <UserContext.Providers>  // these are used as wrapper and every component inside it will have all the data inside our "UserContext". 
 //   <Login />    // component  
 //   <Card>    // component
   //     <Data />    // component inside another component.
  //  </Card>
//  </UserContext.Providers>  