import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
const Authenticate = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out succesfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="text-center mt-4">
      {authUser ? (
        <>
          <p>Signed in as {authUser.email}</p>
          <button
            className="border-2 font-bold border-purple-400 text-purple-400 rounded-md px-3 py-1 bg-gradient-to-r  hover:from-pink-500 hover:to-purple-500 hover:shadow-xl duration-200 hover:text-white active:opacity-[.7]"
            onClick={userSignOut}
          >
            Log out
          </button>
        </>
      ) : (
        <p>Signed out </p>
      )}
    </div>
  );
};

export default Authenticate;
