import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '@/components/molecules/Modal';
import {
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPlus } from 'react-icons/bs';

function NewCustomerModal({ token }) {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleNewCustomer = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('phone', phone);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const req = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/create_customer`,
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
        New Customer
      </Button>
      <Modal
        title={`New Customer`}
        loadingIndicator={loading}
        callback={handleNewCustomer}
        btnText="Create Customer"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
          <FormLabel>Customer Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Customer Email"
            size="sm"
            type="mail"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Customer Phone Number</FormLabel>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Customer Phone"
            size="sm"
            type="text"
          />
        </FormControl>
      </Modal>
    </>
  );
}

export default NewCustomerModal;
