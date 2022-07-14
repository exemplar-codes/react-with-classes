import { Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = { filteredUsers: DUMMY_USERS, searchTerm: "" };
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  //   useEffect(() => {
  //     setFilteredUsers(
  //       DUMMY_USERS.filter((user) =>
  //         user.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  //       )
  //     );
  //   }, [searchTerm]);

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      // update list
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name
            .toLowerCase()
            .includes(this.state.searchTerm.trim().toLowerCase())
        ),
      });
    }
  }

  render() {
    return (
      <div className={classes["finder"]}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <p>{this.state.searchTerm}</p>
        <Users users={this.state.filteredUsers} />
      </div>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) =>
//         user.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className={classes["finder"]}>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </div>
//   );
// };

export default UserFinder;
