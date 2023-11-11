
import './App.css';

const apiUrl = process.env.GMAIL;
console.log(apiUrl);

function App() {
  return (
    <div >
      <p>11111</p>
        {apiUrl? <p>apiUrl</p>:null}
    </div>
  );
}

export default App;
