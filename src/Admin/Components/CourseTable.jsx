import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const CourseTable = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        // setFilterValue({ availability, category, sort });
        const data = {
            category: null,
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 100000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: "",
        };
    }, []);
    return (
        <div className='p-5'>
            <Card className='mt-2 bg-[#1b1b1b]'>
                <CardHeader title="Recent Courses" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>

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

export default CourseTable