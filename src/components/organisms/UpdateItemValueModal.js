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

function UpdateItemValueModal({ data, token }) {
  const [itemValueID, setItemValueID] = useState(data.id);
  const [itemValueMinimum, setItemValueMinimum] = useState(data.from);
  const [itemValueMaximum, setItemValueMaximum] = useState(data.to);
  const [itemValueAmount, setItemValueAmount] = useState(data.amount);

  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleItemValueUpdate = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('id', itemValueID);
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
      'https://alpha.ricnoslogistics.com/api/admin/update_item_value',
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
        title={`Update Item Value (${data.from} - ${data.to})`}
        loadingIndicator={loading}
        callback={handleItemValueUpdate}
        btnText="Update Item Value"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
          <FormLabel>Minimum</FormLabel>
          <Input
            value={itemValueMinimum}
            onChange={(e) => setItemValueMinimum(e.target.value)}
            placeholder="Enter Minimum amount"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Maximum</FormLabel>
          <Input
            value={itemValueMaximum}
            onChange={(e) => setItemValueMaximum(e.target.value)}
            placeholder="Enter Maximum amount"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Price</FormLabel>
          <Input
            value={itemValueAmount}
            onChange={(e) => setItemValueAmount(e.target.value)}
            placeholder="Enter Price"
            size="sm"
            type="text"
          />
        </FormControl>
      </Modal>
    </div>
  );
}

export default UpdateItemValueModal;
