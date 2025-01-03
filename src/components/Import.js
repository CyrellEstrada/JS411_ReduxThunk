import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, TableContainer, Paper } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVert } from '@mui/icons-material'
import { deleteMake } from '../redux/actions';

const Import = (props) => {
    console.log(props)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event, idx) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(idx);
      };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        if (selectedIndex !== null) {
          props.deleteMake(selectedIndex);
        }
        handleClose();
      };

    return (
        <>
        <Button variant="contained" onClick={props.fetchMakes}>Import</Button>
        <h2>COUNT: {props.makes.length}</h2>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Makes</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => {
                        return (
                        <TableRow key={idx}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>{make.VehicleTypeName}</TableCell>
                            <MoreVert
                            sx={{ cursor: 'pointer' }}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e) => handleClick(e, idx)}
                            />
                            <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default Import