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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPlus } from 'react-icons/bs';

function NewStaffModal({ data, token }) {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [branch, setBranch] = useState();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleNewStaff = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('phone', phone);
    formdata.append('name', name);
    formdata.append('branch_id', branch);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const req = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/create_staff`,
      requestOptions
    );

    const result = await req.json();

    if (result.success) {
      toast.success(result.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Button
        mx="4"
        colorScheme="green"
        leftIcon={<BsPlus className="iconSize" />}
        onClick={onOpen}
      >
        New Staff
      </Button>
      <Modal
        title={`New Staff`}
        loadingIndicator={loading}
        callback={handleNewStaff}
        btnText="Create Staff"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
          <FormLabel>Staff Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Staff Name"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Staff Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Staff Email"
            size="sm"
            type="mail"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Staff Phone Number</FormLabel>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Staff Phone"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Branch</FormLabel>
          <Select value={branch} onChange={(e) => setBranch(e.target.value)}>
            {data.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Modal>
    </>
  );
}

export default NewStaffModal;
