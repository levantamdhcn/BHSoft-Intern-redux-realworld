import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import AppBanner from "../AuthLayout/Banner"
import AppFooter from "../../views/footer"
import AppHeader from "../../components/Header"
import { StyledLayout } from "../../styled/Layout.styled"

interface MainLayoutProps {
    children: typeof PropTypes.node,
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const isSignedIn = useSelector(
    (state: any) => state.authReducers.token
  );
    return (
        <StyledLayout>
            <AppHeader/>
            {
                isSignedIn === "" ? <AppBanner /> : ""
            }
            {children}
            <AppFooter />
        </StyledLayout>
    )
}

export default MainLayout