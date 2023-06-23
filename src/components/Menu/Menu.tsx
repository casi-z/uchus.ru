import useMenuStyles from './Menu.style'
import { ReactChild, FC, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import MenuItem from '../MenuItem/MenuItem'
import MenuBurger from '../MenuBurger/MenuBurger';
const { log } = console

interface MenuProps {

    children?: ReactChild,

}
const menuItems = [
    {
        name: 'информация',
        href: 'https://ya.ru'
    },
    {
        name: 'новости',
        href: '#'
    },
    {
        name: 'прайс-лист',
        href: '#'
    },
    {
        name: 'магазин',
        href: '#'
    },
    {
        name: 'контакты',
        href: '#'
    },

]
const Menu: FC<MenuProps> = ({ children }) => {

    const S = useMenuStyles()

    const mobileVersion = useMediaQuery((theme: any) => theme.breakpoints.up('sm'))

    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false)

    return (
        <>
            <S.Menu component={'nav'} className="Menu">

                {mobileVersion
                    ? menuItems.map((menuItem, index) =>

                        <MenuItem key={index} href={menuItem.href} >
                            {menuItem.name}
                        </MenuItem>
                    )
                    : <MenuBurger menuItems={menuItems} />

                }

            </S.Menu>

        </>
    )
}
export default Menu