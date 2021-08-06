import { useState, useEffect } from 'react'
import { Main, Button, Flex, A, Box, Outer, BgImage, ShortenFlex, Input, IconCircle, Card, BoostOuter, FooterLogo, FooterHeading, FooterItem, Bar } from './components'
import logo from './images/logo.svg'
import logoWhite from './images/logo_white.svg'
import bg from './images/illustration-working.svg'
import brIcon from './images/icon-brand-recognition.svg'
import drIcon from './images/icon-detailed-records.svg'
import fcIcon from './images/icon-fully-customizable.svg'
import theme from './theme'
import axios from './axios.js'

function App() {

  const { colors } = theme;
  let originalUrl = "";

  const [dropdown, setdropdown] = useState(false)
  const [linksArr, setlinksArr] = useState([])
  const [emptyUrl, setemptyUrl] = useState(false)
  document.getElementsByTagName("body")[0].style.overflowX = "hidden";

  useEffect(() => {
    if (document.getElementById('shortenFlex')
      && document.getElementById('cardsContainer')
      && document.getElementById('bar')) {
      const shortenFlex = document.getElementById('shortenFlex')
      shortenFlex.style.top = `-${document.getElementById('shortenFlex').offsetHeight / 2}px`

      const bar = document.getElementById('bar')
      if (window.innerWidth < 480) {
        bar.style.height = `${document.getElementById('cardsContainer').offsetHeight}px`
        bar.style.marginTop = `-${document.getElementById('cardsContainer').offsetHeight}px`
      } else {
        bar.style.top = `-${document.getElementById('cardsContainer').offsetHeight / 2 + 15}px`
      }
    }

    if (document.getElementById('linksContainer')
      && document.getElementById('shortenFlex')) {
      const shortenFlexHeight = document.getElementById('shortenFlex').offsetHeight;
      const linksContainer = document.getElementById('linksContainer')
      linksContainer.style.top = `-${shortenFlexHeight / 2}px`
    }
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('links')) {
      setlinksArr([])
    } else {
      setlinksArr(JSON.parse(localStorage.getItem('links')))
    }
  }, [])

  const handleChange = e => {
    setemptyUrl(false)
    originalUrl = e.target.value;
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (originalUrl === "") {
      setemptyUrl(true)
      return;
    }

    axios.get(`/shorten?url=${originalUrl}`)
      .then(res => {
        const newObj = {
          origLink: res.data.result.original_link,
          shareLink: res.data.result.full_short_link,
        }

        let links = [...linksArr, newObj]
        setlinksArr([...linksArr, newObj])

        localStorage.setItem('links', JSON.stringify(links))
      })
      .catch(err => {
        console.log("Error while shortening URL: ", err)
      })
  }

  const handleCopy = (e, i, shareLink) => {
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        const currentButton = document.getElementById(`copyButton${i}`)
        currentButton.innerHTML = "Copied!";
        currentButton.classList.toggle("copied");
        currentButton.disabled = true

        setTimeout(() => {
          currentButton.innerHTML = "Copy";
          currentButton.classList.toggle("copied")
          currentButton.disabled = false
        }, 2000)
      })
  }

  return (
    <Main overflowX="hidden">
      <Outer>
        <Flex className="header">
          <Flex alignItems="center" className="logoPlusMenuIcon">
            <A href="/" mr="2rem" verticalAlign="bottom" position="relative" top="3px">
              <Flex>
                <img src={logo} alt="logo" />
              </Flex>
            </A>
            <Box className="menuIcon" onClick={() => dropdown ? setdropdown(false) : setdropdown(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={colors.GrayishViolet} className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </Box>
          </Flex>
          <Flex className={`navLinksOuter ${dropdown === true && "visible"}`} justifyContent="space-between" flex="1">
            <Flex className="navLinks" flex="1">
              <Flex>
                <A href="/#" mx="1rem">Features</A>
                <A href="/#" mx="1rem">Pricing</A>
                <A href="/#" mx="1rem" className="resLink">Resources</A>
              </Flex>
              <Flex alignItems="center">
                <A href="/#" mx="1rem" className="loginLink">Login</A>
                <A href="/#" className="signupLink"><Button className="small" ml="1rem">Signup</Button></A>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Box>
          <BgImage src={bg} alt="background" />

          <Box className="intro" mt="8rem" width="55%">
            <Box className="introHeading" fontSize="4rem" fontWeight="700" color={colors.VeryDarkBlue} lineHeight="1.15">
              More than just shorter links
            </Box>
            <Box className="introDesc" fontSize="1.25rem" color={colors.GrayishViolet}>
              Build your brand's recognition and get detailed insights on how your links are performing.
            </Box>
            <Button mt="2rem">Get Started</Button>
          </Box>
        </Box>
      </Outer>

      <Outer className="secOuter" mt="10.5rem" pt="0" pb="6rem" background="#eff1f7">
        <form id="shortenForm">
          <ShortenFlex id="shortenFlex" mt="0rem" width="100%">
            <Flex flex="1">
              <Input type="text" onChange={handleChange}
                className={`${emptyUrl === true && "emptyUrl"}`}
                placeholder="Shorten a link here..."
              />
              <Box className="emptyUrl">{emptyUrl === true && "Please add a link"}</Box>
            </Flex>
            <Button className={`shorten ${emptyUrl === true && "mTop"}`} type="submit" onClick={handleSubmit} ml="1.2rem" borderRadius="10px">Shorten it!</Button>
          </ShortenFlex>
        </form>

        <Box id="linksContainer" position="relative">
          {
            linksArr?.map((link, i) => (
              <Flex className="links" key={i}>
                <Box color={colors.VeryDarkBlue} flex={1}>{link.origLink.substr(0, 50)}{link.origLink.length > 50 && '...'}</Box>
                <Flex className="shareLinkPlusCopy" alignItems="center">
                  <Box color={colors.Cyan}>{link.shareLink}</Box>
                  <Button className="small copy" id={`copyButton${i}`} onClick={(e) => handleCopy(e, i, link.shareLink)}>Copy</Button>
                </Flex>
              </Flex>
            ))
          }
        </Box>

        <Flex flexDirection="column" alignItems="center">
          <Box className="advancedSt" width="50%">
            <Box mt="1.5rem" fontSize="2.1rem" fontWeight="700" lineHeight="4.5rem" color={colors.VeryDarkBlue} textAlign="center">Advanced Statistics</Box>
            <Box color={colors.GrayishViolet} textAlign="center">Track how your links are performing across the web with out advanced statistics dashboard.</Box>
          </Box>
        </Flex>

        <Flex mt="5.5rem" flexDirection="column">
          <Flex className="cardsContainer" id="cardsContainer">
            <Flex flexDirection="column" mr="1.6rem" mt="-2.5rem">
              <IconCircle>
                <img src={brIcon} alt="icon" />
              </IconCircle>
              <Card>
                <h3 style={{ color: `${colors.VeryDarkBlue}` }}>Brand Recognition</h3>
                <span>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</span>
              </Card>
            </Flex>

            <Flex flexDirection="column" mr="1.6rem">
              <IconCircle>
                <img src={drIcon} alt="icon" />
              </IconCircle>
              <Card>
                <h3 style={{ color: `${colors.VeryDarkBlue}` }}>Detailed Records</h3>
                <span>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</span>
              </Card>
            </Flex>

            <Flex flexDirection="column" mt="2.5rem">
              <IconCircle>
                <img src={fcIcon} alt="icon" />
              </IconCircle>
              <Card>
                <h3 style={{ color: `${colors.VeryDarkBlue}` }}>Fully Customizable</h3>
                <span>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</span>
              </Card>
            </Flex>
          </Flex>

          <Bar id="bar"></Bar>
        </Flex>

      </Outer>

      <BoostOuter py="3.2rem">
        <h1 style={{ marginTop: 0 }}>Boost your links today</h1>
        <A href="/#"><Button>Get Started</Button></A>
      </BoostOuter>

      <Outer className="footer" flexDirection="row" backgroundColor={colors.VeryDarkViolet} color="white" fontSize="0.9rem" py="4rem">
        <FooterLogo src={logoWhite} alt="logo" />

        <Flex flex='1'></Flex>

        <Flex flexDirection="column" width="10.5rem">
          <FooterHeading>Features</FooterHeading>
          <FooterItem href="/#">Link shortening</FooterItem>
          <FooterItem href="/#">Branded Links</FooterItem>
          <FooterItem href="/#">Analytics</FooterItem>
        </Flex>

        <Flex flexDirection="column" width="10.5rem">
          <FooterHeading>Resources</FooterHeading>
          <FooterItem href="/#">Blog</FooterItem>
          <FooterItem href="/#">Developers</FooterItem>
          <FooterItem href="/#">Support</FooterItem>
        </Flex>

        <Flex flexDirection="column" width="10rem">
          <FooterHeading>Company</FooterHeading>
          <FooterItem href="/#">About</FooterItem>
          <FooterItem href="/#">Our Team</FooterItem>
          <FooterItem href="/#">Careers</FooterItem>
          <FooterItem href="/#">Contact</FooterItem>
        </Flex>

        <Flex className="footerIcons" alignItems="flex-start">
          <A href="/#" mr="1.1rem" className="footerIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="#FFF" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </A>
          <A href="/#" mr="1.1rem" className="footerIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
            </svg>
          </A>
          <A href="/#" mr="1.1rem" className="footerIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="#FFF" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </A>
          <A href="/#" className="footerIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="#FFF" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </A>
        </Flex>

      </Outer>
    </Main >
  );
}

export default App;
