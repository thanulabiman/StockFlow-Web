// import { useUser } from "@clerk/react";
// import { homeByRole } from "@/data/access";
// import { Navigate } from "react-router-dom";

// function Continue() {
//   // const { user } = useUser();
// const { isLoaded, isSignedIn, user } = useUser();

// console.log("Clerk loaded:", isLoaded);
// console.log("Signed in:", isSignedIn);
// console.log("User:", user);

//   const home = homeByRole[user?.publicMetadata?.role];

//   console.log(home)
//   console.log("Clerk user:", user);
//   console.log("Public metadata:", user?.publicMetadata);
//   console.log("Role:", user?.publicMetadata?.role);
//   console.log("Available routes:", homeByRole);

//   return <Navigate to={home} replace />;
//   // return <Navigate to={home || "/access-pending"} replace />;
// }

// export default Continue;

import { useUser } from "@clerk/react";
import { homeByRole } from "@/data/access";
import { Navigate } from "react-router-dom";

function Continue() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  const role = user.publicMetadata?.role;
  const home = homeByRole[role];

  if (!home) {
    return <Navigate to="/access-pending" replace />;
  }

  return <Navigate to={home} replace />;
}

export default Continue;