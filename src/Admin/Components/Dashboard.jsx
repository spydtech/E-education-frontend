// Dashboard.js
import React from 'react';
import { Grid, Paper, Typography, Card, CardContent } from '@mui/material';

const Dashboard = () => {
    return (
        <div className="container mx-auto mt-10">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className="p-4" elevation={3}>
                        <Typography variant="h5" gutterBottom className="mb-4">
                            Dashboard
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Total Courses
                                        </Typography>
                                        <Typography variant="h4">
                                            100
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Active Users
                                        </Typography>
                                        <Typography variant="h4">
                                            500
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Pending Orders
                                        </Typography>
                                        <Typography variant="h4">
                                            10
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
