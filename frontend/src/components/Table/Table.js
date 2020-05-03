import React, { useMemo, useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import "./Table.css";

const Table = (props) => {
  // Table setup
  const columns = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Summary",
            accessor: "show.summary",
            Cell: ({ cell: { value } }) => {
              // The API returns HTML rather than plain text, so render HTML and shorten summary
              const shortSummary = value.split(".")[0] + "...";
              const test = { __html: shortSummary };
              return <span dangerouslySetInnerHTML={test}></span>;
            },
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
          {
            Header: "Official Site",
            accessor: "show.officialSite",
            Cell: ({ cell: { value } }) => {
              const shortUrl = value
                ? value
                    .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                    .split("/")[0]
                : value;
              return <a href={value}>{shortUrl}</a>;
            },
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
            Cell: ({ cell: { value } }) => {
              const hour = Math.floor(value / 60);
              const min = Math.floor(value % 60);
              return (
                <div>
                  {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
                  {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
                </div>
              );
            },
          },
        ],
      },
    ],
    []
  );

  const data = props.data;

  // useTable functions used to build up UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: "show.name",
            desc: false,
          },
        ],
      },
    },
    useFilters,
    useSortBy
  );

  const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setFilter("show.name", value);
    setFilterInput(value);
  };

  // UI for the table
  return (
    <div className="nm-table">
      <div className="nm-table-wrapper">
        <div className="nm-table-search">
          <span>Search TV Show by Name</span>
          <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search Name"}
          />
        </div>
        <div className="nm-table-data">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={
                        column.isSorted
                          ? column.isSortedDesc
                            ? "sort-desc"
                            : "sort-asc"
                          : ""
                      }
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
