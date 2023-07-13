import logo from './logo.svg';
import './App.css';
import Check1 from './components/Check1';
import Users from './components/Users';
import Parent from './components/Parent';


function App() {

  return (
    <div className="App">
      

{/* uncomment Check1 and Users to see Check1.js and Users.js examples */}

      {/* <h1>Use Effect check</h1> */}
      {/* <Check1/> */}
      {/* <Users/> */}
      <Parent name="John Doe" location="Connecticut"/>
    </div>
  );
}

export default App;
