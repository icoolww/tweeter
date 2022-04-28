/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// 
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


$(document).ready(function() {

  // creating tweet element by using template
  const renderTweets = function (datas) {
    for (let data of datas) {
      // console.log(data)
      let $tweet = createTweetElement(data);
      $("#tweets-container").prepend($tweet);
    }
  };
  
  
  // creating a data template
  const createTweetElement = function (data) {
    const name = escape(data.user.name);
    const avatar = escape(data.user.avatars);
    const handle = escape(data.user.handle);
    const content = escape(data.content.text);
    const time = escape(data.created_at);
    const timeAgo = escape(timeago.format(time));

    const $tweet = $(`
    <article class="tweet-container">  
        <header>
          <span class="image"><img src="${avatar}"><span class="name">${name}</span></span>
          <span class="handle">${handle}</span>
        </header>
        <p for="text">${content}</p>
        <hr />
        <footer>
        <span>${timeAgo}</span>
          <span class="symbol">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </span>
        </footer>
    </article>
      `);
    return $tweet;
  };
  
  // adding event listener and preventing default behaviour
  $("form").submit( function (event){
      event.preventDefault();

      const val = $(".button-counter > .counter").text();
      const valNumber = Number(val);

      // handling overtweet 
      $(".error").show(function(){
        if (valNumber < 0) {
          console.log(valNumber)
          return this;
        } 
      });

      // turning form data to query string 
      const data = $("form").serialize();
      console.log("data", data)

      $.ajax({
        url: "/tweets",
        method: "POST",
        data: data
      }).then((result) => {
        loadTweets();
        $("form")[0].reset();
      })
      
  });

  const loadTweets = function () {
    $.ajax("/tweets", { method: "GET"})
    .then ((result) => {
      renderTweets(result);
    })
  }

  loadTweets();

});

