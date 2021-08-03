import styled from 'styled-components'
import theme from './theme'
import { color, flexbox, layout, position, space, typography, border, background } from 'styled-system'
import shortenDesktop from './images/bg-shorten-desktop.svg'

const { colors } = theme

export const Main = styled.main`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  ${layout}
`

export const Outer = styled.div`
  padding: 2.5rem 9rem;

  ${background}
  ${space}
`

export const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
`

export const Flex = styled(Box)`
  display: flex;
  ${flexbox}
`

export const A = styled.a`

  color: ${colors.GrayishViolet};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: black;
  }

  ${color}
  ${space}
  ${flexbox}
  ${position}
`

export const Button = styled.button`

  color: white;
  background-color: ${colors.DarkCyan};
  padding: 0.7rem 2rem;
  border: none;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  border-radius: 100px;

  &:hover {
    background-color: ${colors.Cyan};
  }

  ${space}
  ${border}
`

export const BgImage = styled.img`
  position: absolute;
  z-index: -1;
  top: 8rem;
  right: -7rem;
  transform: scale(0.9);
`

export const ShortenFlex = styled(Flex)`
  background-color: ${colors.DarkViolet};
  padding: 2.8rem 3rem;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

  @media screen and (min-width: 480px) {
    background-image: url(${shortenDesktop});
    background-position: -5rem 0;
  }

  ${space}
`

export const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
`