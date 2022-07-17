import { Component } from "react";
import { ErrorContext } from "./ErrorBoundary";
import User from "./User";

import classes from "./Users.module.css";

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {this.props.users.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

class Users extends Component {
  static contextType = ErrorContext;
  constructor() {
    super();
    //   const [showUsers, setShowUsers] = useState(true);
    this.state = { showUsers: true };
  }

  componentDidUpdate() {
    // if (this.props.users.length === 0) throw new Error("No users provided");
    this.context.errorHasOccurred(new Error("No users provided"));
  }

  toggleUsersHandler() {
    // setShowUsers((curState) => !curState);
    this.setState((latestState) => {
      return { showUsers: !latestState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* <button onClick={toggleUsersHandler}> */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.props.children}
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
