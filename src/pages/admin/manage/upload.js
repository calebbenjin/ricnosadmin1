import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/organisms/Layout';
import Container from '@/components/atoms/Container';
import UpdateBranchModal from '@/components/organisms/UpdateBranchModal';
import UpdateRouteMModal from '@/components/organisms/UpdateRouteModal';
import UpdateItemValueModal from '@/components/organisms/UpdateItemValueModal';
import UpdateVehicleModal from '@/components/organisms/UpdateVehicleModal';
import UpdateItemWeightModal from '@/components/organisms/UpdateItemWeightModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AiOutlinePlus } from 'react-icons/ai';
import { API_URL } from '@/lib/index';
// import { FaTh } from 'react-icons/fa';
// import { BiSearchAlt2, BiPencil } from 'react-icons/bi';
// import { BsArrowLeftRight } from 'react-icons/bs';
// import Header from '@/components/atoms/Heading';
import {
  Heading,
  Box,
  Flex,
  Button,
  Text,
  Stack,
  Input,
  FormControl,
  Grid,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import Link from 'next/link';
import { parseCookies } from '@/helpers/index';

export default function ManageSite({
  routes,
  branches,
  itemValues,
  vehicles,
  itemWeights,
  token,
  user
}) {
  const [branchName, setBranchName] = useState();
  const [branchAddress, setBranchAddress] = useState();
  const [branchLga, setBranchLga] = useState();
  const [branchState, setBranchState] = useState();
  const [branchRank, setBranchRank] = useState();
  const [branchCountry, setBranchCountry] = useState();
  const [loadingNewBranch, setLoadingNewBranch] = useState(false);

  const [regionFrom, setRegionFrom] = useState();
  const [regionTo, setRegionTo] = useState();
  const [means, setMeans] = useState();
  const [regionAmount, setRegionAmount] = useState();
  const [loadingNewRegion, setLoadingNewRegion] = useState(false);

  const [itemValueMinimum, setItemValueMinimum] = useState();
  const [itemValueMaximum, setItemValueMaximum] = useState();
  const [itemValueAmount, setItemValueAmount] = useState();
  const [loadingNewItemValue, setLoadingNewItemValue] = useState(false);

  const [vehicleType, setVehicleType] = useState();
  const [vehicleAmount, setVehicleAmount] = useState();
  const [loadingNewVehicle, setLoadingNewVehicle] = useState(false);

  const [itemWeightMinimum, setItemWeightMinimum] = useState();
  const [itemWeightMaximum, setItemWeightMaximum] = useState();
  const [itemWeightAmount, setItemWeightAmount] = useState();
  const [loadingNewItemWeight, setLoadingNewItemWeight] = useState(false);

  const [loadingToggleBranch, setLoadingToggleBranch] = useState(false);
  const [loadingToggleRoute, setLoadingToggleRoute] = useState(false);
  const [loadingToggleItemValue, setLoadingToggleItemValue] = useState(false);
  const [loadingToggleVehicle, setLoadingToggleVehicle] = useState(false);
  const [loadingToggleItemWeight, setLoadingToggleItemWeight] = useState(false);

  const router = useRouter();

  const handleNewBranchUpload = async () => {
    setLoadingNewBranch(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('name', branchName);
    formdata.append('state', branchState);
    formdata.append('lga', branchLga);
    formdata.append('address', branchAddress);
    formdata.append('country', branchCountry);
    formdata.append('rank', branchRank);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/create_branch',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingNewBranch(false);
  };

  const handleNewRegionUpload = async () => {
    setLoadingNewRegion(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('from', regionFrom);
    formdata.append('to', regionTo);
    formdata.append('amount', regionAmount);
    formdata.append('means', means);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/create_shipment_route',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingNewRegion(false);
  };

  const handleNewItemValueUpload = async () => {
    setLoadingNewItemValue(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('minimum', itemValueMinimum);
    formdata.append('maximum', itemValueMaximum);
    formdata.append('amount', itemValueAmount);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/create_item_value',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingNewItemValue(false);
  };

  const handleNewVehicleUpload = async () => {
    setLoadingNewVehicle(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('type', vehicleType);
    formdata.append('amount', vehicleAmount);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/create_vehicle',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingNewVehicle(false);
  };

  const handleNewItemWeightUpload = async () => {
    setLoadingNewItemWeight(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('minimum', itemWeightMinimum);
    formdata.append('maximum', itemWeightMaximum);
    formdata.append('amount', itemWeightAmount);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/create_weight',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingNewItemWeight(false);
  };

  const handleBranchStatusToggle = async (id) => {
    setLoadingToggleBranch(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/toggleActivateBranch/${id}`,
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingToggleBranch(false);
  };

  const handleRouteStatusToggle = async (id) => {
    setLoadingToggleRoute(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/toggleActivateShipmentRoute/${id}`,
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingToggleRoute(false);
  };

  const handleItemValueStatusToggle = async (id) => {
    setLoadingToggleItemValue(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/toggleActivateItemValue/${id}`,
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingToggleItemValue(false);
  };

  const handleVehicleStatusToggle = async (id) => {
    setLoadingToggleVehicle(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/toggleActivateVehicle/${id}`,
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingToggleVehicle(false);
  };

  const handleItemWeightStatusToggle = async (id) => {
    setLoadingToggleItemWeight(true);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/toggleActivateItemWeight/${id}`,
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoadingToggleItemWeight(false);
  };

  return (
    <Layout data={user}>
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
        <Heading size="lg" color="gray" my="5">
          Manage Site
        </Heading>
        <hr />
        <Flex alignItems="center" justifyContent="space-between" py="4">
          <Stack>
            <Flex alignItems="center" justifyContent="space-between">
              <Button
                _focus={{ color: 'red' }}
                color="gray"
                fontWeight="bold"
                size="lg"
                variant="ghost"
              >
                <Link href="/admin/manage/">Assign User</Link>
              </Button>
              <Button
                _focus={{ color: 'red' }}
                color="red"
                fontWeight="bold"
                size="lg"
                variant="ghost"
              >
                <Link href="/admin/manage/upload">Upload Data</Link>
              </Button>
              {/* <Button
                _focus={{ color: 'red' }}
                color="gray"
                fontWeight="bold"
                size="lg"
                variant="ghost"
              >
                <Link href="/admin/manage/sendEmail">Email Message</Link>
              </Button> */}
            </Flex>
          </Stack>
        </Flex>
        <hr />

        <Box>
          <Heading size="md" mt="4">
            Set Location
          </Heading>
          <Text color="gray" mb="5">
            Locations where our services are covered
          </Text>
          <form>
            <Flex bg="white" p="5">
              <Grid gridTemplateColumns="repeat(3, 1fr)" gap="5" width="80%">
                <FormControl>
                  <FormLabel>Name of branch</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="branch"
                    name="branch"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    placeholder="Enter Branch"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="address"
                    name="address"
                    value={branchAddress}
                    onChange={(e) => setBranchAddress(e.target.value)}
                    placeholder="Enter Address"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>LGA</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="lga"
                    name="lga"
                    value={branchLga}
                    onChange={(e) => setBranchLga(e.target.value)}
                    placeholder="Enter LGA"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>State</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="state"
                    name="state"
                    value={branchState}
                    onChange={(e) => setBranchState(e.target.value)}
                    placeholder="Enter State"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Rank</FormLabel>
                  <Select
                    value={branchRank}
                    onChange={(e) => setBranchRank(e.target.value)}
                  >
                    <option value="1">Head Office</option>
                    <option value="2">Branches</option>
                    <option value="3">Mobile/Affiliate Offices</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="country"
                    name="country"
                    value={branchCountry}
                    onChange={(e) => setBranchCountry(e.target.value)}
                    placeholder="Enter Country"
                  />
                </FormControl>
              </Grid>
              <Button
                isLoading={loadingNewBranch}
                colorScheme="green"
                px="10"
                ml="8"
                mt="7"
                onClick={handleNewBranchUpload}
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
                    Branch
                  </th>
                  <th data-label="Date" scope="col">
                    Address
                  </th>
                  <th data-label="Date" scope="col">
                    LGA
                  </th>
                  <th data-label="Date" scope="col">
                    State
                  </th>
                  <th data-label="Track No" scope="col">
                    Country
                  </th>
                  <th data-label="Name" scope="col">
                    Rank
                  </th>
                  {/* <th data-label="Price" scope="col">
                    Status
                  </th> */}
                  <th data-label="Items" scope="col">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch) => (
                  <tr key={branch.id}>
                    <td></td>
                    <td>{branch.name}</td>
                    <td>{branch.address}</td>
                    <td>{branch.lga}</td>
                    <td>{branch.state}</td>
                    <td>{branch.country}</td>
                    <td>{branch.rank}</td>
                    {/* <td>
                      {branch.status === 'active' ? (
                        <Button
                          isLoading={loadingToggleBranch}
                          onClick={() => handleBranchStatusToggle(branch.id)}
                          colorScheme="red"
                          size="sm"
                          mr="-px"
                        >
                          Disable
                        </Button>
                      ) : (
                        <Button
                          isLoading={loadingToggleBranch}
                          onClick={() => handleBranchStatusToggle(branch.id)}
                          colorScheme="green"
                          size="sm"
                          mr="2"
                        >
                          Enable
                        </Button>
                      )}
                    </td> */}
                    <td>
                      <UpdateBranchModal token={token} data={branch} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <hr />

        <Box>
          <Heading size="md" mt="8">
            Set Region
          </Heading>
          <Text color="gray" mb="5">
            Regions where our services are covered
          </Text>
          <form>
            <Flex bg="white" p="5">
              <Grid gridTemplateColumns="repeat(4, 1fr)" gap="5" width="80%">
                <FormControl>
                  <FormLabel>From</FormLabel>
                  <Select
                    value={regionFrom}
                    onChange={(e) => setRegionFrom(e.target.value)}
                  >
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>To</FormLabel>
                  <Select
                    value={regionTo}
                    onChange={(e) => setRegionTo(e.target.value)}
                  >
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Delivery Method</FormLabel>
                  <Select
                    value={means}
                    onChange={(e) => setMeans(e.target.value)}
                  >
                    <option value="air">Air</option>
                    <option value="road">Road</option>
                    <option value="sea">Sea</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Amount</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="amount"
                    name="amount"
                    value={regionAmount}
                    onChange={(e) => setRegionAmount(e.target.value)}
                    placeholder="Enter Amount"
                  />
                </FormControl>
              </Grid>
              <Button
                isLoading={loadingNewRegion}
                onClick={handleNewRegionUpload}
                colorScheme="green"
                px="10"
                ml="8"
                mt="7"
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
                    From
                  </th>
                  <th data-label="Date" scope="col">
                    To
                  </th>
                  <th data-label="Date" scope="col">
                    Delivery Method
                  </th>
                  <th data-label="Date" scope="col">
                    Amount
                  </th>
                  <th data-label="Price" scope="col">
                    Status
                  </th>
                  <th data-label="Items" scope="col">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => (
                  <tr key={route.id}>
                    <td></td>
                    <td>{route.from.name}</td>
                    <td>{route.to.name}</td>
                    <td>{route.means}</td>
                    <td>NGN{route.amount}</td>
                    <td>
                      {route.status === 'active' ? (
                        <Button
                          isLoading={loadingToggleRoute}
                          onClick={() => handleRouteStatusToggle(route.id)}
                          colorScheme="red"
                          size="sm"
                          mr="-px"
                        >
                          Disable
                        </Button>
                      ) : (
                        <Button
                          isLoading={loadingToggleRoute}
                          onClick={() => handleRouteStatusToggle(route.id)}
                          colorScheme="green"
                          size="sm"
                          mr="2"
                        >
                          Enable
                        </Button>
                      )}
                    </td>
                    <td>
                      <UpdateRouteMModal
                        data={route}
                        branches={branches}
                        token={token}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <hr />

        <Box>
          <Heading size="md" mt="4">
            Set Item Values Pricing
          </Heading>
          <Text color="gray" mb="5">
            Price for the value of items
          </Text>
          <form>
            <Flex bg="white" p="5">
              <Grid gridTemplateColumns="repeat(3, 1fr)" gap="5" width="80%">
                <FormControl>
                  <FormLabel>Minimum Amount</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="from"
                    name="from"
                    value={itemValueMinimum}
                    onChange={(e) => setItemValueMinimum(e.target.value)}
                    placeholder="Enter Minimum Amount"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Maximum Amount</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="to"
                    name="to"
                    value={itemValueMaximum}
                    onChange={(e) => setItemValueMaximum(e.target.value)}
                    placeholder="Enter Maximum Amount"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="amount"
                    name="amount"
                    value={itemValueAmount}
                    onChange={(e) => setItemValueAmount(e.target.value)}
                    placeholder="Enter Price"
                  />
                </FormControl>
              </Grid>
              <Button
                isLoading={loadingNewItemValue}
                colorScheme="green"
                px="10"
                ml="8"
                mt="7"
                onClick={handleNewItemValueUpload}
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
                    Minimum
                  </th>
                  <th data-label="Date" scope="col">
                    Maximum
                  </th>
                  <th data-label="Date" scope="col">
                    Amount
                  </th>
                  <th data-label="Price" scope="col">
                    Status
                  </th>
                  <th data-label="Items" scope="col">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {itemValues.map((value) => (
                  <tr key={value.id}>
                    <td></td>
                    <td>{value.from}</td>
                    <td>{value.to}</td>
                    <td>{value.amount}</td>
                    <td>
                      {value.status === 'active' ? (
                        <Button
                          isLoading={loadingToggleItemValue}
                          onClick={() => handleItemValueStatusToggle(value.id)}
                          colorScheme="red"
                          size="sm"
                          mr="-px"
                        >
                          Disable
                        </Button>
                      ) : (
                        <Button
                          isLoading={loadingToggleItemValue}
                          onClick={() => handleItemValueStatusToggle(value.id)}
                          colorScheme="green"
                          size="sm"
                          mr="2"
                        >
                          Enable
                        </Button>
                      )}
                    </td>
                    <td>
                      <UpdateItemValueModal token={token} data={value} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <hr />

        <Box>
          <Heading size="md" mt="4">
            Manage Vehicles
          </Heading>
          <Text color="gray" mb="5">
            Vehicles used for delivery
          </Text>
          <form>
            <Flex bg="white" p="5">
              <Grid gridTemplateColumns="repeat(3, 1fr)" gap="5" width="80%">
                <FormControl>
                  <FormLabel>Vehicle Type</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="type"
                    name="type"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    placeholder="Enter Vehicle type"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Vehicle Amount</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="amount"
                    name="amount"
                    value={vehicleAmount}
                    onChange={(e) => setVehicleAmount(e.target.value)}
                    placeholder="Enter Vehicle Amount"
                  />
                </FormControl>
              </Grid>
              <Button
                isLoading={loadingNewVehicle}
                colorScheme="green"
                px="10"
                ml="8"
                mt="7"
                onClick={handleNewVehicleUpload}
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
                    Vehicle Type
                  </th>
                  <th data-label="Date" scope="col">
                    Amount
                  </th>
                  <th data-label="Price" scope="col">
                    Status
                  </th>
                  <th data-label="Items" scope="col">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td></td>
                    <td>{vehicle.type}</td>
                    <td>{vehicle.amount}</td>
                    <td>
                      {vehicle.status === 'active' ? (
                        <Button
                          isLoading={loadingToggleVehicle}
                          onClick={() => handleVehicleStatusToggle(vehicle.id)}
                          colorScheme="red"
                          size="sm"
                          mr="-px"
                        >
                          Disable
                        </Button>
                      ) : (
                        <Button
                          isLoading={loadingToggleVehicle}
                          onClick={() => handleVehicleStatusToggle(vehicle.id)}
                          colorScheme="green"
                          size="sm"
                          mr="2"
                        >
                          Enable
                        </Button>
                      )}
                    </td>
                    <td>
                      <UpdateVehicleModal token={token} data={vehicle} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <hr />

        <Box>
          <Heading size="md" mt="4">
            Set Item Weight Pricing
          </Heading>
          <Text color="gray" mb="5">
            Price for the weight of items
          </Text>
          <form>
            <Flex bg="white" p="5">
              <Grid gridTemplateColumns="repeat(3, 1fr)" gap="5" width="80%">
                <FormControl>
                  <FormLabel>Minimum Weight</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="from"
                    name="from"
                    value={itemWeightMinimum}
                    onChange={(e) => setItemWeightMinimum(e.target.value)}
                    placeholder="Enter Minimum Weight"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Maximum Weight</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="to"
                    name="to"
                    value={itemWeightMaximum}
                    onChange={(e) => setItemWeightMaximum(e.target.value)}
                    placeholder="Enter Maximum Weight"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="text"
                    bg="white"
                    id="amount"
                    name="amount"
                    value={itemWeightAmount}
                    onChange={(e) => setItemWeightAmount(e.target.value)}
                    placeholder="Enter Price"
                  />
                </FormControl>
              </Grid>
              <Button
                isLoading={loadingNewItemWeight}
                colorScheme="green"
                px="10"
                ml="8"
                mt="7"
                onClick={handleNewItemWeightUpload}
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
                    Minimum
                  </th>
                  <th data-label="Date" scope="col">
                    Maximum
                  </th>
                  <th data-label="Date" scope="col">
                    Amount
                  </th>
                  <th data-label="Price" scope="col">
                    Status
                  </th>
                  <th data-label="Items" scope="col">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {itemWeights.map((weight) => (
                  <tr key={weight.id}>
                    <td></td>
                    <td>{weight.from}</td>
                    <td>{weight.to}</td>
                    <td>{weight.amount}</td>
                    <td>
                      {weight.status === 'active' ? (
                        <Button
                          isLoading={loadingToggleItemWeight}
                          onClick={() =>
                            handleItemWeightStatusToggle(weight.id)
                          }
                          colorScheme="red"
                          size="sm"
                          mr="-px"
                        >
                          Disable
                        </Button>
                      ) : (
                        <Button
                          isLoading={loadingToggleItemWeight}
                          onClick={() =>
                            handleItemWeightStatusToggle(weight.id)
                          }
                          colorScheme="green"
                          size="sm"
                          mr="2"
                        >
                          Enable
                        </Button>
                      )}
                    </td>
                    <td>
                      <UpdateItemWeightModal token={token} data={weight} />
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
    'https://alpha.ricnoslogistics.com/api/admin/shipment_routes',
    requestOptions
  );

  const responseBranch = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/branches',
    requestOptions
  );

  const responseItemValues = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/item_values',
    requestOptions
  );

  const responseVehicles = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/vehicles',
    requestOptions
  );

  const responseItemWeights = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/item_weights',
    requestOptions
  );

  const result = await response.json();
  const resultBranch = await responseBranch.json();
  const resultItemValues = await responseItemValues.json();
  const resultVehicles = await responseVehicles.json();
  const resultItemWeights = await responseItemWeights.json();


  const res = await fetch(`${API_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const userData = await res.json()


  return {
    props: {
      routes: result.data.shipment_routes,
      branches: resultBranch.data.branches,
      itemValues: resultItemValues.data.item_values,
      vehicles: resultVehicles.data.vehicles,
      itemWeights: resultItemWeights.data.item_weights,
      token,
      user: userData.data.user
    },
  };
}
