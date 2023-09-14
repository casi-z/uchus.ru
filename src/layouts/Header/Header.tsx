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



            <Menu />


            {/*{!mobileVersion && <S.HeaderTitle component={'h1'}>*/}
            {/*    Сайт учителя русского языка и литературы Таран Людмилы Сергеевны*/}
            {/*</S.HeaderTitle>}*/}

        </S.Header>
    )
}
export default Header