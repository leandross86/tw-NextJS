import React from 'react'
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style'
import { Typography, Box } from '@material-ui/core'

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, vero?
            Enim at fugit illo natus sint temporibus expedita quis ipsam quasi facilis.
            Magni quia facilis quas officiis quod, soluta quos?
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nosso aplicativos</FooterTitle>
          <AppList>
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <img src={'/img/logos/app-store.png'} alt={'App Store'} />
              </a>
            </li>
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  )
}

export default Footer
