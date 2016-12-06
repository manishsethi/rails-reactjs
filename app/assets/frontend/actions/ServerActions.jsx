import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants.jsx"

export default {
  receivedTweets(rawTweets){
    console.log(3, "ServerActions.receivedTweets")
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    })
  }
}
