import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Registration from './components/Registration';
import Userprofil from './components/Userprofil';
import Sign from './components/Sign';
import AdminDash from './components/AdminDash';
import AdminUsers from './components/AdminUsers';
import AdminMessages from './components/AdminMessages';
import AdminBlogs from './components/AdminBlogs';
import AdminaddBl from './components/AdminaddBl';
import AdminProfil from './components/AdminProfil';
import AdminUpdate from './components/AdminUpdate';
import AdminAdd from './components/AdminAdd';
import UserDash from './components/UserDash';
import StatusLine from './components/StatusLine';
import UserTask from './components/UserTask';
import PopupPen from './components/PopupPen';
import Popupstylo from './components/Popupstylo';
import UserTodo from './components/UserTodo';
import Pomodoro from './components/Pomodoro';
import User from './components/User';
import AdminUpBl from './components/AdminUpBl';
import Home from './home/Home'
import Logout from './components/Logout';
import Loginadmin from './components/Loginadmin';
function App() {
  return (
    <div className='App'>
      <Router>
      <Switch>
      <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/loginadmin" exact component={Loginadmin} />
          <Route path="/sign" exact component={Sign} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/reg" exact component={Registration} />
          <Route path="/admindash" exact component={AdminDash} />
          <Route path="/adminusers" exact component={AdminUsers} />
          <Route path="/adminmessages" exact component={AdminMessages} />
          <Route path="/adminblogs" exact component={AdminBlogs} />
          <Route path="/adminAddB" exact component={AdminaddBl} />
          <Route path="/adminupbl/:id" exact component={AdminUpBl} />

          <Route path="/adminprofil" exact component={AdminProfil} />
          <Route path="/adminupdate" exact component={AdminUpdate} />
          <Route path="/adminadd" exact component={AdminAdd} />
          <Route path="/userprofil/:id" exact component={Userprofil} />
          <Route path="/userdash" exact component={UserDash} />
          <Route path="/usertask/:id" exact component={UserTask} />
          <Route path="/popupedit:id" exact component={PopupPen} />
          <Route path="/statusline" exact component={StatusLine} />
          <Route path="/popupstylo/:id" exact component={Popupstylo} />
          <Route path="/todo" exact component={UserTodo} />
          <Route path="/pomodoro" exact component={Pomodoro} />

          <Route path="/user" exact component={User} />

          </Switch>
         </Router> 
    </div>
  );
}





export default App;
