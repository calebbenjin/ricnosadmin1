import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "@/components/molecules/Modal";
import {
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPlus } from "react-icons/bs";

function NewAdminModal({ token }) {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleNewAdmin = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("name", name);
    formdata.append("password", password);
    formdata.append("password_confirmation", passwordConfirm);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    const req = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/register`,
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
        colorScheme="green"
        leftIcon={<BsPlus className="iconSize" />}
        onClick={onOpen}
      >
        New Admin
      </Button>
      <Modal
        title={`New Admin`}
        loadingIndicator={loading}
        callback={handleNewAdmin}
        btnText="Create Admin"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Flex flexDirection={"column"} m="3">
          <Heading color={"gray"} textAlign={"center"}>
            Add Admin
          </Heading>
        </Flex>
        <Flex gap={"3"}>
          <FormControl my={3}>
            <FormLabel>Admin Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Admin Name"
              size="lg"
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={"3"}>
          <FormControl my={3}>
            <FormLabel>Admin Email</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Admin Email"
              size="lg"
              type="mail"
            />
          </FormControl>
          <FormControl my={3}>
            <FormLabel>Admin Phone Number</FormLabel>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Admin Phone"
              size="lg"
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={"3"}>
          <FormControl my={3}>
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              size="lg"
              type="password"
            />
          </FormControl>
          <FormControl my={3}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Confirm Password"
              size="lg"
              type="password"
            />
          </FormControl>
        </Flex>
      </Modal>
    </>
  );
}

export default NewAdminModal;
