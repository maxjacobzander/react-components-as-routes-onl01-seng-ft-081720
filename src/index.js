import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//     <NavLink
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Sign Up</NavLink>
//       <NavLink
//         to="/messages"
//         exact
//         style={link}
//         activeStyle={{
//           background: 'darkblue'
//         }}
//         >Messages</NavLink>
//   </div>;

// const Home = () => <h1>Home!</h1>;

// const About = () => <h1>This my my about component!</h1>

// const Login = () => 
//       <form>
//         <h1>Login</h1>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//         </form>;

// const Signup = () => 
//       <form>
//         <h1>Sign Up</h1>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <div>
//           <input type="password" name="password_confirmation" placeholder="Confirm Password" />
//           <label htmlFor="password_confirmation">Confirm Your Password</label>
//         </div>
//         <input type="submit" value="Sign Up" />
//         </form>;

// const Messages = () => <h1>This is a place for messages</h1>

// ReactDOM.render((
//   <Router>
//     <div>
//     <Navbar />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/signup" component={Signup} />
//       <Route exact path="/messages" component={Messages} />
//     </div>
//   </Router>),
//   document.getElementById('root')
// );