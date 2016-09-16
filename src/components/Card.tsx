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
  precardname:string;
  precardage:string;
  precardpref:string;
  precardmsg:string;
  precardjob:string;
  precardheight:string;

}

export class Card extends React.Component<CardProps, {}> {

    render() {
        return (
          <div>

            <div className={"front-img " + this.props.class} >
              <img src={this.props.frontimg}/>
              <article className="card-contents">
                <p id="main-detail">{this.props.cardname}:{this.props.cardage}:{this.props.cardpref}</p>
                <p id="massage">{this.props.cardmsg}</p>
                <p id="more-detail">{this.props.cardjob}&nbsp;&nbsp;|&nbsp;&nbsp;{this.props.cardheight}</p>
              </article>
            </div>
          </div>
        );
    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
