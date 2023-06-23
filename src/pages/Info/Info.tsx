import useInfoStyles from './Info.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'

const { log } = console

interface InfoProps {
   
   children?: ReactChild,
   
}

const Info: FC<InfoProps> = ({ children }) => {
const S = useInfoStyles()

    return(
      <S.Info className="Info">
         
      </S.Info>
    )
}
export default Info