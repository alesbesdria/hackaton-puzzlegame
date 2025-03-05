import { Outlet } from "react-router-dom";
import Home from "./pages/Homepage";

function App() {
    return (
        <>
            
            <main>
                <Outlet />
            </main>
            
        </>
    );
}

export default App;
