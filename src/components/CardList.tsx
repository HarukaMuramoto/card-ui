import * as React from "react";
import { Card } from "./Card";


export interface CardListProps {
  data: {id: number, img:string} [];
  index:number;
}

export class CardList extends React.Component<CardListProps, {}> {

    render() {

            return (
              <Card frontid={this.props.data[this.props.index].id} frontimg={this.props.data[this.props.index].img} backid={this.props.data[this.props.index + 1].id} backimg={this.props.data[this.props.index + 1].img} />
            );

    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
