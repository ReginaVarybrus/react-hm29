import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// Зебра
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
// Зебра

// Dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// Main function

const EnhancedTable = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (index) => {
    console.log(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(props.data);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">ID</StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data?.results &&
                  props.data.results.map((row) => (
                    <>
                      <StyledTableRow key={row.id} onClick={() => handleClickOpen(row)}>
                        <StyledTableCell component="th" scope="row">
                          {row.id}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                        <StyledTableCell align="right">{row.status}</StyledTableCell>
                      </StyledTableRow>
                      <BootstrapDialog
                        key={row.id}
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                      >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                          {row.name}
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                          <Typography gutterBottom>
                            {row.status}
                          </Typography>
                          <Typography gutterBottom>
                            {row.species}
                          </Typography>
                          <Typography gutterBottom>
                            <img src={row.image}></img>
                          </Typography>
                        </DialogContent>
                      </BootstrapDialog>
                    </>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={props.count}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onPageChange={props.onPageChange}
          />
        </Paper >
      </Box >
    </>
  )
}

export default EnhancedTable;


