import * as React from "react";
import { CardList } from "./CardList";


export interface TnxBtnProps {
   func:(index:number) =>{};
 }

export class TnxBtn extends React.Component<TnxBtnProps, {}> {
    render() {
        return (
          <span>
            <button className="btn" id="tnx-btn" onClick={this.props.func}>thanks</button>
          </span>
        );
    }
}
