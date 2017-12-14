$(document).ready(function() {
  var quoArr = [
    ['"I peed in an alley which happened to have a church which I did not see because I was drunk!"', "-Barney"],
    ['"The best I can give you is a fake smile and dead eyes."', "-Robin"],
    ['"Your package has always been big enough. You may not realize this Marshall Eriksen, but you’ve got a huge package!"', "-Lily"],
    ['"We struggle so hard to hold on to these things that we know are gonna disappear eventually. And that’s really noble."', "-Lily"],
    ['"Whenever I’m sad, I stop being sad and be awesome instead."', "-Barney"],
    ['"Because sometimes even if you know how something’s gonna end that doesn’t mean you can’t enjoy the ride."', "-Ted"],
    ['"The littlest thing can cause a ripple effect that changes your life. "', "-Ted"]
    ['"That’s life, you know, we never end up where you thought you wanted to be."', "-Marshall"],
    ['"Aw, man!"', "-The Blitz"],
    ['"Sometimes we search for one thing but discover another."', "-Barney"], ['"Dude, lots of chicks think that architects are hot. Think about that, you create something out of nothing. You’re like God. There is no one hotter than God."', "-Barney"], ['"OK, here’s my thing – if gay guys start getting married, then suddenly the whole world’s gonna be doing it. That’s how it works: they start something, then six months later, everyone follows. Like… now everyone gets manicures."', "-Barney"], ['"We’re going to get older whether we like it or not, so the only question is whether we get on with our lives, or desperately cling to the past."', "-Ted"], ['"God, it’s me, Barney. What up? I know we don’t talk much, but I know a lot of girls call out your name because of me. Awesome."', "-Barney"], ['"Everyone has an opinion on how long it takes to recover from a breakup. "', "-Ted"], ['"I wound up shame-eating the whole pizza. I woke up all greasy and sweaty. My sheets looked like what they wrap Deli sandwiches in. Maybe I should join a gym. Do you go to a gym?"', "-Ted"], ['"There are a lot of little reasons why the big things in our lives happen."', "-Ted"], ['"Look, you can’t design your life like a building. It doesn’t work that way. You just have to live it… and it’ll design itself."', "-Lily"], ['"You can’t just skip ahead to where you think your life should be."', "-Lily"], ['"It’s just, eventually we’re all gonna move on. It’s called growing up."', "-Lily"], ['"There are two big days in any love story: the day you meet the girl of your dreams and the day you marry her."', "-Lily"], ['"It’s time to let go of the fantasies. It’s time to grow up."', "-Barney"], ['"The future is scary but you can’t just run back to the past because it’s familiar."', "-Robin"], ['"We gotta wait for the real thing, no matter how tough it gets."', "-Ted"], ['"In marriage, being right is less important than being supportive. Remember: Happy wife equals happy life."', "-Lily"], ['"I’ve never asked Lily to do anything “no questions asked” because I never wanted to. She’s the love of my life. I never keep anything from her."', "-Marshall"]
  ];
  var theQuote = "";
  var theChar = "";
  var theTweet = theQuote + " " + theChar;

  $("#getQuote").on("click", function() {
    var i = Math.floor(Math.random() * (quoArr.length));
    theQuote = quoArr[i][0];
    theChar = quoArr[i][1];
    $(".quote").html(theQuote);
    $(".character").html(theChar);
    theTweet = theQuote + " " + theChar;
  });

  $("#tweet").on("click", function() {
   tweetIt();

  });
  function tweetIt() {
    if (theQuote.length > 124) {
      theQuote = theQuote.slice(0, 124) + '...';
      
    }
    window.open("https://twitter.com/home/?status=" + theTweet);
  };
});