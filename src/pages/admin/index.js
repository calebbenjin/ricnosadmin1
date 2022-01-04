import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import FooterComp from '@/components/atoms/Footer'
import { LogoOne } from '@/components/atoms/Logo'
import { useForm } from 'react-hook-form'
import { BsEye } from 'react-icons/bs'
import Button from '@/components/atoms/Button'
import Link from 'next/link'
import {
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import FormInput from '@/components/atoms/FormInput'

export default function LoginPage() {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleClick = () => setShow(!show)

  const onSubmit = (data) => {
    console.log(data)
    setIsLoading(true)
    router.push('/admin/dashboard')
  }

  return (
    <Box>
      <div className='logo'>
        <LogoOne />
      </div>
      <div className='layoutContainer'>
        <div className='imgBg'></div>
        <div className='formContainer'>
          <div className='form'>
            <h3 className='loginTitle'>Admin Login Portal</h3>
            {isLoading ? (
              <div className='modal'>
                <p>Pls Wait the system is verifing your account</p>
              </div>
            ) : null}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.email}>
                <FormLabel fontWeight='normal'>Email</FormLabel>
                <Input
                  type='email'
                  id='email'
                  placeholder='Enter Email'
                  borderColor='grey'
                  {...register('email', { required: 'Email is required' })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password} my='5'>
                <FormLabel fontWeight='normal'>Password</FormLabel>
                <InputGroup>
                  <Input
                    borderColor='grey'
                    pr='2rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    {...register('password', {
                      required: 'Password is Required',
                    })}
                  />
                  <InputRightElement>
                    <BsEye onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </BsEye>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <hr />

              <p className='term'>Terms of service
              </p>
              <div className="btnContainer">
                <Button type='submit' loading={isLoading} title="LOADING">LOGIN</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterComp className='footer' />
    </Box>
  )
}


const Box = styled.div`
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
    background: ${(props) => props.theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .loginTitle {
      color: #fff;
      text-align: center;
    }

    .modal {
      color: #fff;
    }

    .form {
      width: 60%;

      button {
        text-align: center;
        margin-top: 1.5rem;
      }

      .termsLink {
        margin-top: 1rem;
        color: #eee;
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`
