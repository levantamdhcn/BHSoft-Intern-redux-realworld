import PropTypes from "prop-types"
import AppFooter from "../../views/footer"
import AppHeader from "../../components/Header"
import { StyledLayout } from "../../styled/Layout.styled"

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