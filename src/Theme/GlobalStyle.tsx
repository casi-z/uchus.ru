import { GlobalStyles as MUIGlobalStyles, useTheme } from '@mui/material'
import Background from '../img/background.png'

export const sitePadding = '0 15vw'

const GlobalStyle = () => {

    const theme = useTheme()
    

    return (

        <MUIGlobalStyles styles={{
            '*': {
                boxSizing: 'border-box',
                

            },
            

            'html, body, #root': {
                background: `url(${Background})`,
                scrollBehavior: 'smooth',
                fontFamily: `'PT Sans Narrow'`,
                minWidth: '100%',
                minHeight: '100%',
                overflowX: 'hidden',

            },

            '#wrapper': {
                width: '100%',
                minHeight: '100vh',
                padding: sitePadding,
                '@media(min-width: 768px)': {
                    padding: 0
                },
            },

        }} />

    )
}

export default GlobalStyle