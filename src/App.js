import './App.css';
import {apiUrl} from "./config";




function App() {
    return (
        <div >
            <p>test</p>
            {apiUrl? <p>{apiUrl}</p>:null}
        </div>
    );
}

export default App;
