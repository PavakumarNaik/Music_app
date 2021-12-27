
import { login, db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const userService = {
    userAuthentication,
    getCurrentUser
  
};

async function userAuthentication (user) {
    const usersCollectionRef = collection(db, "usersCredentials");

    await login(user.email, user.password);
    await addDoc(usersCollectionRef, {
      password: user.password,
      email: user.email,
    });
    console.log("serviceuser@@@",user);
    return user;
}

async function getCurrentUser (){
    const auth = getAuth();
    let currentUserInfo
    await onAuthStateChanged(auth, (currentUser) => {
        currentUserInfo = currentUser;
  
    });
    console.log("servicecurrentUserInfo@@@",currentUserInfo);
    return  currentUserInfo;
}