import {
    Box,
    styled,
    useTheme
} from "@mui/material";

function useAppStyles() {
    const theme = useTheme()
    return {
        App: styled(Box)(`
            
        `)
    }
}
export default useAppStyles