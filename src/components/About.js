import React, {Component} from 'react'; import '../styling/About.css';

export default class About extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row" id="intro">
              <h1>ABOUT</h1>
          </div>
          <div className="bio row">
              <div className="copy col-md-8 col-sm-12">
                  <h2>Hiro Narita</h2>
                    <h5>GitHub<a href="www.twitter.com/MisquaredWu">@MisquaredWu</a></h5>
              </div>
              <div className="img col-md-4 col-sm-12"><img className="img-circle"
                                                           src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAALMAAAAJGYxOTgwNDEwLTI1YzYtNDAyZi04MzViLWQ0NzRkOTU2MDczZQ.jpg"
                                                           role="presentation"/>
              </div>
          </div>
          <div className="bio row">
              <div className="img col-md-4 col-sm-12"><img className="img-circle"
                                                           src="https://media.licdn.com/media/p/8/005/0a9/2e9/3ff91cf.jpg"
                                                           role="presentation"/>
              </div>

              <div className="copy col-md-8 col-sm-12">
                  <h2>Caspar Nagel</h2>
                    <h5>GitHub<a href="www.twitter.com/MisquaredWu"></a>@MisquaredWu</h5>
              </div>
          </div>
        </div>


           </div>
    )
  }
}
