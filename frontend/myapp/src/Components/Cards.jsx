import Card from "react-bootstrap/Card";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { useEffect, useState } from "react";
import axios from "axios";
import Graph from "./Graph";
import { useNavigate } from "react-router-dom";

function Cards() {
  const [data, setData] = useState([]);

  async function getData() {
    let res = await axios.get("http://localhost:6060/cards");
    console.log(res.data);
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => {
          return (
            <>
              <Card
                style={{
                  width: "15rem",
                  height: "130px",
                  backgroundColor:' #8EC5FC',
                  backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <ManageAccountsIcon />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Admin
                  </Card.Subtitle>
                  <Card.Text>1</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  height: "130px ",
                  backgroundColor: " #85FFBD",
                  backgroundImage:
                    "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 52%, #ffffff 100%)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => navigate("/dashboard/emptable")}
              >
                <Card.Body>
                  <GroupsIcon />
                  <Card.Subtitle className="mb-2 text-muted">
                    Employee
                  </Card.Subtitle>
                  <Card.Title></Card.Title>
                  <Card.Text>{item.emp_rows}</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  height: "130px",
                  // backgroundColor: "#FFEBD8",
                  backgroundColor: '#FFDEE9',
                  backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',

                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <EmojiPeopleIcon />{" "}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Attendance
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
      <Graph />
    </div>
  );
}

export default Cards;
