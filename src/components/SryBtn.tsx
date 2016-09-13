import * as React from "react";

export interface SryBtnProps { compiler: string; framework: string; }

export class SryBtn extends React.Component<SryBtnProps, {}> {
    render() {
        return (
          <span>
            <button class="btn" id="sry-btn">sorry</button>
          </span>
        );
    }
}
