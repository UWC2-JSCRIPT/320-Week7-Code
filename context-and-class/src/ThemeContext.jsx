import React, { useState } from 'react';

const ThemeContext = React.createContext({
    themeName: 'light',
    setThemeName: () => {}
});

export default ThemeContext;

export function ThemeController({children}) {
    const [themeName, setThemeName] = useState('light');

    return (
        <ThemeContext.Provider value={{
            themeName,
            setThemeName,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}