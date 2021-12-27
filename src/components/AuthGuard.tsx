import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

interface AuthGuardProps {
    children: typeof PropTypes.node,
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const isSignedIn = useSelector((state: any) => state.authReducers.token)
    if(isSignedIn === "") {
        return <Redirect to="/signin"/>
    }
    return <>{children}</>
}

export default AuthGuard