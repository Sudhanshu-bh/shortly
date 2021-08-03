import { useEffect } from 'react'
import { Main, Button, Flex, A, Box, Outer, BgImage, ShortenFlex, Input } from './components'
import logo from './images/logo.svg'
import bg from './images/illustration-working.svg'
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
            <A href="" mr="2rem" verticalAlign="bottom" position="relative" top="3px">
              <Flex>
                <img src={logo} alt="logo" />
              </Flex>
            </A>
            <A href="" mx="1rem">Features</A>
            <A href="" mx="1rem">Pricing</A>
            <A href="" mx="1rem">Resources</A>
          </Flex>
          <Box>
            <A href="" mx="1rem">Login</A>
            <Button ml="1rem">Signup</Button>
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
            <Box fontSize="2rem" fontWeight="700" lineHeight="4.5rem" color={colors.VeryDarkBlue} textAlign="center">Advanced Statistics</Box>
            <Box color={colors.GrayishViolet} textAlign="center">Track how your links are performing across the web with out advanced statistics dashboard.</Box>
          </Box>
        </Flex>

      </Outer>
    </Main>
  );
}

export default App;
