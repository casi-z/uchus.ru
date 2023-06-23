import {

    Box,
    styled,
    useTheme

} from "@mui/material"

import { sitePadding } from '../../Theme/GlobalStyle'

function useHeaderStyles() {

    const theme = useTheme()

    return {
        Header: styled(Box)({
            top: 0,
            left: 0,
            zIndex: 1,
            position: 'fixed',
            background: theme.palette.secondary.main,
            padding: sitePadding,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: 0,
            }
        })
    }
}
export default useHeaderStyles