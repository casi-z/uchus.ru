import usePageStyles from './Page.style'
import { ReactChild, ReactNode, FC } from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'

const { log } = console

interface PageProps {

    children: ReactChild | ReactNode,

}

const Page: FC<PageProps> = ({ children }) => {
    
    const S = usePageStyles()

    return (
        <S.Page className="Page">
            <Header/>
            <div id="wrapper">
                {children}
            </div>
            <Footer/>
        </S.Page>
    )
}
export default Page