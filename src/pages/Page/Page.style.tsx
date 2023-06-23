import {
    Box,
    styled,
    useTheme
} from "@mui/material"
function usePageStyles() {
    const theme = useTheme()
    return {
        Page: styled(Box)(`
           
        `)
        
    }
}
export default usePageStyles