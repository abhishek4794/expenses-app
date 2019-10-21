import * as React from "react";
import ScrollableTabsButtonAuto from "../components/HeaderTabPanel";
import IconLabelTabs from "../components/FooterTabPanel";
import './style.less';

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
                <div className='app-bar'> App bar </div>
                <ScrollableTabsButtonAuto />
                <div className='footer-container'>
                    <IconLabelTabs />
                </div>
            </div>
        );
    }
}