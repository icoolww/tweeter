/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// creating a data template
const createTweetElement = function (data) {
  const name = data.user.name;
  const avatar = data.user.avatars;
  const handle = data.user.handle;
  const content = data.content.text;
  const time = data.created_at;

  const $tweet = $(`
    <article class="tweet-container">  
      <label for="testing">Testing Testing</label>
        <header>
              
        </header>
          <hr />
        <footer>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </footer>
    </article>
    `);

  return $tweet;
};

  // creating tweet element by usng template
  const renderTweets = function (datas) {
    for (let data of datas) {
      let $tweet = createTweetElement(data);
      $("#tweets-container").prepend($tweet);
    }
  };
