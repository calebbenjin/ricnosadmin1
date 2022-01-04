import Card from '../atoms/Card';
import styled from 'styled-components';
import { Flex, Box, Text, Heading, Avatar, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { VscCalendar } from 'react-icons/vsc';
import Link from 'next/link';

export default function UserCardInfo({
  img,
  title,
  username,
  orders,
  url,
  phone,
  address,
  handleClick,
}) {
  return (
    <Container>
      <Card className="card">
        <Flex justify="space-between" mb="2" alignItems="center">
          <Heading size="sm">{title}</Heading>
          <BsThreeDotsVertical />
        </Flex>
        <hr />

        <Flex justify="space-between" alignItems="center" mt="2">
          <Box my="4">
            <Flex alignItems="center">
              <Avatar size="md" name={username} mr="4" src={img} />
              <Text isTruncated>{username}</Text>
            </Flex>
          </Box>
          <Link href="/" passHref>
            <a>
              <FaLongArrowAltRight className="icon" />
            </a>
          </Link>
        </Flex>
        <hr />

        <Flex justify="space-between" alignItems="center">
          <Box my="4">
            <Flex alignItems="center">
              <VscCalendar className="icon" />
              <Text ml="2">{orders} Orders</Text>
            </Flex>
          </Box>
          <Link href="/" passHref>
            <a>
              <FaLongArrowAltRight className="icon" />
            </a>
          </Link>
        </Flex>
        <hr />

        <Box my="4">
          <Heading size="sm">Contact Info</Heading>
          <Text my="4">{phone}</Text>
          <Text>{address}</Text>
        </Box>
        <hr />
        <Box mt="4">
          {/* <Heading size='sm'>Transport Method</Heading>
          <Flex my="2">
            <Box className="mottor"></Box>
            <Text>Mottor Bike</Text>
          </Flex> */}
          <Button onClick={handleClick} colorScheme="green">
            Confirm Delivery
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  .card {
    padding: 30px;
    border-bottom: solid 1px #333;
    img {
      border-radius: 50%;
      border: solid 1px red;
    }
  }
`;
