import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import Header from "../../components/Header";
import HospitalMangementDashboardLeft from "../../views/Hospital-Management-System/Dashboard-Left-Panel";
import HospitalMangementDashboardRight from "../../views/Hospital-Management-System/Dashboard-Right-Panel";
import React from "react";

interface Props {
    children: any;
}
const HospitalMangementDash: React.FC<Props> = ({
    children
}) => {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header/>
                <HospitalMangementDashboardLeft />
                <HospitalMangementDashboardRight>{children && children}</HospitalMangementDashboardRight>
            </Box>
        </CssVarsProvider>
    )
}

export default HospitalMangementDash