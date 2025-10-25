'use client';
import { ElementType } from "react";

import { useTheme } from "@mui/material";
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export const HeaderIcon: React.FC<{ color: string, Icon: ElementType }> = ({ color, Icon }) => {
    const theme = useTheme();
    const iconColor = color === 'error' ? theme.palette.error.main : theme.palette.success.dark;
    return(
        <Icon sx={{ fontSize: 24, color: iconColor, mr: 1 }} />
    )
}

export const ListIcon: React.FC<{ color: string }> = ({ color }) => {
    const theme = useTheme();
    const iconColor = color === 'error' ? theme.palette.error.main : theme.palette.success.dark;
    const Icon = color === 'error' ? AutoGraphRoundedIcon : CheckCircleOutlineIcon;
    return(
        <Icon sx={{ fontSize: 16, color: iconColor }} />
    )
}