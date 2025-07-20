import React, { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const handleSignOut = () => {};
  return (
    <>
      <div className="w-full bg-black text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <div className="max-w-[170px]">
            <img
              className="object-contain w-full"
              src="/netflix_logo.png"
              alt="Netflix Logo"
            />
          </div>

          {/* Right: User Info */}
          {user && (
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10"
                alt="User Icon"
                src={user.photoURL}
              />
              <button
                onClick={handleSignOut}
                className="bg-red-800 p-2 my-2 w-full"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
