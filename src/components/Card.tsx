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
          <img className="front-img" src={this.props.frontimg} />
          <img className="back-img" src={this.props.backimg} />
          </div>
        );
    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
