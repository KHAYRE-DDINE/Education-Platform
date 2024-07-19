import React, { useContext, useEffect, useState } from "react";
import "./Assignments.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LanguageContext } from "../../../../../App";
import EnglishAssignment from "./EnglishAssignment";
import ArabicAssignment from "./ArabicAssignment";

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
      id: 2,
      assignment: "Arabic",
      status: "pending",
      date: "20 aug",
      teacher: "ahmed taoufik",
      updates: "23:10",
      icon: <HiOutlineDotsHorizontal />,
    },
    {
      id: 3,
      assignment: "programming",
      status: "pending",
      date: "20 aug",
      teacher: "ahmed taoufik",
      updates: "23:10",
      icon: <HiOutlineDotsHorizontal />,
    },
  ];
  const [move, setMove] = useState(["about", "resources", "learnings"]);
  const [pending, setPending] = useState(true);
  const [open, setOpen] = useState(false);
  const [sideWidth, setSideWidth] = useState(632);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const language = useContext(LanguageContext);

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

  const goToTable = (e) => {
    navigate(move[0] + "/" + e.id);
    setOpen(true);
  };
  const backFromTable = () => {
    console.log("success");
    navigate("");
    setOpen(false);
  };

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
    <React.Fragment>
      {language === "english" ? (
        <EnglishAssignment
          data={data}
          move={move}
          columns={columns}
          pending={pending}
          open={open}
          sideWidth={sideWidth}
          location={location}
          id={id}
          customStyles={customStyles}
          goToTable={goToTable}
          backFromTable={backFromTable}
        />
      ) : (
        <ArabicAssignment
          data={data}
          move={move}
          columns={columns}
          pending={pending}
          open={open}
          sideWidth={sideWidth}
          location={location}
          id={id}
          customStyles={customStyles}
          goToTable={goToTable}
          backFromTable={backFromTable}
        />
      )}
    </React.Fragment>
  );
}

export default Assignments;
