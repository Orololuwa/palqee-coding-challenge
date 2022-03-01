import Table from "react-data-table-component";
import Pagination from "components/Pagination";
import theme from "theme";

//Table data
const customStyles = {
  rows: {
    style: {
      minHeight: "52px",
      borderBottomColor: theme.colors.black,
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: theme.colors.black,
      },
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: theme.typeScale.bodyText4,
      padding: "10px 8px",
      fontWeight: "bold",
    },
  },
  head: {
    style: {
      backgroundColor: theme.colors.gray,
    },
  },
  body: {
    style: {
      padding: "0 1rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: theme.typeScale.bodyText4,
      padding: "10px 8px",
    },
  },
  headRow: {
    style: {
      backgroundColor: theme.colors.gray,
      minHeight: "52px",
      borderBottomWidth: ".5px",
      borderBottomStyle: "solid",
      borderBottomColor: theme.colors.black,
      padding: "0 1rem",
    },
    denseStyle: {
      minHeight: "32px",
    },
  },
};

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Hair Color",
    selector: (row) => row.hairColor,
  },
  {
    name: "Skin Color",
    selector: (row) => row.skinColor,
  },
  {
    name: "Eye Color",
    selector: (row) => row.eyeColor,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
  },
  {
    name: "Home World",
    selector: (row) => row.homeworld.name,
  },
];

const DataTable = ({ data }) => {
  return (
    <>
      <Table
        columns={columns}
        data={data}
        responsive
        customStyles={customStyles}
      />
      <Pagination
        className="pagination-bar"
        currentPage={1}
        totalCount={data.length}
        pageSize={5}
        onPageChange={(page) => onPageChange(page)}
      />
    </>
  );
};

export default DataTable;
