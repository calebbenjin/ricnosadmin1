import { fullDateTime } from "@/lib/dateFormatter";
import { formatMoney } from "@/lib/currencyFormatter";

export const QuoteColumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Fullname",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phone",
  },
  {
    Header: "Quote",
    accessor: "quote",
    Cell: ({ value }) => {
      return formatMoney(value);
    },
  },
  {
    Header: "Date",
    accessor: "created_at",
    Cell: ({ value }) => {
      return fullDateTime(value);
    },
  },
];

export const OrderColumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Track No",
    accessor: "tracking_id",
  },
  {
    Header: "Item",
    accessor: "display_item",
  },
  {
    Header: "From",
    accessor: "pickup",
  },
  {
    Header: "To",
    accessor: "destination",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Price",
    accessor: "amount",
    Cell: ({ value }) => {
      return formatMoney(value);
    },
  },
];

export const FinanceColumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Fullname",
    accessor: "full_name",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Request Amount",
    accessor: "amount",
    Cell: ({ value }) => {
      return formatMoney(value);
    },
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return fullDateTime(value);
    },
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

export const UsersColumns = [
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Fullname",
    accessor: "full_name",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Reg Date",
    accessor: "reg_date",
    Cell: ({ value }) => {
      return fullDateTime(value);
    },
  },
  {
    Header: "Last Activity",
    accessor: "last_activity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
