import React, { useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  Flex,
  Box,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import styled from "styled-components";
import router from "next/router";
import { toast } from "react-toastify";

function SelectRiderModal({ riders, orderID, token }) {
  const [loading, setLoading] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAssignDeliveryAgent = async (riderID) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/order/assign_agent/${orderID}/${riderID}`,
      requestOptions
    );

    const result = await response.json();

    if (result.success) {
      router.reload(window.location.pathname);
    } else {
      setLoading(false);
      toast.error(result.message);
      // console.log(result);
    }
  };

  const handleOnClick = (rider) => {
    setSelectedRider(rider);
    handleAssignDeliveryAgent(rider.id);
  };

  return (
    <>
      <Button onClick={onOpen}>Select Delivery Agent</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Delivery Agent</ModalHeader>
          <ModalCloseButton />
          <hr />
          <ModalBody pb={6}>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap="5">
              {riders.map((rider) => (
                <Card key={rider.id}>
                  <Flex alignItems="center">
                    <Box mr="10">
                      <Image
                        boxSize="100px"
                        objectFit="cover"
                        // src="https://bit.ly/dan-abramov"
                        fallbackSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt={rider.name}
                      />
                    </Box>
                    <Flex flexDirection="column" gap="5px">
                      <Flex alignItems="center" justifyContent="space-between">
                        <Text fontSize="xl">{rider.name}</Text>
                        <Flex alignItems="center" ml="2">
                          <Heading size="xs" color="grey">
                            {rider.availability === "1" ? "Online" : "Offline"}
                          </Heading>

                          <Box
                            width="5px"
                            height="5px"
                            ml="1"
                            borderRadius="50%"
                            bg={rider.availability === "1" ? "green" : "gray"}
                          ></Box>
                        </Flex>
                      </Flex>
                      <Flex alignItems="center">
                        <Heading fontSize="sm" color="grey" mr="2">
                          Status:
                        </Heading>
                        <Text fontSize="sm" color="black">
                          {rider.availability === "1"
                            ? "Available"
                            : "Unavailable"}
                        </Text>
                      </Flex>
                      <Flex justifyContent="center">
                        <Button
                          disabled={rider.availability === "0"}
                          colorScheme="red"
                          size="md"
                          isLoading={rider === selectedRider ? loading : null}
                          onClick={() => handleOnClick(rider)}
                        >
                          Book Rider
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SelectRiderModal;

const Card = styled.div`
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
  padding: 1rem;
  position: relative;
`;
