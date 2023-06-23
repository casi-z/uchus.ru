import useMainStyles from './Main.style'
import { ReactChild, FC } from 'react'
import Header from '../../layouts/Header/Header'
import Page from '../Page/Page'

const { log } = console

interface MainProps {

    children?: ReactChild,

}

const Main: FC<MainProps> = ({ children }) => {

    const S = useMainStyles()

    return (
        <Page>
            s
        </Page>
    )
}
export default Main