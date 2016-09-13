import * as React from "react";


export interface ImageProps {
  id:number;
  img:string;
}

export class Image extends React.Component<ImageProps, {}> {

    render() {
        return (
          <img src={this.props.img} />
        );
    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
