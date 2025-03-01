// Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, Button, MenuItem, Select } from '@mui/material';
import { API_BASE_URL } from '../../Config/api';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/orders`);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleUpdateStatus = async () => {
        if (selectedOrder) {
            try {
                await axios.put(`${API_BASE_URL}/api/orders/${selectedOrder.id}`, {
                    status: selectedOrder.status,
                });
                fetchOrders();
            } catch (error) {
                console.error('Error updating order status:', error);
            }
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <Grid container spacing={3}>
                {/* Display orders list */}
                {Array.isArray(orders) ? (
                    orders.map((order) => (
                        <Grid item key={order.id} xs={12}>
                            <Paper className="p-4" elevation={3}>
                                <Typography variant="h6" gutterBottom>
                                    Order ID: {order.id}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    User: {order.user.name} ({order.user.email})
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Course: {order.course.name} (Price: ₹{order.course.price})
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Status:
                                    <Select
                                        value={selectedOrder ? selectedOrder.status : ''}
                                        onChange={(e) =>
                                            setSelectedOrder({ ...selectedOrder, status: e.target.value })
                                        }
                                        fullWidth
                                        className="mt-2"
                                    >
                                        <MenuItem value="pending">Pending</MenuItem>
                                        <MenuItem value="completed">Completed</MenuItem>
                                        <MenuItem value="cancelled">Cancelled</MenuItem>
                                    </Select>
                                </Typography>
                                <Button variant="contained" color="primary" onClick={handleUpdateStatus}>
                                    Update Status
                                </Button>
                            </Paper>
                        </Grid>
                    ))
                ) : (
                    <p>No orders available.</p>
                )
                }

            </Grid>
        </div>
    );
};

export default Orders;
