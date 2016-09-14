import * as React from "react";
import { CardList } from "./CardList";


export interface SryBtnProps {
  func:(index:number) =>{};
}


export class SryBtn extends React.Component<SryBtnProps, {}> {
    render() {
        return (
          <span>
            <button class="btn" id="sry-btn" onClick="changeCard();">sorry</button>
          </span>
        );
    }
}
