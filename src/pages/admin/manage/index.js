import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/organisms/Layout';
import Container from '@/components/atoms/Container';
import UpdateCategoryModal from '@/components/organisms/UpdateCategoryModal';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTh } from 'react-icons/fa';
import { BiSearchAlt2, BiTrash } from 'react-icons/bi';
import Header from '@/components/atoms/Heading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Container as ChakraContainer,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Button,
  Stack,
  Input,
  Grid,
  Select,
} from '@chakra-ui/react';
import Link from 'next/link';
import { parseCookies } from '@/helpers/index';

export default function ManageSite({ supportCategory, siteSettings, token }) {
  const [categoryName, setCategoryName] = useState();
  const [categoryDescription, setCategoryDescription] = useState();
  const [categoryRank, setCategoryRank] = useState();
  const [loadingNewCategory, setLoadingNewCategory] = useState(false);

  const [quoteSettings, setQuoteSettings] = useState(siteSettings.quote);
  const [pickupSettings, setPickupSettings] = useState(siteSettings.pickup);
  const [userLoginSettings, setUserLoginSettings] = useState(
    siteSettings.user_login
  );
  const [userRegisterSettings, setUserRegisterSettings] = useState(
    siteSettings.user_register
  );
  const [riderApplySettings, setRiderApplySettings] = useState(
    siteSettings.rider_apply
  );
  const [riderLoginSettings, setRiderLoginSettings] = useState(
    siteSettings.rider_login
  );
  const [agentApplySettings, setAgentApplySettings] = useState(
    siteSettings.agent_apply
  );
  const [agentLoginSettings, setAgentLoginSettings] = useState(
    siteSettings.agent_login
  );
  const [staffLoginSettings, setStaffLoginSettings] = useState(
    siteSettings.staff_login
  );
  const [staffRegisterSettings, setStaffRegisterSettings] = useState(
    siteSettings.staff_register
  );
  const [deliveryFee, setDeliveryFee] = useState(siteSettings.delivery_fee);
  const [loadingSettings, setLoadingSettings] = useState(false);

  const router = useRouter();

  const handleSettingsUpdate = async () => {
    setLoadingSettings(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('quote', quoteSettings);
    formdata.append('pickup', pickupSettings);
    formdata.append('user_login', userLoginSettings);
    formdata.append('user_register', userRegisterSettings);
    formdata.append('rider_apply', riderApplySettings);
    formdata.append('rider_login', riderLoginSettings);
    formdata.append('agent_apply', agentApplySettings);
    formdata.append('agent_login', agentLoginSettings);
    formdata.append('staff_login', staffLoginSettings);
    formdata.append('staff_register', staffRegisterSettings);
    formdata.append('delivery_fee', deliveryFee);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/update_settings',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingSettings(false);
  };

  const handleNewCategoryUpload = async () => {
    setLoadingNewCategory(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('name', categoryName);
    formdata.append('description', categoryDescription);
    formdata.append('rank', categoryRank);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/create_support_category',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingNewCategory(false);
  };

  return (
    <Layout>
      <Container>
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
        <Header icon={<FaTh />} title="Manage Site" />

        <Flex alignItems="center" justifyContent="space-between" py="4">
          <Stack>
            <Flex alignItems="center" justifyContent="space-between">
              <Button
                _focus={{ color: 'red' }}
                color="red"
                fontWeight="bold"
                size="lg"
                variant="ghost"
              >
                <Link href="/admin/manage/">Site Setting</Link>
              </Button>
              <Button
                _focus={{ color: 'red' }}
                color="gray"
                fontWeight="bold"
                size="lg"
                variant="ghost"
              >
                <Link href="/admin/manage/upload">Upload Data</Link>
              </Button>
              <Button
                _focus={{ color: 'red' }}
                color="gray"
                fontWeight="bold"
                size="lg"
                variant="ghost"
              >
                <Link href="/admin/manage/sendEmail">Email Message</Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <hr />

        <ChakraContainer maxWidth="container.md" mb="20">
          <Text color="grey" fontSize="2xl" mb="5" mt="10">
            Site Settings
          </Text>
          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Quotes</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={quoteSettings === '1' ? true : false}
                  onChange={() =>
                    quoteSettings === '1'
                      ? setQuoteSettings('0')
                      : setQuoteSettings('1')
                  }
                  id="quoteSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="quoteSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Quotes */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>
          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Pickup</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={pickupSettings === '1' ? true : false}
                  onChange={() =>
                    pickupSettings === '1'
                      ? setPickupSettings('0')
                      : setPickupSettings('1')
                  }
                  id="pickupSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="pickupSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Pickup */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>
          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable User Login</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={userLoginSettings === '1' ? true : false}
                  onChange={() =>
                    userLoginSettings === '1'
                      ? setUserLoginSettings('0')
                      : setUserLoginSettings('1')
                  }
                  id="userLoginSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="userLoginSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* User Login */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>
          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable User Register</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={userRegisterSettings === '1' ? true : false}
                  onChange={() =>
                    userRegisterSettings === '1'
                      ? setUserRegisterSettings('0')
                      : setUserRegisterSettings('1')
                  }
                  id="userRegisterSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="userRegisterSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* User Register */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>

          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Rider Application</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={riderApplySettings === '1' ? true : false}
                  onChange={() =>
                    riderApplySettings === '1'
                      ? setRiderApplySettings('0')
                      : setRiderApplySettings('1')
                  }
                  id="riderApplySettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="riderApplySettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Rider Apply */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>

          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Rider Login</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={riderLoginSettings === '1' ? true : false}
                  onChange={() =>
                    riderLoginSettings === '1'
                      ? setRiderLoginSettings('0')
                      : setRiderLoginSettings('1')
                  }
                  id="riderLoginSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="riderLoginSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Rider Login */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>

          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Agent Application</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={agentApplySettings === '1' ? true : false}
                  onChange={() =>
                    agentApplySettings === '1'
                      ? setAgentApplySettings('0')
                      : setAgentApplySettings('1')
                  }
                  id="agentApplySettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="agentApplySettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Agent Apply */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>

          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Rider Login</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={agentLoginSettings === '1' ? true : false}
                  onChange={() =>
                    agentLoginSettings === '1'
                      ? setAgentLoginSettings('0')
                      : setAgentLoginSettings('1')
                  }
                  id="agentLoginSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="agentLoginSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Agent Login */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>

          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Staff Login</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={staffLoginSettings === '1' ? true : false}
                  onChange={() =>
                    staffLoginSettings === '1'
                      ? setStaffLoginSettings('0')
                      : setStaffLoginSettings('1')
                  }
                  id="staffLoginSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="staffLoginSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Staff Login */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>
          <Flex alignItems="center" justify="space-between" my="3">
            <Box>
              <Text>Enable / disable Staff Register</Text>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  isChecked={staffRegisterSettings === '1' ? true : false}
                  onChange={() =>
                    staffRegisterSettings === '1'
                      ? setStaffRegisterSettings('0')
                      : setStaffRegisterSettings('1')
                  }
                  id="staffRegisterSettings"
                  colorScheme="red"
                  mr="3"
                />
                <FormLabel
                  htmlFor="staffRegisterSettings"
                  mb="2"
                  fontWeight="normal"
                  color="red"
                >
                  {/* Staff Register */}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>
          <FormControl>
            <FormLabel>Delivery Fee</FormLabel>
            <Input
              type="text"
              bg="white"
              id="deliveryFee"
              name="deliveryFee"
              value={deliveryFee}
              onChange={(e) => setDeliveryFee(e.target.value)}
              placeholder="Enter Delivery Fee"
            />
          </FormControl>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="end"
            mt="4rem"
          >
            <Button
              onClick={handleSettingsUpdate}
              isLoading={loadingSettings}
              colorScheme="red"
            >
              Save
            </Button>
          </Box>
        </ChakraContainer>

        <Box>
          <Heading size="md" mt="4">
            Manage Support Categories
          </Heading>
          <Text color="gray" mb="5">
            Categories availbale for support
          </Text>
          <form>
            <Flex bg="white" p="5">
              <Grid gridTemplateColumns="repeat(3, 1fr)" gap="5" width="80%">
                <FormControl>
                  <FormLabel>Name of Category</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="categoryName"
                    name="categoryName"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter Category Name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Category Description</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="description"
                    name="description"
                    value={categoryDescription}
                    onChange={(e) => setCategoryDescription(e.target.value)}
                    placeholder="Enter Description"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Rank</FormLabel>
                  <Select
                    placeholder="Select Rank"
                    value={categoryRank}
                    onChange={(e) => setCategoryRank(e.target.value)}
                  >
                    <option value="1">Severe</option>
                    <option value="2">Medium</option>
                    <option value="3">Normal</option>
                  </Select>
                </FormControl>
              </Grid>
              <Button
                isLoading={loadingNewCategory}
                colorScheme="green"
                px="10"
                ml="8"
                mt="7"
                onClick={handleNewCategoryUpload}
              >
                Save
              </Button>
            </Flex>
          </form>
        </Box>

        <Box mb="4">
          <div className="resTable">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th data-label="Date" scope="col"></th>
                  <th data-label="Date" scope="col">
                    Name
                  </th>
                  <th data-label="Date" scope="col">
                    Description
                  </th>
                  <th data-label="Date" scope="col">
                    Rank
                  </th>
                  <th data-label="Items" scope="col">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {supportCategory.map((category) => (
                  <tr key={category.id}>
                    <td></td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>{category.rank}</td>
                    <td>
                      <UpdateCategoryModal token={token} data={category} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <hr />
      </Container>
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
    'https://alpha.ricnoslogistics.com/api/admin/support_categories',
    requestOptions
  );

  const responseSettings = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/site_setting',
    requestOptions
  );

  const result = await response.json();
  const resultSetting = await responseSettings.json();

  return {
    props: {
      supportCategory: result.data.support_categories,
      siteSettings: resultSetting.data.setting,
      token,
    },
  };
}
