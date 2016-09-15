import * as React from "react";


export interface CardProps {
  frontid:number;
  backid:number;
  frontimg:string;
  backimg:string;
  class:string;
  cardname:string;
  cardage:string;
  cardpref:string;
  cardmsg:string;
  cardjob:string;
  cardheight:string;

}

export class Card extends React.Component<CardProps, {}> {

    render() {
        return (
          <div>
            <img className="back-img" src={this.props.backimg} />
            
            <div className={"front-img " + this.props.class} >
              <img src={this.props.frontimg}/>
              <article className="card-contents">
                {this.props.cardname}:{this.props.cardage}:{this.props.cardpref}
              </article>
            </div>
          </div>
        );
    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
