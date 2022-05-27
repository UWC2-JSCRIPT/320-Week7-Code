import React from 'react';
import useTheme from './useTheme';

const randomThemes = ['light', 'dark', 'vaporware', 'material-ui'];

export default function Button() {
    const {themeName, setThemeName} = useTheme();

    const changeTheme = () => {
        const newThemeIndex = Math.floor(Math.random() * randomThemes.length);
        setThemeName(randomThemes[newThemeIndex]);
    };

    return <button onClick={changeTheme}>Hello! Your current theme is: {themeName}</button>;
}