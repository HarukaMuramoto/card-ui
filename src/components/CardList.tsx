import * as React from "react";
import { Card } from "./Card";


export interface CardListProps {
  data: {id:number, name:string, age:string, pref:string, msg:string, job:string, height:string, img:string} [];
  index:number;
  left:string;
}

export class CardList extends React.Component<CardListProps, {}> {

    render() {
            // console.log(this.props.index);
            return (
              <Card cardname={this.props.data[this.props.index].name}
                    cardage={this.props.data[this.props.index].age}
                    cardpref={this.props.data[this.props.index].pref}
                    cardmsg={this.props.data[this.props.index].msg}
                    cardjob={this.props.data[this.props.index].job}
                    cardheight={this.props.data[this.props.index].height}
                    class={this.props.left}
                    frontid={this.props.data[this.props.index].id}
                    frontimg={this.props.data[this.props.index].img}
                    backid={this.props.data[this.props.index + 1].id}
                    backimg={this.props.data[this.props.index + 1].img} />
            );

    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
