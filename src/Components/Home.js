import React, { Component } from 'react'
import Artical from './Artical';
import axios from 'axios'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
          isloading:true,
          articles:[]
        }
        this.getCountry = this.getCountry.bind(this);
        this.getInfos = this.getInfos.bind(this);
    }
    




 getInfos = (country)=>{
 const apiKey = `4784b994c88c499783829439c6ace3d3`;
 let articles;
  let url = `http://newsapi.org/v2/top-headlines?${country?'country='+country:'q=all'}&apiKey=${apiKey}`;  
  axios.get(url).then(resp=>resp.data).then(data=> {
    articles=(data.articles.map(artical=>(
      <Artical key={1} author={artical.author}
      content={artical.content} description={artical.description}
      publishedAt={artical.publishedAt} source={artical.source}
      title={artical.title} url={artical.url} urlToImage={artical.urlToImage}
      />
    ))) ; 
    return articles;
  }).then(articals=>{
      this.setState({
        articles,
        isloading:false
      })
    }).catch(err=>console.log(err))
}

 getCountry =()=>{
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos=>{
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url= `https://us1.locationiq.com/v1/reverse.php?key=0244cef8afc840&lat=${lat}&lon=${lon}&format=json`;
    fetch(url).then(resp=>resp.json()).then(position=>{
      return position.address.country_code;
    }).then(country=>{
      this.getInfos(country);
    });
  });
 }else this.getInfos(null);
}

componentDidMount() {
  this.getInfos(null);
 console.log(this.state);
 
}


    render() {
        return (
            <div>
                <h1 className="text-center col-12 p-5 rounded">My khabar</h1>
                {this.state.isloading?'loading...':this.state.articles}
            </div>
        )
    }
}
