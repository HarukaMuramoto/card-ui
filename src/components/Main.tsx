import * as React from "react";
import { TnxBtn } from "./TnxBtn";
import { SryBtn } from "./SryBtn";
import { Images } from "./Images";

var data = [
  {id:1, img:"img/img1.jpg"},
  {id:2, img:"img/img2.jpg"},
  {id:3, img:"img/img3.jpg"},
  {id:4, img:"img/img4.jpg"},
  {id:5, img:"img/img5.jpg"}
];

  // const idata = data.map(function(value) {
  //   var id = value.id;
  //   var img = value.img;
  //   return <Image id={data[0].id} img={data[0].img} />;
  // })
export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
    render() {
        return (
          <article>
          <main>はじめまして!</main><br />
          <Images data={data} />
          <section id="btn-sec">
          <SryBtn compiler="TypeScript" framework="React" />
          <TnxBtn compiler="TypeScript" framework="React" />
          </section>
          </article>
        );
    }
}
