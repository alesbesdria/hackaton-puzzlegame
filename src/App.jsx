import { Outlet } from "react-router-dom";
import { createContext, useState } from 'react';

const ThemeContext = createContext(null);
export { ThemeContext };
function App() {
    const [themeUnlock, setThemeUnlock] = useState({
        lotus: true,
        beach: true,
        cascade: true,
        meditation: true,
      });
      
    return (
            <main>
            <ThemeContext.Provider value={{themeUnlock, setThemeUnlock}}>
                <Outlet />
                </ThemeContext.Provider>
            </main>
    );
}

export default App;
