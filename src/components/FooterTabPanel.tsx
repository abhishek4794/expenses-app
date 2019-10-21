import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Notes from '@material-ui/icons/Notes';
import TableChart from '@material-ui/icons/TableChart';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Settings from '@material-ui/icons/Settings';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
});

export default function IconLabelTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<Notes />} label="Trans." />
                <Tab icon={<TableChart />} label="Stats" />
                <Tab icon={<PersonPinIcon />} label="ACCOUNTS" />
                <Tab icon={<Settings />} label="SETTINGS" />
            </Tabs>
        </Paper>
    );
}