import React from 'react'
import { HeaderAppBar, HeaderLogo } from './Header.style'
import { Container, Toolbar } from '@material-ui/core'

const Header = () => {
  return (
    //sticky deixa o Header fixo
    <HeaderAppBar position={'sticky'}>
      <Toolbar component={Container}>
        <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
      </Toolbar>
    </HeaderAppBar>
  )
}

export default Header
