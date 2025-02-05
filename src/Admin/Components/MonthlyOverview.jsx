import { TrendingUp } from '@mui/icons-material'
import React from 'react'
import { Avatar, Box, Card, CardHeader, Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CardContent from '@mui/material/CardContent'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Devices } from '@mui/icons-material';


const salesData = [
    {
        stats: '249k',
        title: "Sales",
        color: "#E5D68A",
        icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
    {
        stats: '12.2k',
        title: "Customers",
        color: "#22CB5C",
        icon: <AccountCircleIcon sx={{ fontSize: '1.75rem' }} />
    },
    {
        stats: '1.54k',
        color: '#DE4839',
        title: 'Courses',
        icon: <Devices sx={{ fontSize: '1.75rem' }} />
    },
    {
        stats: '$88k',
        color: '#12B0E8',
        title: 'Revenue',
        icon: <AttachMoneyIcon sx={{ fontSize: '1.75rem' }} />
    }
]

const MonthlyOverview = () => {
    const renderStats = () => {
        return salesData.map((item, index) => (
            <Grid item xs={12} sm={3} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar variant="rounded" sx={{
                        mr: 3,
                        width: 44,
                        height: 44,
                        boxShadow: 3,
                        color: 'common.white',
                        backgroundColor: `${item.color}`,
                    }}>
                        {item.icon}
                    </Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="caption">{item.title}</Typography>
                        <Typography variant="h6">{item.stats}</Typography>
                    </Box>
                </Box>
            </Grid>
        ));
    };
    return (
        <Card sx={{ bgcolor: '#24282E', color: 'white' }}>
            <CardHeader title="Monthly OverView"
                action={
                    <IconButton size="small">
                        <MoreVertOutlinedIcon />
                    </IconButton>
                }
                subheader={
                    <Typography varient="body2">
                        <Box component="span" sx={{ fontWeight: 600 }}>
                            Total 48.5% growth
                        </Box>
                        😎 this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important'
                    }
                }}
            />
            <CardContent sx={{ pt: theme => `${theme.spacing(3)}!important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MonthlyOverview