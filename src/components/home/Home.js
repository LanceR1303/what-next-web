import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Home = (jobs) => {
    return (
        <div className ="job-list">
            Welcome !!! to Jobs
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader"

             >
            <li>{JSON.stringify(jobs)}</li>

            {jobs.map((job, index) => (
                <ListItem disablePadding>
                  <ListItemText primary={job.description} />
                </ListItem>
            ))}
            </List>
        </div>
    )
}

export default Home