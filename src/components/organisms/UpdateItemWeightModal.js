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

function UpdateItemWeightModal({ data, token }) {
  const [itemWeightID, setItemWeightID] = useState(data.id);
  const [itemWeightMinimum, setItemWeightMinimum] = useState(data.from);
  const [itemWeightMaximum, setItemWeightMaximum] = useState(data.to);
  const [itemWeightAmount, setItemWeightAmount] = useState(data.amount);

  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleItemWeightUpdate = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('id', itemWeightID);
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
      'https://alpha.ricnoslogistics.com/api/admin/update_weight',
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
        title={`Update Item Weight (${data.from} - ${data.to})`}
        loadingIndicator={loading}
        callback={handleItemWeightUpdate}
        btnText="Update Item Weight"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
          <FormLabel>Minimum</FormLabel>
          <Input
            value={itemWeightMinimum}
            onChange={(e) => setItemWeightMinimum(e.target.value)}
            placeholder="Enter Minimum weight"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Maximum</FormLabel>
          <Input
            value={itemWeightMaximum}
            onChange={(e) => setItemWeightMaximum(e.target.value)}
            placeholder="Enter Maximum weight"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Price</FormLabel>
          <Input
            value={itemWeightAmount}
            onChange={(e) => setItemWeightAmount(e.target.value)}
            placeholder="Enter Price"
            size="sm"
            type="text"
          />
        </FormControl>
      </Modal>
    </div>
  );
}

export default UpdateItemWeightModal;
