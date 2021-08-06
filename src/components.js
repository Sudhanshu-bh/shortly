import styled from 'styled-components'
import theme from './theme'
import { color, flexbox, layout, position, space, typography, border, background } from 'styled-system'
import shortenDesktop from './images/bg-shorten-desktop.svg'
import desktopBoost from './images/bg-boost-desktop.svg'
import mobileBoost from './images/bg-boost-mobile.svg'

const { colors } = theme

export const Main = styled.main`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  ${layout}
`

export const Outer = styled.div`
  padding: 2.5rem 9rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 1.5rem 1rem;
    &.secOuter {
      margin-top: 9rem;
      padding-top: 0;
      padding-bottom: 5rem;
    }
    &.footer {
      flex-direction: column;
      padding: 3.5rem 0;
      &>div {
        align-items: center;
        width: 100%;
        margin-top: 1.8rem;
      }
      &>div:first-of-type {
        margin-top: 0.5rem;
      }
      .footerIcons {
        margin-top: 2.2rem;
        justify-content: center;
        a:not(:last-of-type) {
          margin-right: 1.2rem;
        }
      }
    }
  }

  ${background}
  ${space}
  ${flexbox}
  ${color}
  ${typography}
`

export const Box = styled.div`

  &.menuIcon {
    @media screen and (min-width: 480px) {
      display: none;
    }
    svg {
      vertical-align: middle;
    }
  }

  &.intro {
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-top: 1rem;
      text-align: center;
      .introHeading {
        font-size: 2.5rem;
      }
      .introDesc {
        font-size: 1.1rem;
        margin-top: 1rem;
      }
    }
  }

  &.emptyUrl {
    height: 0;
    position: relative;
    top: 0.4rem;
    font-size: 0.9rem;
    color: ${colors.Red};
    font-style: italic;
    font-weight: 500;
  }

  &.advancedSt {
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-top: -3rem;
      div:first-of-type {
        font-size: 1.7rem;
      }
    }
  }

  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${position}
  ${flexbox}
`

export const Flex = styled(Box)`
  display: flex;

  &.header {
    @media screen and (max-width: 480px) {
      flex-direction: column;
      flex: 1;

      .logoPlusMenuIcon {
        justify-content: space-between;
      }
    }
  }

  &.navLinksOuter {
    @media screen and (max-width: 480px) {
      display: flex;
      opacity: 0;
      max-height: 0;
      position: relative;
      z-index: -5;

      &.visible {
        z-index: 5;
        opacity: 1;
        transition: opacity 0.4s;
      }

      .navLinks {
        margin-top: 1rem;
        flex-direction: column;
        height: fit-content;
        background: ${colors.DarkViolet};
        border-radius: 10px;
        padding: 1rem;
        div {
          flex-direction: column;
          align-items: center;
          a {
            box-sizing: border-box;
            text-align: center;
            width: 100%;
            margin: 1rem;
            color: white;
            &.resLink {
              margin-bottom: 1.5rem;
            }
            &.loginLink {
              margin-top: 1.5rem;
            }
            &.signupLink {
              margin-top: 0.5rem;
            }
            button {
              margin-left: 0;
              padding-top: 1rem;
              padding-bottom: 1rem;
              width: 100%;
            }
          }
        }
        div:first-of-type {
          border-bottom: 1px solid ${colors.GrayishViolet};
        }
      }
    }
  }

  &.navLinks {
    @media screen and (min-width: 480px) {
      align-items: center;
      justify-content: space-between;
    }

    @media screen and (max-width: 379px) {
      /* display: none; */
      display: flex;
      flex-direction: column;

      &.open {
        display: flex;
      }
    }
  }

  &.links {
    align-items: center;
    background-color: white;
    font-size: 1.1rem;
    padding: 1rem 1.3rem;
    border-radius: 5px;
    margin-top: 1rem;
    @media screen and (max-width: 480px) {
      flex-direction: column;
      padding: 0;
      &>div:first-of-type {
        color: ${colors.DarkViolet};
        border-bottom: 2px solid #eff1f7;
        width: 100%;
        padding: 0.8rem;
        box-sizing: border-box;
      }
      .shareLinkPlusCopy {
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        align-items: flex-start;
        box-sizing: border-box;
        button {
          margin: 1rem 0 0 0;
          width: 100%;
          padding: 0.7rem 0;
        }
      }
    }
  }

  &.cardsContainer {
    @media screen and (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      text-align: center;
      &>div {
        margin: 0;
        &:not(:first-of-type) {
          margin-top: 3rem;
        }
      }
    }
  }

  ${flexbox}
`

