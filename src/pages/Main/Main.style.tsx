import {
    Box,
    styled,
    useTheme
} from "@mui/material"
function useMainStyles() {

    const theme = useTheme()
    
    return {
        Main: styled(Box)(`
           
        `)
    }
}
export default useMainStyles