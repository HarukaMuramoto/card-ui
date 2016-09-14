import * as React from "react";


export interface CardProps {
  frontid:number;
  backid:number;
  frontimg:string;
  backimg:string;
}

export class Card extends React.Component<CardProps, {}> {

    render() {
        return (
          <div>
          <img src={this.props.frontimg} />
          <img src={this.props.backimg} />
          </div>
        );
    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
