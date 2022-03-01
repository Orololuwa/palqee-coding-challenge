import Table from "react-data-table-component";
import Pagination from "components/Pagination";
import theme from "theme";
import { useMemo, useState } from "react";

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
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  //Page change function
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  //Pagesize change function
  const pageSizeHandler = (e) => {
    const { value } = e.target;

    setPageSize(value);
  };

  return (
    <>
      <Table
        columns={columns}
        data={currentTableData}
        responsive
        customStyles={customStyles}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <form>
          <label
            htmlFor="pagesize"
            style={{ fontSize: "14px", marginRight: "5px" }}
          >
            Select Page Size
          </label>
          <select id="pagesize" value={pageSize} onChange={pageSizeHandler}>
            <option value={5}>5</option>
            <option value={10}> 10</option>
            <option value={15}>15</option>
          </select>
        </form>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default DataTable;
