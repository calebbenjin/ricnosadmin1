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

function UpdateRouteModal({ data, token, branches }) {
  const [routeID, setRouteID] = useState(data.id);
  const [regionFrom, setRegionFrom] = useState(data.from.id);
  const [regionTo, setRegionTo] = useState(data.to.id);
  const [means, setMeans] = useState(data.means);
  const [regionAmount, setRegionAmount] = useState(data.amount);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleRouteUpdate = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('id', routeID);
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
      'https://alpha.ricnoslogistics.com/api/admin/update_shipment_route',
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
        title={`Update ${data.from.name} to ${data.to.name}`}
        loadingIndicator={loading}
        callback={handleRouteUpdate}
        btnText="Update Route"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
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
        <FormControl my={3}>
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
        <FormControl my={3}>
          <FormLabel>Delivery Method</FormLabel>
          <Select value={means} onChange={(e) => setMeans(e.target.value)}>
            <option value="air">Air</option>
            <option value="road">Road</option>
            <option value="sea">Sea</option>
          </Select>
        </FormControl>
        <FormControl my={3}>
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
      </Modal>
    </div>
  );
}

export default UpdateRouteModal;
