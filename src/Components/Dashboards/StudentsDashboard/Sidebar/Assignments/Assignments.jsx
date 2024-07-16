import React, { useEffect, useState } from "react";
import "./Assignments.css";
import DataTable, { createTheme } from "react-data-table-component";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import calendar from "../../../../../images/calendar.svg";

function Assignments() {
  const [columns, setColumns] = useState([]);
  const data = [
    {
      id: 1,
      assignment: "mathematic",
      status: "pending",
      date: "20 aug",
      teacher: "ahmed taoufik",
      updates: "23:10",
      icon: <HiOutlineDotsHorizontal />,
    },
    {
      id: 1,
      assignment: "mathematic",
      status: "pending",
      date: "20 aug",
      teacher: "ahmed taoufik",
      updates: "23:10",
      icon: <HiOutlineDotsHorizontal />,
    },
    {
      id: 1,
      assignment: "mathematic",
      status: "pending",
      date: "20 aug",
      teacher: "ahmed taoufik",
      updates: "23:10",
      icon: <HiOutlineDotsHorizontal />,
    },
    {
      id: 1,
      assignment: "mathematic",
      status: "pending",
      date: "20 aug",
      teacher: "ahmed taoufik",
      updates: "23:10",
      icon: <HiOutlineDotsHorizontal />,
    },
    {
      id: 1,
      assignment: "mathematic",
      status: "pending",
      date: "20 aug",
      teacher: "ahmed taoufik",
      updates: "23:10",
      icon: <HiOutlineDotsHorizontal />,
    },
  ];

  const [pending, setPending] = useState(true);

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
        fontSize: "17px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        textTransform: "capitalize",
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const conditionalRowStyles = data.length > 5 ? true : false;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: "assignment",
          selector: (row) => row.assignment,
        },
        {
          name: "status",
          selector: (row) => row.status,
        },
        {
          name: "date",
          selector: (row) => row.date,
        },
        {
          name: "teacher",
          selector: (row) => row.teacher,
        },
        {
          name: "updates",
          selector: (row) => row.updates,
        },
        {
          name: "",
          selector: (row) => row.icon,
        },
      ]);
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="Assignments">
      <div className="left">
        <h1 className="capitalize text-3xl my-6">Assignments</h1>
        <div className="assignment-table">
          <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            // pagination
            // paginationPerPage={5}
            // paginationRowsPerPageOptions={[5, 10, 15, 20]}
            progressPending={pending}
            customStyles={customStyles}
            // conditionalRowStyles={conditionalRowStyles}
          />
        </div>
      </div>
      <div className="show-table"></div>
    </div>
  );
}

export default Assignments;
