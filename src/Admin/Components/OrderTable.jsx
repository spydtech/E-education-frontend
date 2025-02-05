import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../State/Admin/Order/Action';
import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const OrderTable = () => {
    const dispatch = useDispatch();

    const { adminOrder } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.confirmed, adminOrder.devlivered])
    console.log("admin Orders", adminOrder)
    return (
        <div className='p-5'>
            <Card className='mt-2 bg-[#1b1b1b]'>
                <CardHeader title="Recent Orders" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Id</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Update</TableCell>

                                <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* <TableRow
                            hover
                            key={item.name}
                            sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                        ></TableRow> */}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrderTable