import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles = [
    
        {
          "source": { "id": "news-com-au", "name": "News.com.au" },
          "author": "Andrew McMurtry",
          "title": "Pat Cummins nails English journalist",
          "description": "As the cricket world continues to lose its mind over the Jonny Bairstow stumping, the Aussies are seemingly revelling in being public enemies No. 1 through 11 in England.",
          "url": "https://www.news.com.au/sport/cricket/cummins-nails-english-journalist-after-question-about-bowling-underarm/news-story/111a81c2c04cd00849d0d82ce7f0cfb1",
          "urlToImage": "https://content.api.news/v3/images/bin/50d58d946c23c336936037209c940d8f",
          "publishedAt": "2023-07-03T13:37:00Z",
          "content": "As the cricket world continues to lose its mind over the Jonny Bairstow stumping, the Aussies are seemingly revelling in being public enemies No. 1 through 11 in England.\r\nThe world erupted when Auss… [+3023 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Luke Baker",
          "title": "Stop whining about the ‘spirit of cricket’ – England must get their own house in order",
          "description": "Recovering from a 2-0 Ashes deficit is still possible but blindly blaming the latest defeat on Jonny Bairstow’s controversial dismissal is not going to help, writes Luke Baker.",
          "url": "http://www.independent.co.uk/sport/cricket/ashes-england-australia-spirit-stokes-bairstow-b2368411.html",
          "urlToImage": "https://static.independent.co.uk/2023/07/03/11/SEI162555740.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-07-03T13:32:48Z",
          "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nThe recriminations were immediate and the d… [+5940 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadarticlesblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},
            {
              "source": { "id": "news-com-au", "name": "News.com.au" },
              "author": "Andrew McMurtry",
              "title": "Pat Cummins nails English journalist",
              "description": "As the cricket world continues to lose its mind over the Jonny Bairstow stumping, the Aussies are seemingly revelling in being public enemies No. 1 through 11 in England.",
              "url": "https://www.news.com.au/sport/cricket/cummins-nails-english-journalist-after-question-about-bowling-underarm/news-story/111a81c2c04cd00849d0d82ce7f0cfb1",
              "urlToImage": "https://content.api.news/v3/images/bin/50d58d946c23c336936037209c940d8f",
              "publishedAt": "2023-07-03T13:37:00Z",
              "content": "As the cricket world continues to lose its mind over the Jonny Bairstow stumping, the Aussies are seemingly revelling in being public enemies No. 1 through 11 in England.\r\nThe world erupted when Auss… [+3023 chars]"
            },
            {
              "source": { "id": "independent", "name": "Independent" },
              "author": "Luke Baker",
              "title": "Stop whining about the ‘spirit of cricket’ – England must get their own house in order",
              "description": "Recovering from a 2-0 Ashes deficit is still possible but blindly blaming the latest defeat on Jonny Bairstow’s controversial dismissal is not going to help, writes Luke Baker.",
              "url": "http://www.independent.co.uk/sport/cricket/ashes-england-australia-spirit-stokes-bairstow-b2368411.html",
              "urlToImage": "https://static.independent.co.uk/2023/07/03/11/SEI162555740.jpg?quality=75&width=1200&auto=webp",
              "publishedAt": "2023-07-03T13:32:48Z",
              "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nThe recriminations were immediate and the d… [+5940 chars]"
            },
            {
              "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
              "author": null,
              "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
              "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
              "publishedAt": "2020-04-27T11:41:47Z",
              "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
            },
            {
              "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
              "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
              "publishedAt": "2020-03-30T15:26:05Z",
              "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
            }
          ]            

  constructor()
  {
    super();
    console.log("hello i am news constructor from News Components")
    this.state={
      articles:[],
      load:true
      
    }
  }
  async componentDidMount(){
    console.log("cdm")
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=51ad0ab75b29400f94eb56f407677f27";
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles})

  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1>NewsMonkey Top headlines</h1>
        <div className="row">
        {this.state.articles.map((element) => {
      return (
        <div className="col-md-4" key={element.url}>
          <Newsitem
            title={element.title?element.title.slice(0,45):""}
            description={element.description?element.description.slice(0,88):""}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
          />
        </div>
      );
    })}
        </div>
      </div>
    );
  }
}  
export default News; 