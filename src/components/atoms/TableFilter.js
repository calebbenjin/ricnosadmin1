import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { BiSearchAlt, BiPrinter } from "react-icons/bi";

import regeneratorRuntime from "regenerator-runtime";

import styles from "@/styles/Table.module.css";

export const QuoteTableFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      gap="3"
    >
      <Input
        w={{ base: "100%", md: "60%" }}
        type="text"
        placeholder="Search for Quote"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </Box>
  );
};

export const OrderTableFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <Flex>
      <InputGroup mr="4" bg="white">
        <InputLeftElement pointerEvents="none">
          <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray" }} />
        </InputLeftElement>
        <Input
          type="text"
          _focus={{ paddingLeft: "2.2rem" }}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Search for Order"
        />
      </InputGroup>
      <Stack spacing={0} direction="row" align="center">
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("")}
        >
          All
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("Pending/Paid")}
        >
          Paid
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("in progress")}
        >
          In Progress
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </Stack>
    </Flex>
  );
};

export const FinanceTableFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <Flex>
      <InputGroup mr="4" bg="white">
        <InputLeftElement pointerEvents="none">
          <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray" }} />
        </InputLeftElement>
        <Input
          type="text"
          _focus={{ paddingLeft: "2.2rem" }}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Search"
        />
      </InputGroup>
      <Stack spacing={0} direction="row" align="center">
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("")}
        >
          All
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("paid")}
        >
          Paid
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("declined")}
        >
          Declined
        </Button>
      </Stack>
    </Flex>
  );
};

export const UsersTableFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <Flex>
      <InputGroup mr="4" bg="white">
        <InputLeftElement pointerEvents="none">
          <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray" }} />
        </InputLeftElement>
        <Input
          type="text"
          _focus={{ paddingLeft: "2.2rem" }}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Search"
        />
      </InputGroup>
      <Stack spacing={0} direction="row" align="center">
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("")}
        >
          All
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("user")}
        >
          Customers
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("logistic")}
        >
          Riders
        </Button>
        <Button
          borderRadius="0"
          variant="outline"
          bg="white"
          leftIcon={<BiPrinter />}
          onClick={() => setFilter("Deskstop officer")}
        >
          Staffs
        </Button>
      </Stack>
    </Flex>
  );
};
