import Link from 'next/link'
import styled from 'styled-components'
import Container from './Container'

export default function FooterComp({className}) {
  return (
    <Footer className={className}>
      <div className="container">
        <p>&copy; 2021 Ricnoslogistics. All rights reserved</p>
        <div className='box'>
          <Link href='/'>
            <a>Terms & Conditions</a>
          </Link>
          <Link href='/'>
            <a>Privacy Policy</a>
          </Link>
          <Link href='/'>
            <a>Site Map</a>
          </Link>
          <Link href='/'>
            <a>Disclaimer</a>
          </Link>
        </div>
      </div>
    </Footer>
  )
}

const Footer = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  padding: 15px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    width: 90%;
    margin: 0 auto;
    a {
      margin-left: 20px;
    }
  }
`
