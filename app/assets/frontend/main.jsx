import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"

let mockTweets = [
  {id: 1, name: 'Manish Sethi', body: 'My #FirstTweet'},
  {id: 2, name: 'Manish Sethi', body: 'My #FirstTweet'},
  {id: 3, name: 'Manish Sethi', body: 'My #FirstTweet'}
];


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetsList:mockTweets};
  }
  addTweet(tweetToAdd){
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id: Date.now(), name: 'Guest', body: tweetToAdd});

    this.setState({tweetsList: newTweetsList});
  }
  render(){
    return (
        <div class="container">
          <TweetBox sendTweet={this.addTweet.bind(this)}/>
          <TweetList tweets={this.state.tweetsList} />
        </div>
    );
  }
}

let documentReady = () => {
  React.render(
    <Main />,
    document.getElementById('react')
  );

};

$(documentReady);
