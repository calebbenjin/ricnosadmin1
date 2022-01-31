import { useRouter } from 'next/router';
import SideNav from '@/components/molecules/SideNav';
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Heading,
  Switch,
  Button,
} from '@chakra-ui/react';
import Layout from '@/components/organisms/Layout';
import { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import styles from '@/styles/Settings.module.css';
import Header from '@/components/atoms/Heading';
// import Button from '@/components/atoms/Button';
import { FiLock, FiSettings } from 'react-icons/fi';
import { parseCookies } from '@/helpers/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import DeativateBtn from '@/components/DeativateBtn'

export default function SecurityPage({ token }) {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => setShow(!show);
  const confirmHandleClick = () => setConfirmShow(!confirmShow);

  const onSubmit = async (data) => {
    setLoading(true);
    if (data.newPassword !== data.confirmPassword) {
      toast.error('Your Passwords did not match');
      setLoading(false);
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('password', data.newPassword);
    formdata.append('password_confirmation', data.confirmPassword);
    formdata.append('current_password', data.currentPassword);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/change_password',
      requestOptions
    );

    const result = await request.json();

    if (result.success) {
      toast.success(result.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className={styles.flexContainer}>
        <SideNav />
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
        <Box className={styles.profileSetting}>
          <Container maxWidth="container.lg">
            <Header icon={<FiLock />} title="Security Settings" />

            <Text color="grey" fontWeight="bold" fontSize="md" mt="10">
              Change Password
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className={styles.form}>
                <FormControl isInvalid={errors.currentPassword} my="5">
                  <FormLabel fontWeight="normal">Current Password</FormLabel>
                  <InputGroup>
                    <Input
                      required
                      borderColor="grey"
                      pr="2rem"
                      id="currentPassword"
                      size="lg"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter Current password"
                      {...register('currentPassword', {
                        required: 'Current Password is Required',
                      })}
                    />
                    <InputRightElement pr="15px" pt="1">
                      <BsEye size="30px" color="grey" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.currentPassword && errors.currentPassword.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.newPassword} my="5">
                  <FormLabel fontWeight="normal">New Password</FormLabel>
                  <InputGroup>
                    <Input
                      required
                      borderColor="grey"
                      pr="2rem"
                      id="newPassword"
                      size="lg"
                      type={confirmShow ? 'text' : 'password'}
                      placeholder="New Password"
                      {...register('newPassword', {
                        required: 'New Password is Required',
                      })}
                    />

                    <InputRightElement pr="15px" pt="1">
                      <BsEye
                        size="30px"
                        color="grey"
                        onClick={confirmHandleClick}
                      >
                        {confirmShow ? 'Hide' : 'Show'}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.newPassword && errors.newPassword.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.confirmPassword} my="5">
                  <FormLabel fontWeight="normal">Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      required
                      borderColor="grey"
                      pr="2rem"
                      size="lg"
                      type={confirmShow ? 'text' : 'password'}
                      placeholder="Confirm password"
                      {...register('confirmPassword', {
                        required: 'Confirm Password is Required',
                      })}
                    />

                    <InputRightElement pr="15px" pt="1">
                      <BsEye
                        size="30px"
                        color="grey"
                        onClick={confirmHandleClick}
                      >
                        {confirmShow ? 'Hide' : 'Show'}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>

              <Box textAlign="right" my="10">
                <Button
                  type="submit"
                  // onClick={onSubmit}
                  colorScheme="red"
                  isLoading={loading}
                >
                  Save Changes
                </Button>
              </Box>

              <hr />

              <Container maxWidth="container.md" my="10">
                <Flex justify="space-between">
                  <Box maxWidth={['100%', '45%']}>
                    <Heading fontSize="sm" as="h4" colorScheme="grey">
                      TWO FACTOR AUTHENTICATION
                    </Heading>
                    <Text color="red">RECOMMENDED</Text>
                  </Box>
                  <Box maxWidth={['100%', '50%']}>
                    <FormControl display="flex" alignItems="center">
                      <Switch id="email-alerts" colorScheme="red" mr="3" />
                      <FormLabel
                        htmlFor="email-alerts"
                        mb="2"
                        fontWeight="normal"
                        color="red"
                      >
                        Try me.
                      </FormLabel>
                    </FormControl>
                    <Text>
                      To help keep your account secured we will using a new
                      device to login. We will send the code via Sms, Email, Or
                      Ricnos notification.
                    </Text>
                  </Box>
                </Flex>
              </Container>

              <hr />

              <Container maxWidth="container.lg" my="10">
                <Flex justify="space-between">
                  <Box maxWidth={['100%', '45%']}>

                    <Heading fontSize="md" as="h4" colorScheme="grey">
                      ACCOUNT DEACTIVATION
                    </Heading>
                  </Box>
                  <Box maxWidth={['100%', '50%']}>
                    <Heading fontSize="sm" as="h4" colorScheme="grey">
                      What happens when you deactivate your account?
                    </Heading>
                    <ul>
                      <li>You wont be able to re-active your account.</li>
                      <li>Active orders will be cancelled.</li>
                      <li>Your profile wont be shown on RICNO anymore.</li>
                    </ul>
                  </Box>
                </Flex>
                <Flex justify="space-between" mt="10">
                  <Box width={['100%', '40%']}>
                    <Heading fontSize="md" as="h4" colorScheme="grey">
                      I am leaving beacuse
                    </Heading>
                  </Box>
                  <Box width={['100%', '50%']}>
                    <FormControl>
                      <Input
                        type="text"
                        id="reason"
                        placeholder="State your reason"
                      />
                    </FormControl>
                    {/* <DeativateBtn>Deactivate Account</DeativateBtn> */}
                    <Box

                      display="flex"
                      alignItems="center"
                      justifyContent="end"
                      mt="4rem"
                    >
                      <Button disabled={loading}>
                        {loading ? 'Loading...' : 'Deactivate Account'}
                      </Button>
                    </Box>

                  </Box>
                </Flex>
              </Container>
            </form>
          </Container>
        </Box>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
    },
  };
}
