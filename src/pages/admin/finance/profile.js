import Heading from '@/components/atoms/Heading'
import Container from '@/components/atoms/Container'
import Layout from '@/components/organisms/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import { Link } from '@material-ui/core'

export default function UserPage() {
  return (
    <Layout title='User Details'>
      <Container>
        <Heading>User Page</Heading>
        <ProfileContainer>
          <Profile>
            <div className='cardHead'>
              <Title>#RQ878989</Title>
              <div className='buttons'>
                <button className="btn">Active</button>
                <button>Pending</button>
              </div>
            </div>
            <div className='cardImage'>
              <div className="imgCard">
              <Image
                src='/user.png'
                className='userImage'
                width='200'
                height='200'
                alt='name'
              />
              </div>
              <div className='userDetails'>
                <ul>
                  <li>
                    <h5 className='title'>Name</h5>
                    <h5>Jogn Deo</h5>
                  </li>
                  <li>
                    <h5 className='title'>Email</h5>
                    <h5>Jogndeo@gmail.com</h5>
                  </li>
                  <li>
                    <h5 className='title'>Phone Number</h5>
                    <h5>+234 867 9898</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className='bankDetails'>
              <ul>
                <li>
                  <h5 className='title'>Account Name</h5>
                  <h5>John Snow</h5>
                </li>
                <li>
                  <h5 className='title'>Account Number</h5>
                  <h5>John Snow</h5>
                </li>
                <li>
                  <h5 className='title'>Bank Name</h5>
                  <h5>GTB</h5>
                </li>
              </ul>
            </div>

            <div className='requestedAmount'>
              <p>Account Requested</p>
              <h2>NGN150.000</h2>
            </div>

            <div className='actionsBtns'>
              <div>
                <button className='btn'>Approve request</button>
                <button>Cancel request</button>
              </div>
              <button>Approve Manually</button>
            </div>
          </Profile>
          <ProfileCard>
            <div className="cardHead">
              <Title>Profile</Title>
              <h3>Icon</h3>
            </div>
            <div className="userHead">
              <div className="head">
                <img src="/user.png" className="roundedImg" alt="UserImage" />
                <h5>Benard Benedict</h5>
              </div>
              <Link href="/"><a className="icon">Link</a></Link>
            </div>
            <div className="loation">
              <p className="icon">icon</p>
              <p>Region- Port Harcourt City</p>
            </div>
            <div className="contactInfo">
              <Title>Contact Info</Title>
              <ul className="listBody">
                <li>
                  <p className="icon">icon</p>
                  <h5>Benardbenedict@gmail.com</h5>
                </li>
                <li>
                  <p className="icon">icon</p>
                  <h5>+234 5889 9783</h5>
                </li>
              </ul>
            </div>

            <div className="userCard">
              <Title>Education</Title>

              <ul>
                <li>No 9 lacfog plaza, Kilometer 16, East west road. Choba.</li>
                <li>No 9 lacfog plaza, Kilometer 16, East west road. Choba.</li>
              </ul>
            </div>
            <div className="userCard">
              <Title>Residential Detail</Title>

              <ul>
                <li>No 9 lacfog plaza, Kilometer 16, East west road. Choba.</li>
                <li>No 9 lacfog plaza, Kilometer 16, East west road. Choba.</li>
              </ul>
            </div>

            <div className="logoCard">
              <img src="/ricnoslogo.png" className="logo" alt="Logo" />
              <div className="title">
                <h3>Ricnos Logistic</h3>
                <p>Premium</p>
              </div>
            </div>
          </ProfileCard>
        </ProfileContainer>
      </Container>
    </Layout>
  )
}

const ProfileContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin: 2rem 0;
`

const Profile = styled.div`
  width: 70%;
  height: 95vh;
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  padding: 20px;
  background: #fff;
  border-radius: 6px;

  .cardHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cardImage {
    display: flex;
    align-items: center;
    margin: 2rem 0;

    .userDetails {
      margin-left: 2rem;

      ul li {
        margin-top: 1rem;
        .title {
          font-weight: ${(props) => props.theme.fontWeight.bold};
          color: ${(props) => props.theme.colors.grey};
        }
      }
    }
    .imgCard {
      border: solid 3px red;
      object-fit: inherit;
      border-radius: ${props => props.theme.radius};
      height: 206px;
    }
  }

  .bankDetails {
    border-top: solid 1px #ccc;
  }

  .bankDetails ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    /* text-align: center; */

    .title {
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: ${(props) => props.theme.colors.grey};
    }
  }

  .requestedAmount {
    margin: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      margin-right: 2rem;
      color: ${(props) => props.theme.colors.secondary};
    }
    h2 {
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }
  }

  .actionsBtns {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      padding: 10px 20px;
      background: #333;
      color: #fff;
      border-radius: 6px;
    }
    .btn {
      margin-right: 1rem;
    }
  }

  button {
      padding: 8px 20px;
      background: #333;
      color: #fff;
      border-radius: 6px;
    }
    .btn {
      margin-right: 1rem;
    }
`

const ProfileCard = styled.div`
  width: 27%;
  padding: 20px;
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  background: #fff;
  border-radius: ${(props) => props.theme.radius};

  .cardHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .userHead {
    margin-top: 2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .head {
      display: flex;
      align-items: center;

      img {
        margin-right: 0.6rem;
      }
    }

    .icon {
        color: ${(props) => props.theme.colors.secondary};
      }
  }

  .loation {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    .icon {
      color: ${(props) => props.theme.colors.secondary};
      margin-right: 1rem;
    }
  }

  .contactInfo {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;

    .listBody {
      li {
        display: flex;
        align-items: center;
        margin-top: 1rem;

      p {
        margin-right: 1rem;
      }
    }
    }
  }

  .userCard {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;
    
    ul {
      margin-top: 1rem;

      li {
        margin-top: 1rem;
      }
    }
  }

  .logoCard {
    padding: 1rem 0;
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
      height: 50px;
      width: 60px;
      padding: 10px;
      border-radius: 6px;
      box-shadow: ${(props) => props.theme.shadows.shadow1};
    }

    p {
      color: ${(props) => props.theme.colors.grey};
    }
  }
`

const Title = styled.h3`
  font-weight: ${(props) => props.theme.fontWeight.bold};
`
