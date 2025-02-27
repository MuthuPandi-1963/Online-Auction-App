import { useContext } from "react"
import { AuthContext } from "../../store/Context/AuthContext"
import Login from "./Login"
import Register from "./Register"

export default function AuthDialog() {
    const {authState,authDispatch} = useContext(AuthContext)
    return(
        <dialog open={authState.isActive} className="m-auto h-[calc(screen-200px)] z-50">
            {authState.name == "login" && <Login/>}
            {authState.name == "register" && <Register/>}
        </dialog>
    )
}