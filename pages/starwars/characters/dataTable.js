import Pagination from "components/Pagination";
import { useMemo, useState } from "react";
import { sortCharacters, filterCharacters } from "utils/helpers";
import { IoFilterOutline } from "react-icons/io5";
import TableWrapper from "./tableStyles";

const DataTable = (props) => {
  const [data, setData] = useState([...props.data]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("default");
  const [sort, setSort] = useState("default");

  //Page change function
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, data]);

  //Pagesize change function
  const pageSizeHandler = (e) => {
    const { value } = e.target;

    setPageSize(value);
  };

  //sort function handler
  const onSortChangeHandler = (e) => {
    const { value } = e.target;
    setSort(value);

    if (value === "default") {
      setData(props.data);
    } else if (value === "homeworld") {
      setData(sortCharacters([...data], value));
    } else {
      setData(sortCharacters([...data], value));
    }
  };

  //filter function handler
  const onFilterChangeHandler = (e) => {
    const { value } = e.target;
    setFilter(value);

    if (value === "default") {
      setData(data);
    } else if (value === "homeworld") {
      setData(filterCharacters([...data], value));
    } else {
      setData(filterCharacters([...data], value));
    }
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <form>
          <label
            htmlFor="sort"
            style={{ fontSize: "14px", marginRight: "5px" }}
          >
            Sorter
          </label>
          <select id="sort" value={sort} onChange={onSortChangeHandler}>
            <option value="default">default</option>
            <option value="name">name</option>
            <option value="hairColor">hair color</option>
            <option value="skinColor">skin color</option>
            <option value="eyeColor">eye color</option>
            <option value="gender">gender</option>
            <option value="homeworld">home world</option>
          </select>
        </form>
        <form>
          <label
            htmlFor="filter"
            style={{ fontSize: "14px", marginRight: "5px" }}
          >
            Filter
          </label>
          <select id="filter" value={filter} onChange={onFilterChangeHandler}>
            <option value="default">default</option>
            <option value="hairColor">hair color</option>
            <option value="eyeColor">eye color</option>
            <option value="homeworld">home world</option>
          </select>
        </form>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <th>Name</th>
            <th>
              <Col>
                <span>Hair Color</span>
                <IoFilterOutline size={16} />
              </Col>
            </th>
            <th>Skin Color</th>
            <th>
              <Col>
                <span>Eye Color</span>
                <IoFilterOutline size={16} />
              </Col>
            </th>
            <th>gender</th>
            <th>Home World</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.hairColor}</td>
              <td>{row.skinColor}</td>
              <td>{row.eyeColor}</td>
              <td>{row.gender}</td>
              <td>{row.homeworld.name}</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxHeight: "70px",
          height: "50px",
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