export const A = styled.a`

  color: ${colors.GrayishViolet};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: black;
  }

  &.footerIcon:hover svg path {
    fill: ${colors.DarkCyan};
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
  cursor: pointer;

  &.small {
    font-size: 1rem;
    padding: 0.5rem 1.6rem;
  }

  &.shorten {
    @media screen and (max-width: 480px) {
      margin: 1rem 0 0 0;
      &.mTop {
        margin-top: 2.5rem;
      }
    }
  }

  &.copy {
    border-radius: 5px;
    margin-left: 1.5rem;
    padding-left: 0;
    padding-right: 0;
    width: 6rem;
    &.copied {
      background-color: ${colors.DarkViolet};
    }
  }

  &:disabled {
    cursor: default;
  }

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

  @media screen and (max-width: 480px) {
    position: relative;
    z-index: 0;
    height: 23rem;
    top: 0;
    left: -2rem;
  }
`

export const ShortenFlex = styled(Flex)`
  background-color: ${colors.DarkViolet};
  padding: 2.8rem 3rem;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  div:first-of-type {
    flex-direction: column;
  }
  @media screen and (min-width: 480px) {
    background-image: url(${shortenDesktop});
    background-position: -5rem 0;
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 1.5rem;
  }

  ${space}
`

export const Input = styled.input`
  flex: 1;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  border-style: solid;
  border-width: 3px;
  border-color: transparent;
  border-radius: 10px;
  outline: none;
  @media screen and (max-width: 480px) {
    padding: 0.8rem 1rem;
  }

  &:focus {
    border: 3px solid ${colors.Cyan};
  }

  &.emptyUrl {
    border: 3px solid ${colors.Red};

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: red;
      opacity: 0.5;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: red;
    }
  }
`

export const IconCircle = styled(Flex)`
  position: relative;
  z-index: 3;
  margin-bottom: -2.5rem;
  left: 1.5rem;
  height: 5rem;
  width: 5rem;
  background-color: ${colors.DarkViolet};
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  @media screen and (max-width: 480px) {
    left: calc(50% - 2.5rem);
  }
`

export const Card = styled(Box)`
  background-color: white;
  padding: 3.3rem 1.5rem 2rem 1.5rem;
  color: ${colors.GrayishViolet};
  border-radius: 5px;
  font-size: 0.9rem;
  line-height: 1.5rem;
  z-index: 2;

  & h3 {
    font-size: 1.1rem;
  }
`

export const Bar = styled.div`
  height: 8px;
  width: 100%;
  background-color: ${colors.Cyan};
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    z-index: 1;
    width: 8px;
    margin-left: calc(50vw - 4px - 1rem);
  }
`

export const BoostOuter = styled(Outer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${colors.DarkViolet};

  @media (min-width: 480px) {
    background-image: url(${desktopBoost});
    background-size: cover;
  }
  @media (max-width: 480px) {
    background-image: url(${mobileBoost});
    padding: 5.5rem 0 5.5rem 0;
    background-size: cover;

    h1 {
      font-size: 1.5rem;
    }
  }
`

export const FooterLogo = styled.img`
  display: flex;
  justify-content: flex-start;
  height: 2rem;
  object-fit: contain;
`

export const FooterHeading = styled.div`
  font-weight: 700;
  margin-bottom: 1.1rem;
`

export const FooterItem = styled.a`
  margin-bottom: 0.5rem;
  width: fit-content;
  color: ${colors.GrayishViolet};
  text-decoration: none;

  &:hover {
    color: ${colors.DarkCyan}
  }
`

export const Img = styled.img`
  ${space}
`