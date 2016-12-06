import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";
import TweetStore from "./stores/TweetStore";

import TweetActions from "./actions/TweetActions";

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  // formattedTweets(tweetsList){
  //   let formattedList = tweetsList.map(tweet => {
  //     tweet.formattedDate = moment(tweet.created_at).fromNow();
  //     return tweet;
  //   });
  //   return {
  //     tweetsList: formattedList
  //   }
  // }
  addTweet(tweetToAdd){
  //   $.post("/tweets", {body: tweetToAdd})
  //   .success( savedTweet => {
  //     let newTweetsList = this.state.tweetsList;
  //     newTweetsList.unshift(savedTweet);
  //     this.setState(this.formattedTweets(newTweetsList));
  // })
  // .error(error => console.log(error));
}
  componentDidMount(){
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnMount(){
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange(){
    this.setState(getAppState());
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
  let reactNode = document.getElementById('react');
  if(reactNode) {
  React.render(<Main />, reactNode);
 }
};

$(documentReady);
