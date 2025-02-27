import { useContext } from "react"
import { AuthContext } from "../../store/context/AuthContext"
import Login from "./Login"

export default function AuthDialog() {
    const {authState,authDispatch} = useContext(AuthContext)
    return(
        <dialog open={authState.isActive} className="    m-auto h-[calc(screen-200px)] z-30">
            {/* <div className="inset-0 h-full"></div> */}
            <Login/>
        </dialog>
    )
}