import { ReactChild, FC } from 'react'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'
import LoginIcon from '@mui/icons-material/Login';
import { useMediaQuery, useTheme } from '@mui/material';
import useHeaderStyles from './Header.style'
import { ReactComponent as Logo } from '../../svg/Logo.svg'
const { log } = console

interface HeaderProps {

    children?: ReactChild,

}

const Header: FC<HeaderProps> = ({ children }) => {

    const S = useHeaderStyles()
    const mobileVersion = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))
    const theme = useTheme()
    

    return (

        <S.Header component={'header'}>

            {!mobileVersion && <Logo />}

            <Menu />
            {!mobileVersion &&
                <MenuItem startIcon={<LoginIcon />} sx={{ margin: 0 }} href='#'>
                    Вход
                </MenuItem>
            }


        </S.Header>
    )
}
export default Header