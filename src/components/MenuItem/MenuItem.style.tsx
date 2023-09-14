import {
    Box,
    Button,
    styled,
    useTheme
} from "@mui/material"

function useMenuItemStyles() {

    const theme = useTheme()

    return {
        MenuItem: styled(Button)({
            fontFamily: `sans-serif`,
            textTransform: 'uppercase',
            boxSizing: 'border-box',
            borderRadius: '0',
            whitespace: 'nowrap',
            paddingTop: '3%',
            paddingBottom: '3%',
            color: theme.palette.text.primary,
            

        })
    }
}
export default useMenuItemStyles