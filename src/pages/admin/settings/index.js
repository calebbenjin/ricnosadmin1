import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import SideNav from '@/components/molecules/SideNav';
import Heading from '@/components/atoms/Heading';
import Layout from '@/components/organisms/Layout';
import { FaUserCog } from 'react-icons/fa';
import { API_URL } from '@/lib/index';
import {
  Button,
  Select,
  Box,
  Flex,
  Text,
  Avatar,
  AvatarBadge,
  FormControl,
} from '@chakra-ui/react';
import styles from '@/styles/Settings.module.css';
import { BsPencil, BsUser } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseCookies } from '@/helpers/index';

export default function SettingsPage({ token, branches, user }) {

  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [branch, setBranch] = useState(user.branch_id);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('phone', phone);
    formdata.append('email', email);
    formdata.append('first_name', firstName);
    formdata.append('last_name', lastName);
    if (user.role === '2') {
      formdata.append('branch_id', branch);
    }

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const res = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/update_profile`,
      requestOptions
    );
    const data = await res.json();

    if (data.success) {
      toast.success(data.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(data.message);
    }

    setLoading(false);
  };

  const handlePassportUpload = async (e) => {
    setSelectedFile(e.target.files[0]);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('passport', e.target.files[0], '[PROXY]');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const result = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/update_profile_image`,
      requestOptions
    );

    const data = await result.json();

    if (data.success) {
      toast.success(data.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(data.message);
    }

    setLoading(false);
  };

  return (
    <Layout data={user}>
      <div className={styles.flexContainer}>
        <SideNav />
        <div className={styles.profileSetting}>
          <Heading icon={<FaUserCog />} title="Settings Page" />

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
          <div>
            <div className={styles.form} p="6">
              <Box textAlign="center" className={styles.avatarBox}>
                <Avatar
                  size="2xl"
                  mt="10"
                  className={styles.avatar}
                  name={user.name}
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : user?.passport
                  }
                >
                  <AvatarBadge
                    className={styles.avatarBadge}
                    boxSize="0.8em"
                    borderRadius="md"
                    bg="red.500"
                    onClick={() => setShowModal(true)}
                  >
                    {' '}
                    <input
                      accept="image/*"
                      onChange={handlePassportUpload}
                      type="file"
                      style={{ opacity: '0', position: 'absolute' }}
                    />
                    <BsPencil color="white" fontSize="1.5rem" />
                  </AvatarBadge>
                </Avatar>
              </Box>

              <form onSubmit={handleSubmit}>
                <Box className={styles.form}>
                  <Text textAlign="left" mb="4" mt="7" fontWeight="bold">
                    Personal Data
                  </Text>
                  <Flex wrap="wrap" justify="space-between">
                    <Box mb="4" width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type="text"
                          id="firstName"
                          placeholder="First Name"
                          name="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          // required
                        />
                      </FormControl>
                    </Box>
                    <Box mb="4" width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type="text"
                          id="lastName"
                          placeholder="Last Name"
                          name="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          // required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Flex wrap="wrap" justify="space-between">
                    <Box mb="4" width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          // required
                        />
                      </FormControl>
                    </Box>
                    <Box mb="4" width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type="text"
                          id="phone"
                          placeholder="Phone Number"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          // required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  {user.role === '2' && (
                    <Flex wrap="wrap" justify="space-between">
                      <Box mb="4" width={['100%', '47%']}>
                        <FormControl>
                          <Select
                            placeholder="Branch"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                          >
                            {branches.map((branch) => (
                              <option key={branch.id} value={branch.id}>
                                {branch.name}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Flex>
                  )}

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    my="2rem"
                  >
                    <Button
                      onClick={handleSubmit}
                      colorScheme="red"
                      isLoading={loading}
                    >
                      Update
                    </Button>
                  </Box>
                </Box>
              </form>
            </div>
          </div>
        </div>
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

  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/branches',
    requestOptions
  );

  const result = await response.json();

  const res = await fetch(`${API_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const userData = await res.json()

  return {
    props: {
      branches: result.data.branches,
      token,
      user: userData.data.user
    },
  };
}
