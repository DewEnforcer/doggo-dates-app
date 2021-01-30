import {useContext} from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./context";
import authStorage from "./storage";

export default function useAuth () {
    const {user, setUser} = useContext(AuthContext);

    const logIn = data => {
        const user = jwtDecode(data);
        setUser(user);
        authStorage.storeToken(data);
    }

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    return {
        logIn,
        logOut,
        user,
        setUser
    }
}