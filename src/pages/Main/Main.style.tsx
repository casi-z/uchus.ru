import {
    Box, Grid,
    styled,
    useTheme
} from "@mui/material"
import {sitePadding} from "../../Theme/GlobalStyle";
import Background from '../../img/main-background.png'
function useMainStyles() {

    const theme = useTheme()
    
    return {
        MainScreen: styled(Box)({
            width: '100%',
            backgroundColor: theme.palette.secondary.main,
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            padding: sitePadding,
            display: "flex",
            paddingTop: '10%',
            paddingBottom: '10%',


        }),
        MainScreen__Item: styled(Box)({
            minWidth: '50%',
            display: 'flex',
            justifyContent: 'center',
            marginRight: '10%',
            flexDirection: 'column',
            'img':{
                objectFit: 'cover',
                width: '100%',
                height: '100%',

            }

        }),
        MainScreen__header: styled(Box)({
            "fontFamily": "Inter",
            "fontSize": "64px",
            "fontWeight": "700",
            "lineHeight": "77px",
            "letterSpacing": "-0.02em",
            "textAlign": "left"
        }),
        MainScreen__text: styled(Box)({

            "fontFamily": "Inter",
            "fontSize": "18px",
            "fontWeight": "400",
            "lineHeight": "30px",
            "letterSpacing": "-0.02em",
            "textAlign": "left",
        }),
    }
}
export default useMainStyles