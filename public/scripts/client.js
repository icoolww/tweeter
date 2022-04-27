/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function() {

  // creating tweet element by usng template
  const renderTweets = function (datas) {
    for (let data of datas) {
      console.log(data)
      let $tweet = createTweetElement(data);
      $("#tweets-container").append($tweet);
    }
  };
  
  
  // creating a data template
  const createTweetElement = function (data) {
    const name = data.user.name;
    const avatar = data.user.avatars;
    const handle = data.user.handle;
    const content = data.content.text;
    const time = data.created_at;
  
    const $tweet = $(`
    <article class="tweet-container">  
        <header>
          <span class="name"><img src="${avatar}"><span>${name}</span></span>
          <span class="handle">${handle}</span>
        </header>
        <p for="text">${content}</p>
        <hr />
        <footer>
          <span class="symbol">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </span>
        </footer>
    </article>
      `);
  
      console.log("$tweet", $tweet);
    return $tweet;
  };
  
  
    renderTweets(data);
    console.log("data renderTweets", data);

});
