import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import FooterComp from '@/components/atoms/Footer';
import { LogoOne } from '@/components/atoms/Logo';
import { useForm } from 'react-hook-form';
import { BsEye } from 'react-icons/bs';
import Link from 'next/link';
import {
  Heading,
  Flex,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '@/context/AuthContext';

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const { login, isError, isLoading } = useContext(AuthContext);

  const notify = () => toast.error(isError);

  useEffect(() => {
    if (isError) {
      notify();
    }
  }, [isError, notify]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClick = () => setShow(!show);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const { email, password } = data;
    login({ email, password });
  };

  return (
    <Box>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="logo">
        <LogoOne />
      </div>
      <div className="layoutContainer">
        <div className="imgBg"></div>
        <div className="formContainer">
          <div className="form">
            <Heading mb="6" color="white">Portal</Heading>
            {isLoading ? (
              <div className="modal">
                <p>Pls Wait the system is verifing your account</p>
              </div>
            ) : null}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.email}>
                <FormLabel fontWeight="normal">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  borderColor="grey"
                  {...register('email', { required: 'Email is required' })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password} my="5">
                <FormLabel fontWeight="normal">Password</FormLabel>
                <InputGroup>
                  <Input
                    borderColor="grey"
                    pr="2rem"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
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

              <Flex justify='space-between' alignItems='center' mb="4">
                <p className="term">Terms of service</p>
                <Link href="/forgotPassword">
                <p
                  style={{ cursor: 'pointer', margin: '5px 0' }}
                  className="term"
                >
                  Forgot Password?
                </p>
              </Link>
              </Flex>
              <div className="btnContainer">
              <Button
                type="submit"
                isLoading={isLoading}
                loadingText='Submitting'
                colorScheme='red'
                size="lg"
                px="20"
              >
                LOG IN
              </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterComp className="footer" />
    </Box>
  );
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
`;
