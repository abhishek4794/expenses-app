import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function HeaderTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Daily" {...a11yProps(0)} />
                    <Tab label="Calender" {...a11yProps(1)} />
                    <Tab label="Weekly" {...a11yProps(2)} />
                    <Tab label="Monthly" {...a11yProps(3)} />
                    <Tab label="Total" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <HeaderTabPanel value={value} index={0}>
                Item One
      </HeaderTabPanel>
            <HeaderTabPanel value={value} index={1}>
                Item Two
      </HeaderTabPanel>
            <HeaderTabPanel value={value} index={2}>
                Item Three
      </HeaderTabPanel>
            <HeaderTabPanel value={value} index={3}>
                Item Four
      </HeaderTabPanel>
            <HeaderTabPanel value={value} index={4}>
                Item Five
      </HeaderTabPanel>
        </div>
    );
}