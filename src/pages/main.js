import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {theme} from "../utils/theme.js";
import Typography from '@mui/material/Typography';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
// popup imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

// table code stat from here
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
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

function createData(id, title, desc, status, action) {
  return { id, title, desc, status, action };
}

const rows = [
  createData('1', 'MUI + REACT LEARING (0)', 'PLAN OF ACTION- STUDY MUI FOR...', 'Open', <><EditIcon fontSize='small' sx={{marginLeft: 1}} /></>),
  createData('2', 'MUI + REACT LEARING (0)', 'PLAN OF ACTION- STUDY MUI FOR...', 'Open', <><EditIcon fontSize='small' sx={{marginLeft: 1}} /></>),
  createData('3', 'MUI + REACT LEARING (0)', 'PLAN OF ACTION- STUDY MUI FOR...', 'Open', <><EditIcon fontSize='small' sx={{marginLeft: 1}} /></>),
  createData('4', 'MUI + REACT LEARING (0)', 'PLAN OF ACTION- STUDY MUI FOR...', 'Open', <><EditIcon fontSize='small' sx={{marginLeft: 1}} /></>),
  createData('5', 'MUI + REACT LEARING (0)', 'PLAN OF ACTION- STUDY MUI FOR...', 'Open', <><EditIcon fontSize='small' sx={{marginLeft: 1}} /></>),
];
// table code ends here

// popup code start from here
const style = {
    position: 'absolute',
    top: '50%',
    right: '-20%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'none',
    width: 700,
    height: '94vh',
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    p: 4,
  };

