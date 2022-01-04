
import styled from 'styled-components'
import FooterComp from '@/components/atoms/Footer'
import { LogoOne } from '@/components/atoms/Logo'
import Link from 'next/link'
import {
  Box,
  Heading,
  Button
} from '@chakra-ui/react'

export default function HomePage() {

  return (
    <BoxContainer>
      <div className='logo'>
        <LogoOne />
      </div>
      <div className='layoutContainer'>
        <div className='imgBg'></div>
        <Box bg="black" className='formContainer'>
          <Box>
            <Box>
              <Heading size="lg" mb="4" color="white">Login Admin Portal</Heading>
              <Link href="/admin" passHref>
                <Button colorScheme='red'  size="lg" px='6'>Login Portal</Button>
              </Link>
            </Box>
            <Box marginTop="8rem">
              <Heading size="lg" mb="4" color="white">Login Staff Portal</Heading>
              <Link href="/staff" passHref>
                <Button colorScheme='red' size="lg" px='6'>Login Portal</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
      <FooterComp className='footer' />
    </BoxContainer>
  )
}


const BoxContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  .layoutContainer {
    display: flex;
    justify-content: space-between;
  }

  .btnContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imgBg {
    height: 100vh;
    width: 50%;
  }

  .term {
    color: #eee;
    margin-top: 1rem;
  }

  .forgotLink {
    color: #eee;
  }

  .loginTitle {
    margin-bottom: 2rem;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  .logo {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  .formContainer {
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
