import useMainStyles from './Main.style'
import { ReactChild, FC } from 'react'
import Header from '../../layouts/Header/Header'
import Page from '../Page/Page'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Photo from '../../img/pushkin.jpg'
const { log } = console

interface MainProps {

    children?: ReactChild,

}

const Main: FC<MainProps> = ({ children }) => {

    const S = useMainStyles()

    return (
        <Page>
            <S.MainScreen component={'section'}>

                <S.MainScreen__Item>

                    <S.MainScreen__header>
                        Get More Done with whitepace
                    </S.MainScreen__header>

                    <br/>

                    <S.MainScreen__text>
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </S.MainScreen__text>

                    <br/>

                    <PrimaryButton>Try Whitepace free</PrimaryButton>

                </S.MainScreen__Item>

                <S.MainScreen__Item>
                    <img src={Photo} alt=""/>
                </S.MainScreen__Item>

            </S.MainScreen>
        </Page>
    )
}
export default Main