import {
    Box,
    styled,
    useTheme
} from "@mui/material"
function useInfoStyles() {
    const theme = useTheme()
    return {
        Info: styled(Box)(`
           
        `)
    }
}
export default useInfoStyles