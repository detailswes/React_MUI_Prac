import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import {theme} from "../utils/theme.js";
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const Main = () => {

    const [project, setProject] = useState('');
    const [projectstatus, setProjectstatus] = useState('');

    const handleProjectChange = (e) => {
        setProject(e.target.value)
    }

    const handleChange = (e) => {
        setProjectstatus(e.target.value)
    }

    // table functions
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 5,
        maxColumns: 6,
    });

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
            <div style={{ height: 400, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                <DataGrid {...data} />
                </div>
            </div>
            </div>
            </Grid>

        </Grid>
        
      </ThemeProvider>
    </>
  )
}

export default Main;
