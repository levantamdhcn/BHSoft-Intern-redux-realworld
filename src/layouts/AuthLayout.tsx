import PropTypes from "prop-types"
import AppFooter from "../components/Footer"
import AppHeader from "../components/Header"
import { StyledLayout } from "../components/styled/Layout.styled"

interface GuestLayoutProps {
    children: typeof PropTypes.node,
}

const AuthLayout = ({ children }: GuestLayoutProps) => {
    return (
        <StyledLayout>
            <AppHeader/>
            {children}
            <AppFooter />
        </StyledLayout>
    )
}
export default AuthLayout