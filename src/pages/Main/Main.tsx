import useMainStyles from './Main.style'
import { ReactChild, FC } from 'react'
import Header from '../../layouts/Header/Header'
import Page from '../../components/Page/Page'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Photo from '../../img/pushkin.jpg'
import MainScreen from "../../layouts/MainScreen/MainScreen";
import Wrapper from "../../components/Wrapper/Wrapper";
import WhiteSection from "../../components/WhiteSection/WhiteSection";
const { log } = console

interface MainProps {

    children?: ReactChild,

}

const Main: FC<MainProps> = ({ children }) => {

    const S = useMainStyles()

    return (
        <Page>
            <MainScreen/>
            <Wrapper>
                <WhiteSection/>
            </Wrapper>
        </Page>
    )
}
export default Main