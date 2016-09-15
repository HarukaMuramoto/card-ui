import * as React from "react";
import { TnxBtn } from "./TnxBtn";
import { SryBtn } from "./SryBtn";
import { CardList } from "./CardList";




var data = [
  {id:1, name:"ゆりこ", age:"20歳", pref:"東京都", msg:"よろしく", job:"社会人", height:"170cm", img:"img/img1.jpg"},
  {id:2, name:"ふぁにー", age:"28歳", pref:"石川県", msg:"はろー", job:"学生", height:"167cm", img:"img/img2.jpg"},
  {id:3, name:"がくちゃん", age:"42歳", pref:"奈良県", msg:"こんにちは", job:"医者", height:"172cm", img:"img/img3.jpg"},
  {id:4, name:"ふみや", age:"33歳", pref:"京都府", msg:"(^o^)", job:"先生", height:"168cm", img:"img/img4.jpg"},
  {id:5, name:"つかちゃん", age:"30歳", pref:"茨城県", msg:"はろはろ", job:"看護師", height:"190cm", img:"img/img5.jpg"},
  {id:999, name:"enpty", age:"30歳", pref:"茨城県", msg:"はろはろ", job:"看護師", height:"190cm", img:"img/img6.jpg"},
  {id:9999, name:"つかちゃん", age:"30歳", pref:"茨城県", msg:"はろはろ", job:"看護師", height:"190cm", img:"img/img6.jpg"}
];

  // const idata = data.map(function(value) {
  //   var id = value.id;
  //   var img = value.img;
  //   return <Image id={data[0].id} img={data[0].img} />;
  // })
export interface MainProps { compiler: string; framework: string; }

interface MainState { index:number; left:string; }

export class Main extends React.Component<MainProps, MainState> {
  constructor() {
    super()
    this.state = {index: 0 , left:''}
  }
 changeCardLeft() {

    this.setState({
      left: "shift-left",
      index: this.state.index
    });
    setTimeout (function(){
      this.setState({
        left: "",
        index: this.state.index + 1
      })
    }.bind(this),1000)


    console.log(this.state.index);
    // return this.state.index;
  }
  changeCardRight() {

     this.setState({
       left: "shift-right",
       index: this.state.index
     });
     setTimeout (function(){
       this.setState({
         left: "",
         index: this.state.index + 1
       })
     }.bind(this),1000)


    //  console.log(this.state.index);
     // return this.state.index;
   }

    render() {

      //  this.state.index = 0;
        return (
          <article className="main-bg">
          <CardList left={this.state.left} data={data} index={this.state.index} />
          {(() => {
            console.log(this.state.index);
            if (this.state.index === data.length-2) {
              return (
                <section id="btn-sec">
                </section>
            );

            }
            return (
              <section id="btn-sec">
              <SryBtn func={this.changeCardLeft.bind(this)} />
              <TnxBtn func={this.changeCardRight.bind(this)}/>
              </section>

          );
        })()}
          </article>
        );
    }
}
