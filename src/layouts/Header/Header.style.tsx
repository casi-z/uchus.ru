import {

    Box,
    styled,
    useTheme

} from "@mui/material"

import { sitePadding } from '../../theme/GlobalStyle'

function useHeaderStyles() {

    const theme = useTheme()

    return {
        Header: styled(Box)({
            position: 'sticky',
            top: 0,
            left: 0,
            zIndex: 3,

            background: theme.palette.secondary.main,
            padding: sitePadding,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: theme.palette.text.primary,
            textTransform: 'capitalize',
            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: 0,
            }
        }),
        HeaderTitle: styled(Box)({
            width: '100%',
            display: "flex",
            justifyContent: 'center',
            textTransform: 'none',
            fontFamily: 'inter',

        })
    }
}
export default useHeaderStyles