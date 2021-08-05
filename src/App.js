import { useEffect } from 'react'
import { Main, Button, Flex, A, Box, Outer, BgImage, ShortenFlex, Input, IconCircle, Card, BoostOuter, FooterLogo, FooterHeading, FooterItem, Img } from './components'
import logo from './images/logo.svg'
import logoWhite from './images/logo_white.svg'
import bg from './images/illustration-working.svg'
import brIcon from './images/icon-brand-recognition.svg'
import drIcon from './images/icon-detailed-records.svg'
import fcIcon from './images/icon-fully-customizable.svg'
import fbIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import pintIcon from './images/icon-pinterest.svg'
import instaIcon from './images/icon-instagram.svg'
import theme from './theme'

function App() {

  const { colors } = theme
  document.getElementsByTagName("body")[0].style.overflowX = "hidden";

  useEffect(() => {
    if (document.getElementById('shortenFlex')) {
      const shortenFlex = document.getElementById('shortenFlex')
      shortenFlex.style.top = `-${document.getElementById('shortenFlex').offsetHeight / 2}px`
    }
  }, [])

  return (
    <Main>
      <Outer>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <A href="/" mr="2rem" verticalAlign="bottom" position="relative" top="3px">
              <Flex>
                <img src={logo} alt="logo" />
              </Flex>
            </A>
            <A href="/#" mx="1rem">Features</A>
            <A href="/#" mx="1rem">Pricing</A>
            <A href="/#" mx="1rem">Resources</A>
          </Flex>
          <Box>
            <A href="/#" mx="1rem">Login</A>
            <A href="/#"><Button ml="1rem">Signup</Button></A>
          </Box>
        </Flex>

        <Box>
          <BgImage src={bg} alt="background" />

          <Box mt="8rem" width="55%">
            <Box fontSize="4rem" fontWeight="700" color={colors.VeryDarkBlue} lineHeight="1.15">
              More than just shorter links
            </Box>
            <Box fontSize="1.25rem" color={colors.GrayishViolet}>
              Build your brand's recognition and get detailed insights on how your links are performing.
            </Box>
            <Button mt="2rem">Get Started</Button>
          </Box>
        </Box>
      </Outer>

      <Outer mt="10.5rem" pt="0" background="#eff1f7">
        <form id="shortenForm">
          <ShortenFlex id="shortenFlex" mt="0rem" width="100%">
            <Input type="text" name="originalUrl" placeholder="Shorten a link here..." />
            <Button type="submit" ml="1.2rem" borderRadius="10px">Shorten it!</Button>
          </ShortenFlex>
        </form>

        <Flex flexDirection="column" alignItems="center">
          <Box width="50%" >
            <Box mt="1.5rem" fontSize="2.1rem" fontWeight="700" lineHeight="4.5rem" color={colors.VeryDarkBlue} textAlign="center">Advanced Statistics</Box>
            <Box color={colors.GrayishViolet} textAlign="center">Track how your links are performing across the web with out advanced statistics dashboard.</Box>
          </Box>
        </Flex>

        <Flex mt="4rem">
          <Flex flexDirection="column" mr="1.7rem">
            <IconCircle>
              <img src={brIcon} alt="brand recognition logo" />
            </IconCircle>
            <Card>
              <h3 style={{ color: `${colors.VeryDarkBlue}` }}>Brand Recognition</h3>
              <span>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</span>
            </Card>
          </Flex>

          <Flex flexDirection="column" mr="1.7rem">
            <IconCircle>
              <img src={drIcon} alt="brand recognition logo" />
            </IconCircle>
            <Card>
              <h3 style={{ color: `${colors.VeryDarkBlue}` }}>Detailed Records</h3>
              <span>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</span>
            </Card>
          </Flex>

          <Flex flexDirection="column">
            <IconCircle>
              <img src={fcIcon} alt="brand recognition logo" />
            </IconCircle>
            <Card>
              <h3 style={{ color: `${colors.VeryDarkBlue}` }}>Fully Customizable</h3>
              <span>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</span>
            </Card>
          </Flex>
        </Flex>

      </Outer>

      <BoostOuter py="3.2rem">
        <h1 style={{ marginTop: 0 }}>Boost your links today</h1>
        <A href="/#"><Button>Get Started</Button></A>
      </BoostOuter>

      <Outer flexDirection="row" backgroundColor={colors.VeryDarkViolet} color="white" fontSize="0.9rem" py="4rem">
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

        <Flex alignItems="flex-start">
          <A href="/#" mr="1.1rem"><Img src={fbIcon} /></A>
          <A href="/#" mr="1.1rem"><Img src={twitterIcon} /></A>
          <A href="/#" mr="1.1rem"><Img src={pintIcon} /></A>
          <A href="/#"><Img src={instaIcon} /></A>
        </Flex>

      </Outer>
    </Main >
  );
}

export default App;
