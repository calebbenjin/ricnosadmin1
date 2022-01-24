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

function UpdateCategoryModal({ data, token }) {
  const [categoryID, setCategoryID] = useState(data.id);
  const [categoryName, setCategoryName] = useState(data.name);
  const [categoryDescription, setCategoryDescription] = useState(
    data.description
  );
  const [categoryRank, setCategoryRank] = useState(data.integer_rank);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleCategoryUpdate = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('id', categoryID);
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
        callback={handleCategoryUpdate}
        btnText="Update Category"
        isOpen={isOpen}
        onClose={onClose}
      >
        <FormControl my={3}>
          <FormLabel>Category Name</FormLabel>
          <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter Category Name"
            size="sm"
            type="text"
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Category Description</FormLabel>
          <Input
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            placeholder="Enter Category Description"
            size="sm"
            type="text"
          />
        </FormControl>

        <FormControl my={3}>
          <FormLabel>Category Rank</FormLabel>
          <Select
            value={categoryRank}
            onChange={(e) => setCategoryRank(e.target.value)}
          >
            <option value="1">Severe</option>
            <option value="2">Middle</option>
            <option value="3">Normal</option>
          </Select>
        </FormControl>
      </Modal>
    </div>
  );
}

export default UpdateCategoryModal;