const Main = () => {

    const [project, setProject] = useState('');
    const [projectstatus, setProjectstatus] = useState('');

    const handleProjectChange = (e) => {
        setProject(e.target.value)
    }

    const handleChange = (e) => {
        setProjectstatus(e.target.value)
    }

    // popup onclick states
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid mx={5}>
            <Grid container my={5} maxWidth="xxl" display="flex" alignItems="bottom">
                <Grid md={8}>
                    <Typography variant="h5">My Tasks</Typography>
                </Grid>
                <Grid md={4} sx={{textAlign: "right"}}>
                    <Button sx={{borderRadius: "20px", mr: 2}} variant="contained">My Projects</Button>
                    <Button sx={{borderRadius: "20px", mr: 2}} variant="contained">My Tasks</Button>
                    <Button sx={{borderRadius: "20px"}} variant="contained">Create New Task</Button>
                </Grid>
            </Grid>
            <Divider/>
            <Grid mt={5} borderRadius={2} boxShadow={4} p={4}>
                <Grid container display="flex">
                    <Grid md={3} px={2}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={project} label="Select Project" onChange={handleProjectChange}>
                                <MenuItem value="project-one">Project One</MenuItem>
                                <MenuItem value="project-two">Project Two</MenuItem>
                                <MenuItem value="project-three">Project Three</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid md={3} px={2}>
                        <FormControl fullWidth>
                            <TextField id="outlined-search" label="Search Project" type="search" />
                        </FormControl>
                    </Grid>
                    <Grid md={3} px={2}>
                        <FormControl fullWidth>
                            <InputLabel id="project-status">Project Status</InputLabel>
                            <Select labelId="project-status" id="demo-simple-select" value={projectstatus} label="Project Status" onChange={handleChange}>
                                <MenuItem value="open">Open</MenuItem>
                                <MenuItem value="fixed">Fixed</MenuItem>
                                <MenuItem value="close">Close</MenuItem>
                                <MenuItem value="reopen">Reopen</MenuItem>
                                <MenuItem value="working">Working</MenuItem>
                                <MenuItem value="stuck">Stuck</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid md={3} px={2}>
                        <FormControl fullWidth>
                            <TextField id="outlined-search" label="Search By Custom" type="search" />
                        </FormControl>
                    </Grid>
                    <Box pl={2} pt={2}>
                        <Button sx={{borderRadius: "0"}} size="large" variant="contained">Submit</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid mt={5} borderRadius={2} boxShadow={4} p={4}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="left">Title</StyledTableCell>
                    <StyledTableCell align="left">Description</StyledTableCell>
                    <StyledTableCell align="left">Status</StyledTableCell>
                    <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                        {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.title}</StyledTableCell>
                    <StyledTableCell align="left">{row.desc}</StyledTableCell>
                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                    <StyledTableCell align="left"><VisibilityIcon onClick={handleOpen} fontSize='small'/> {row.action}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

            {/* table view project model */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box p={1} sx={style}>
                    <Grid container>
                        <Grid md="8">
                            <Typography variant='p'>Project / Fotunet - Valuation / FV-321 <LinkIcon fontSize='small' pt={2} /></Typography>
                        </Grid>
                        <Grid md="4" textAlign='right'>
                            <ArrowCircleLeftIcon/> <ArrowCircleRightIcon/>
                        </Grid>

                        <Grid md={12} mt={5}>
                            <Typography sx={{fontSize: '20px', fontWeight: '700'}}>Get the Feedback on Clutch</Typography>
                        </Grid>

                        <Grid md={12} mt={2}>
                        <Stack spacing={2} direction="row">
                            <Button sx={{backgroundColor: '#EBF2FF', color: '#505F79', fontSize: '13px', padding: '10px 20px'}}variant="text">5 Attachments</Button>
                            <Button variant="contained">Contained</Button>
                            <Button variant="outlined">Outlined</Button>
                        </Stack>
                        </Grid>

                        <Grid md={12} mt={2}>
                            <Typography pb={2} varient="p">We're good to proceed on this task and would expect to complete it today.
                            Here's the further instruction client has shared. Find the attached below
                            One important thing, I want to share our marketing language with you so the design will be according to it.
                            </Typography>
                            <Divider/>
                        </Grid>

                        <Grid md={12} mt={5}>
                            <Box mb={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                <Box width="4%"><RadioButtonCheckedIcon fontSize='small' pt={2} sx={{color: '#F3B20A'}}/></Box>
                                <Box width='30%'><Typography varient="p">Category Name</Typography></Box>
                                <Box width='66%'><Typography varient="p" color="#005DFF">Design</Typography></Box>
                            </Box>
                            <Box mb={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                <Box width="4%"><RadioButtonCheckedIcon fontSize='small' pt={2} sx={{color: '#01875BB5'}}/></Box>
                                <Box width='30%'><Typography varient="p">Assigned by</Typography></Box>
                                <Box width='66%'><Typography varient="p" color="#005DFF">Harsh Vardhan</Typography></Box>
                            </Box>
                            <Box mb={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                <Box width="4%"><RadioButtonCheckedIcon fontSize='small' pt={2} sx={{color: '#005DFFB2'}}/></Box>
                                <Box width='30%'><Typography varient="p">Assigned To</Typography></Box>
                                <Box width='66%'><Typography varient="p" color="#005DFF">Kamal Kant, Shalini Katoch, Sanjay Midha.</Typography></Box>
                            </Box>
                            <Box pb={4} mb={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                <Box width="4%"><RadioButtonCheckedIcon fontSize='small' pt={2} sx={{color: '#E82121BD'}}/></Box>
                                <Box width='30%'><Typography varient="p">Deadline</Typography></Box>
                                <Box width='66%'><Typography varient="p" color="#005DFF">25 Dec, 2022</Typography></Box>
                            </Box>
                            <Divider/>
                        </Grid>

                        <Grid md={12} mt={5}>
                            <Box display='flex' justifyContent='start'>
                                <Box mr={3} pb={4} mb={2} sx={{display: 'flex', alignItems: 'center'}}>
                                    <Box mr={1}><LinkIcon fontSize='small'/></Box>
                                    <Box><Typography varient="p" color="#005DFF">Files.zip</Typography></Box>
                                </Box>
                                <Box mr={3} pb={4} mb={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                    <Box mr={1}><PictureAsPdfIcon fontSize='small' sx={{color: '#EB0000'}} /></Box>
                                    <Box><Typography varient="p" color="#005DFF">Fortunet.pdf</Typography></Box>
                                </Box>
                                <Box mr={3} pb={4} mb={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                    <Box mr={1}><ImageIcon fontSize='small' sx={{color: '#666666'}} /></Box>
                                    <Box><Typography varient="p" color="#005DFF">Image.jpg</Typography></Box>
                                </Box>
                                <Box mr={3} pb={4} mb={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                    <Box mr={1}><NoteAddIcon fontSize='small' sx={{color: '#005DFF'}} /></Box>
                                    <Box><Typography varient="p" color="#005DFF">Excel.xls</Typography></Box>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                </Fade>
            </Modal>

            </Grid>

        </Grid>

        
        
      </ThemeProvider>
    </>
  )
}

export default Main;
