import Card from '../atoms/Card';
import styled from 'styled-components';
import { Flex, Box, Text, Heading, Avatar, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { VscCalendar } from 'react-icons/vsc';
import Link from 'next/link';

export default function ActiveLog({ trackerData }) {
  const trackers = Object.keys(trackerData).map((key) => {
    let obj = {
      tracker_data: [trackerData[key]],
      tracker_date: key,
    };

    return obj;
  });

  return (
    <Box mt="4">
      <Card>
        <Flex justify="space-between" mb="8" alignItems="center">
          <Heading size="sm">Active Log</Heading>
          <BsThreeDotsVertical />
        </Flex>

        {trackers.map((tracker) => (
          <ActiveLogCard key={tracker.tracker_date}>
            <VscCalendar className="lineTab" />
            <Flex alignItems="center" justifyContent="space-between">
              <Heading size="sm">
                {tracker.tracker_data[0][0].order_status}
              </Heading>
              {/* <Link href="/">
                <a className="link">Edit</a>
              </Link> */}
            </Flex>
            <Text mt="2">{tracker.tracker_data[0][0].location}</Text>
          </ActiveLogCard>
        ))}
      </Card>
    </Box>
  );
}

const ActiveLogCard = styled.div`
  position: relative;
  border-left: solid 2px red;
  padding: 0 1rem 2rem 1rem;
  margin: 0;
  .lineTab {
    position: absolute;
    top: -0.6rem;
    left: -0.6rem;
    color: red;
  }
  .link {
    color: blue;
    font-weight: 600;
  }
`;

const EditButton = styled.div`
  text-align: center;
  margin-top: 1rem;
  a {
    border: solid 1px #cccc;
    color: #cccc;
    padding: 5px 30px;
    width: 100%;
    border-radius: 4px;
  }
`;
