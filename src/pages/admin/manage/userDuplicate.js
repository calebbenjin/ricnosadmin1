import { useState } from 'react';
import Layout from '@/components/organisms/Layout';
import Container from '@/components/atoms/Container';
import Modal from '@/components/molecules/Modal';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTh } from 'react-icons/fa';
import { BiSearchAlt2, BiTrash } from 'react-icons/bi';
import Header from '@/components/atoms/Heading';
import {
  Heading,
  Box,
  Flex,
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  ModalHeader,
  FormControl,
  FormLabel,
  Grid,
  Select,
} from '@chakra-ui/react';
import Link from 'next/link';

const data = [
  {
    id: 1,
    fullname: 'John Deo',
    email: 'johndeo@gmail.com',
    role: 'rider',
    date: 'july 2020',
    activate: true,
  },
  {
    id: 2,
    fullname: 'Lilian Koose',
    date: 'july 2020',
    email: 'liliankoose@gmail.com',
    role: 'agent',
    activate: false,
  },
  {
    id: 2,
    fullname: 'Mark Leo',
    date: 'july 2020',
    email: 'markleo@gmail.com',
    role: 'admin',
    activate: true,
  },
  {
    id: 2,
    fullname: 'Rose Kalin',
    date: 'july 2020',
    email: 'rosekalin@gmail.com',
    role: 'user',
    activate: false,
  },
];

export default function ManageSite() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = (id) => {
    alert(`Are you sure you want to delete this ${id} user?`);
  };

  const handleActivate = (status) => {
    alert(`Are you sure u want to Deactivate ${status} this User?`);
  };
  const handleDeactivate = (status) => {
    alert(`Are you sure u want to Activate ${status} this User?`);
  };

  const handleAddUser = () => {
    console.log('User Added');
  };

  return (
    <Layout>
      <Container>
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
          <Button
            colorScheme="green"
            onClick={onOpen}
            leftIcon={<AiOutlinePlus />}
          >
            Add User
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <Box textAlign="center">
              <ModalHeader size="2xl" color="gray" fontWeight="bold">
                Add User
              </ModalHeader>

              <Box my="10">
                <form onSubmit={handleAddUser}>
                  <Grid gridTemplateColumns="repeat(2, 1fr)" gap="5">
                    <FormControl>
                      <FormLabel>Fullname</FormLabel>
                      <Input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value=""
                        placeholder="Enter Fullname"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="text"
                        id="email"
                        name="email"
                        value=""
                        placeholder="Enter email"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Role</FormLabel>
                      <Select>
                        <option value="">Option</option>
                        <option value="">Option</option>
                        <option value="">Option</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input type="date" id="date" name="date" value="" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Status</FormLabel>
                      <Select>
                        <option value="" bg="green">
                          Activate
                        </option>
                        <option value="" bg="red">
                          Deactivate
                        </option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Box textAlign="center" mt="10">
                    <Button colorScheme="red" px="10">
                      Send
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Modal>
        </Flex>
        <hr />

        <Box my="4">
          <InputGroup size="lg" bg="white">
            <InputLeftElement pointerEvents="none">
              <BiSearchAlt2
                style={{
                  fontSize: '1.3rem',
                  marginLeft: '1rem',
                  color: 'gray',
                }}
              />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              pl="3rem"
              _focus={{ paddingLeft: '3rem' }}
            />
          </InputGroup>
        </Box>

        <Box mb="10">
          <div className="resTable">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th data-label="Date" scope="col"></th>
                  <th data-label="Date" scope="col">
                    Fullname
                  </th>
                  <th data-label="Date" scope="col">
                    Email
                  </th>
                  <th data-label="Track No" scope="col">
                    Role
                  </th>
                  <th data-label="Name" scope="col">
                    Date
                  </th>
                  <th data-label="Price" scope="col">
                    Status
                  </th>
                  <th data-label="Items" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td></td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.date}</td>
                    <td>
                      <Button
                        colorScheme="green"
                        onClick={() => handleActivate(user.status)}
                        size="sm"
                        mr="2"
                      >
                        Activate
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => handleDeactivate(user.status)}
                        size="sm"
                        mr="-px"
                      >
                        Deactivated
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleDelete(user.id)}
                        variant="outline"
                        color="red"
                        fontSize="1.5rem"
                      >
                        <BiTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
      </Container>
    </Layout>
  );
}
