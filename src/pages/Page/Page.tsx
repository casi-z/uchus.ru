import usePageStyles from './Page.style'
import { ReactChild, ReactNode, FC, useEffect } from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'

const { log } = console

interface PageProps {

    children: ReactChild | ReactNode,
    title?: string

}

const Page: FC<PageProps> = ({ children, title }) => {
    useEffect(() => {
        if (title) {
            document.title = title
        }
    }, [])
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