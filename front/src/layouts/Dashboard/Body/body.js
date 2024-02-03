import *as React from "react";
import Box from "@mui/material/Box";
import ButtonAppBar from "./BodyNav/BodyNav";
import Container from "@mui/material/Container";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('RAKOTO Jao','034 95 522 66', 6.0, 24, 4.0),
    createData('Marcus Turin', '034 88 777 99', 9.0, 37, 4.3),
    createData('Christian Dark', '032 94 666 55', 16.0, 24, 6.0),
    createData('Klay Tompson', '033 68 888 79', 3.7, 67, 4.3),
    createData('Marco', '034 22 588 77', 44, 49, 3.9),
];

export default function Schema() {
    return (
        <Box sx={{ width: '65%', height: '150vh', marginLeft: '28%', marginTop: '12vh' }}>
            <ButtonAppBar />
            <div className="container_table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name and FirstName</StyledTableCell>
                                <StyledTableCell align="center">Phone number</StyledTableCell>
                                <StyledTableCell align="center">Reservation Date</StyledTableCell>
                                <StyledTableCell align="center">Payement&nbsp;(Ar)</StyledTableCell>
                                <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer sx={{marginTop:'3vh'}} component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name and FirstName</StyledTableCell>
                                <StyledTableCell align="center">Phone number</StyledTableCell>
                                <StyledTableCell align="center">Reservation date    </StyledTableCell>
                                <StyledTableCell align="center">Payement&nbsp;(Ar)</StyledTableCell>
                                <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Box>
    );

}