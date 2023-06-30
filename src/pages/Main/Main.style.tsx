import {
    Box, Grid,
    styled,
    useTheme
} from "@mui/material"
import {sitePadding} from "../../Theme/GlobalStyle";
function useMainStyles() {

    const theme = useTheme()
    
    return {
        MainScreen: styled(Box)({
            marginTop: '10%',
            width: '100%',
            background: theme.palette.secondary.main,
            padding: sitePadding,
            display: "flex",


        }),
        MainScreenItem: styled(Box)(`
            
        `),
    }
}
export default useMainStyles