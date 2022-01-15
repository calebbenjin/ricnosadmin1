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

function UpdateVehicleModal({ data, token }) {
  const [vehicleID, setVehicleID] = useState(data.id);
  const [vehicleType, setVehicleType] = useState(data.type);
  const [vehicleAmount, setVehicleAmount] = useState(data.amount);

  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleVehicleUpdate = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('id', vehicleID);
    formdata.append('type', vehicleType);
    formdata.append('amount', vehicleAmount);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const request = await fetch(
      'https://alpha.ricnoslogistics.com/api/admin/update_vehicle',
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
        title={`Update ${data.type}`}
        loadingIndicator={loading}
        callback={handleVehicleUpdate}
        btnText="Update Vehicle"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
          <FormLabel>Vehicle Type</FormLabel>
          <Input
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            placeholder="Enter Vehicle type"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Amount</FormLabel>
          <Input
            value={vehicleAmount}
            onChange={(e) => setVehicleAmount(e.target.value)}
            placeholder="Enter Amount"
            size="sm"
            type="text"
          />
        </FormControl>
      </Modal>
    </div>
  );
}

export default UpdateVehicleModal;
