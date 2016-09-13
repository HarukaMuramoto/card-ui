import * as React from "react";
import { TnxBtn } from "./TnxBtn";
import { SryBtn } from "./SryBtn";
import { Image } from "./Image";


export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
    render() {
        return (
          <article>
          <main>はじめまして!</main><br />
          <Image compiler="TypeScript" framework="React" />
          <section id="btn-sec">
          <SryBtn compiler="TypeScript" framework="React" />
          <TnxBtn compiler="TypeScript" framework="React" />
          </section>
          </article>
        );
    }
}
