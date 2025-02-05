import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled, useTheme } from '@mui/material/styles';

const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute',
});

const TrophyImg = styled('img')({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute',
});

const Achivements = () => {
    const theme = useTheme();

    const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

    return (
        <Card sx={{ position: 'relative', bgcolor: "#24282E", color: 'white' }}>
            <CardContent>
                <Typography variant='h6' sx={{ letterSpacing: '.25px' }}>
                    Learn With SPYD
                </Typography>
                <Typography variant='body2'>Congratulations 🥳</Typography>
                <Typography varient='h6' sx={{ my: 3.1 }}>428.8k</Typography>
                <Button size='small' variant='contained'>
                    View Sales
                </Button>
                <TriangleImg alt='triangle background' src={`/images/${imageSrc}`} />
                <TrophyImg
                    src='/images/trophy.png'
                    alt='trophy'
                />
            </CardContent>
        </Card>
    );
};

export default Achivements;
