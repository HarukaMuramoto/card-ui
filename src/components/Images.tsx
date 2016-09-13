import * as React from "react";
import { Image } from "./Image";


export interface ImagesProps {
  data: {id: number, img:string} [];
}

export class Images extends React.Component<ImagesProps, {}> {

    render() {

            return (
              <Image id={this.props.data[i].id} img={this.props.data[i].img} />
            );

    }
}

// a = data.map(function(value){
//   return <Image id="1" img="dfd"/>
// })
