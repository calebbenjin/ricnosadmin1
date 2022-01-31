import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '@/components/molecules/Modal';
import {
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from '@chakra-ui/react';
import { BiPencil } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateBranchModal({ data, token }) {
  const [branchID, setBranchID] = useState(data.id);
  const [branchName, setBranchName] = useState(data.name);
  const [branchAddress, setBranchAddress] = useState(data.address);
  const [branchLga, setBranchLga] = useState(data.lga);
  const [branchState, setBranchState] = useState(data.state);
  const [branchRank, setBranchRank] = useState(data.rank);
  const [branchCountry, setBranchCountry] = useState(data.country);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleBranchUpdate = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('id', branchID);
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
      'https://alpha.ricnoslogistics.com/api/admin/update_branch',
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      toast.success(response.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <Button onClick={onOpen} variant="outline" color="gray" fontSize="1.5rem">
        <BiPencil />
      </Button>
      <Modal
        title={`Update ${data.name}`}
        loadingIndicator={loading}
        callback={handleBranchUpdate}
        btnText="Update Branch"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
          <FormLabel>Branch Name</FormLabel>
          <Input
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            placeholder="Enter Branch Name"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Branch Address</FormLabel>
          <Input
            value={branchAddress}
            onChange={(e) => setBranchAddress(e.target.value)}
            placeholder="Enter Branch Address"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Branch LGA</FormLabel>
          <Input
            value={branchLga}
            onChange={(e) => setBranchLga(e.target.value)}
            placeholder="Enter Branch LGA"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Branch State</FormLabel>
          <Input
            value={branchState}
            onChange={(e) => setBranchState(e.target.value)}
            placeholder="Enter Branch State"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Branch Rank</FormLabel>
          <Select
            value={branchRank}
            onChange={(e) => setBranchRank(e.target.value)}
          >
            <option value="1">Head Office</option>
            <option value="2">Branches</option>
            <option value="3">Mobile/Affiliate Offices</option>
          </Select>
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Branch Country</FormLabel>
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
      </Modal>
    </div>
  );
}

export default UpdateBranchModal;
