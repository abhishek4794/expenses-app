import * as React from "react";
import ScrollableTabsButtonAuto from "../components/HeaderTabPanel";
import IconLabelTabs from "../components/FooterTabPanel";
import './style.css';

type MyProps = {
    // using `interface` is also ok
    message: string;
};
type MyState = {
    count: number; // like this
};
export class Home extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        count: 0
    };
    render() {
        return (
            <div className='expense-app'>
                <ScrollableTabsButtonAuto />
                <IconLabelTabs />
            </div>
        );
    }
}