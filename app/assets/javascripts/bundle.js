/******/ (function(modules) { // webpackBootstrap
/******/ 	// shortcut for better minimizing
/******/ 	var exports = "exports";
/******/ 	
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/ 	
/******/ 	// The require function
/******/ 	function require(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId][exports];
/******/ 		
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module[exports], module, module[exports], require);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module[exports];
/******/ 	}
/******/ 	
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	require.modules = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	require.cache = installedModules;
/******/ 	
/******/ 	// __webpack_public_path__
/******/ 	require.p = "";
/******/ 	
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return require(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, require) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TweetBox = require(1);

	var _TweetBox2 = _interopRequireDefault(_TweetBox);

	var _TweetList = require(2);

	var _TweetList2 = _interopRequireDefault(_TweetList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mockTweets = [{ id: 1, name: 'Manish Sethi', body: 'My #FirstTweet' }, { id: 2, name: 'Manish Sethi', body: 'My #FirstTweet' }, { id: 3, name: 'Manish Sethi', body: 'My #FirstTweet' }];

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main(props) {
	    _classCallCheck(this, Main);

	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

	    _this.state = { tweetsList: mockTweets };
	    return _this;
	  }

	  _createClass(Main, [{
	    key: "addTweet",
	    value: function addTweet(tweetToAdd) {
	      var newTweetsList = this.state.tweetsList;
	      newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

	      this.setState({ tweetsList: newTweetsList });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { "class": "container" },
	        React.createElement(_TweetBox2.default, { sendTweet: this.addTweet.bind(this) }),
	        React.createElement(_TweetList2.default, { tweets: this.state.tweetsList })
	      );
	    }
	  }]);

	  return Main;
	}(React.Component);

	var documentReady = function documentReady() {
	  React.render(React.createElement(Main, null), document.getElementById('react'));
	};

	$(documentReady);

/***/ },
/* 1 */
/***/ function(module, exports, require) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TweetBox = function (_React$Component) {
	  _inherits(TweetBox, _React$Component);

	  function TweetBox() {
	    _classCallCheck(this, TweetBox);

	    return _possibleConstructorReturn(this, (TweetBox.__proto__ || Object.getPrototypeOf(TweetBox)).apply(this, arguments));
	  }

	  _createClass(TweetBox, [{
	    key: "sendTweet",
	    value: function sendTweet(event) {
	      event.preventDefault();
	      this.props.sendTweet(this.refs.tweetTextArea.value);
	      this.refs.tweetTextArea.value = '';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "form",
	          { onSubmit: this.sendTweet.bind(this) },
	          React.createElement(
	            "div",
	            { className: "input-field" },
	            React.createElement("textarea", { ref: "tweetTextArea", className: "materialize-textarea" }),
	            React.createElement(
	              "label",
	              null,
	              " What's happening"
	            ),
	            React.createElement(
	              "button",
	              { type: "submit", className: "btn right" },
	              " Tweet "
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TweetBox;
	}(React.Component);

	exports.default = TweetBox;

/***/ },
/* 2 */
/***/ function(module, exports, require) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tweet = require(3);

	var _Tweet2 = _interopRequireDefault(_Tweet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TweetList = function (_React$Component) {
	  _inherits(TweetList, _React$Component);

	  function TweetList() {
	    _classCallCheck(this, TweetList);

	    return _possibleConstructorReturn(this, (TweetList.__proto__ || Object.getPrototypeOf(TweetList)).apply(this, arguments));
	  }

	  _createClass(TweetList, [{
	    key: "render",
	    value: function render() {
	      var tweets = this.props.tweets.map(function (tweet) {
	        return React.createElement(_Tweet2.default, _extends({ key: tweet.id }, tweet));
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "ul",
	          { className: "collection" },
	          tweets
	        )
	      );
	    }
	  }]);

	  return TweetList;
	}(React.Component);

	exports.default = TweetList;

/***/ },
/* 3 */
/***/ function(module, exports, require) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);

	  function Tweet() {
	    _classCallCheck(this, Tweet);

	    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));
	  }

	  _createClass(Tweet, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "collection-item avatar" },
	        React.createElement(
	          "i",
	          { className: "material-icons circle" },
	          "person_pin "
	        ),
	        React.createElement(
	          "span",
	          { className: "title" },
	          this.props.name
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.body
	        )
	      );
	    }
	  }]);

	  return Tweet;
	}(React.Component);

	exports.default = Tweet;

/***/ }
/******/ ])