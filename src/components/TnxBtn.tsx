import * as React from "react";

export interface TnxBtnProps { compiler: string; framework: string; }

export class TnxBtn extends React.Component<TnxBtnProps, {}> {
    render() {
        return (
          <span>
            <button class="btn" id="tnx-btn">thanks</button>
          </span>
        );
    }
}
