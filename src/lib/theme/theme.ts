'use client';
import { createTheme } from '@mui/material';

const colors = {
    colorPrimary: '#FB878E',
    rubineRed: '#CE0058',
    rubineRedLight: '#FF0270',
    pink: '#FB6095',
    orangePink: '#FB878E',
    orangePinkLight: '#fdc2c4',
    peachFuzz: '#ffbe98',
    peachFuzzLight: '#fde6d9',
    orange: '#FBAF87',
    yellow: '#F5E960',
    teal: '#55D6C2',
};

const headingFont = 'var(--font-dancing-script), cursive';

const customShadowColor = {dark: colors.yellow, normal: colors.orangePinkLight, light: colors.peachFuzzLight}
export const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        ...['h1', 'h2', 'h3', 'h4', 'h5'].reduce((acc, tag) => {
            acc[tag] = { fontFamily: headingFont };
            return acc;
        }, {} as Record<string, any>)
    },
    palette: {
        primary: {
            main: colors.colorPrimary,
            //'highlight': colors.rubineRed,
            //'highlightLight': colors.rubineRedLight
        },
        background: {
            paper: '#fef2e7',
            default: '#fef2e7'
        }
    },
    shadows: [
        "none",
        `0px 2px 1px -1px ${customShadowColor.dark},0px 1px 1px 0px ${customShadowColor.normal},0px 1px 3px 0px ${customShadowColor.light}`,
        `0px 3px 1px -2px ${customShadowColor.dark},0px 2px 2px 0px ${customShadowColor.normal},0px 1px 5px 0px ${customShadowColor.light}`,
        `0px 3px 3px -2px ${customShadowColor.dark},0px 3px 4px 0px ${customShadowColor.normal},0px 1px 8px 0px ${customShadowColor.light}`,
        `0px 2px 4px -1px ${customShadowColor.dark},0px 4px 5px 0px ${customShadowColor.normal},0px 1px 10px 0px ${customShadowColor.light}`,
        `0px 3px 5px -1px ${customShadowColor.dark},0px 5px 8px 0px ${customShadowColor.normal},0px 1px 14px 0px ${customShadowColor.light}`,
        `0px 3px 5px -1px ${customShadowColor.dark},0px 6px 10px 0px ${customShadowColor.normal},0px 1px 18px 0px ${customShadowColor.light}`,
        `0px 4px 5px -2px ${customShadowColor.dark},0px 7px 10px 1px ${customShadowColor.normal},0px 2px 16px 1px ${customShadowColor.light}`,
        `0px 5px 5px -3px ${customShadowColor.dark},0px 8px 10px 1px ${customShadowColor.normal},0px 3px 14px 2px ${customShadowColor.light}`,
        `0px 5px 6px -3px ${customShadowColor.dark},0px 9px 12px 1px ${customShadowColor.normal},0px 3px 16px 2px ${customShadowColor.light}`,
        `0px 6px 6px -3px ${customShadowColor.dark},0px 10px 14px 1px ${customShadowColor.normal},0px 4px 18px 3px ${customShadowColor.light}`,
        `0px 6px 7px -4px ${customShadowColor.dark},0px 11px 15px 1px ${customShadowColor.normal},0px 4px 20px 3px ${customShadowColor.light}`,
        `0px 7px 8px -4px ${customShadowColor.dark},0px 12px 17px 2px ${customShadowColor.normal},0px 5px 22px 4px ${customShadowColor.light}`,
        `0px 7px 8px -4px ${customShadowColor.dark},0px 13px 19px 2px ${customShadowColor.normal},0px 5px 24px 4px ${customShadowColor.light}`,
        `0px 7px 9px -4px ${customShadowColor.dark},0px 14px 21px 2px ${customShadowColor.normal},0px 5px 26px 4px ${customShadowColor.light}`,
        `0px 8px 9px -5px ${customShadowColor.dark},0px 15px 22px 2px ${customShadowColor.normal},0px 6px 28px 5px ${customShadowColor.light}`,
        `0px 8px 10px -5px ${customShadowColor.dark},0px 16px 24px 2px ${customShadowColor.normal},0px 6px 30px 5px ${customShadowColor.light}`,
        `0px 8px 11px -5px ${customShadowColor.dark},0px 17px 26px 2px ${customShadowColor.normal},0px 6px 32px 5px ${customShadowColor.light}`,
        `0px 9px 11px -5px ${customShadowColor.dark},0px 18px 28px 2px ${customShadowColor.normal},0px 7px 34px 6px ${customShadowColor.light}`,
        `0px 9px 12px -6px ${customShadowColor.dark},0px 19px 29px 2px ${customShadowColor.normal},0px 7px 36px 6px ${customShadowColor.light}`,
        `0px 10px 13px -6px ${customShadowColor.dark},0px 20px 31px 3px ${customShadowColor.normal},0px 8px 38px 7px ${customShadowColor.light}`,
        `0px 10px 13px -6px ${customShadowColor.dark},0px 21px 33px 3px ${customShadowColor.normal},0px 8px 40px 7px ${customShadowColor.light}`,
        `0px 10px 14px -6px ${customShadowColor.dark},0px 22px 35px 3px ${customShadowColor.normal},0px 8px 42px 7px ${customShadowColor.light}`,
        `0px 11px 14px -7px ${customShadowColor.dark},0px 23px 36px 3px ${customShadowColor.normal},0px 9px 44px 8px ${customShadowColor.light}`,
        `0px 11px 15px -7px ${customShadowColor.dark},0px 24px 38px 3px ${customShadowColor.normal},0px 9px 46px 8px ${customShadowColor.light}`,
    ]
});