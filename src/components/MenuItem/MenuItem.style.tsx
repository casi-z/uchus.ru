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

            boxSizing: 'border-box',
            borderRadius: '0',
            whitespace: 'nowrap',
            paddingTop: '2%',
            paddingBottom: '2%',

        })
    }
}
export default useMenuItemStyles