const videos = [
  {
    image: "../images/covers/absense of you.png",
    subs: "200M",
    description: "Official Music Video for \"Absence Of You\" by grentperez\n\nSay hello to my first ever proper live music video :'),\nin loving collaboration with @theprettyboycollective",
    timestamp: "1 year ago",
    channel: "grentperez",
    title: "grentperez - Absence Of You (Official Music Video)",
    views: "460M",
    link: "https://open.spotify.com/embed/track/3fk4yTACtSqCzDol4mBPdt?utm_source=generator",
    profile: "../images/profiles/grentperez.jpg",
    id: 1
  },
  {
    image: "../images/covers/prom night.jpg",
    subs: "1.64M",
    description: "chanceraps.com",
    timestamp: "4 years ago",
    channel: "Chance The Rapper",
    title: "Prom Night [Audio]",
    views: "171,149",
    link: "https://open.spotify.com/embed/track/0vzyHoZduwzvQTMkKZ2OdU?utm_source=generator",
    profile: "../images/profiles/Chance The Rapper.jpg",
    id: 2
  },
  {
    image: "../images/covers/intro.jpg",
    subs: "39.6k",
    description: "Song: KANTE\nArtst: MIKE KAYIHURA \nAlbum Barely Mixed \nLabel Mike Kayihura music \nYear 2019",
    timestamp: "4 years ago",
    channel: "MIKE KAYIHURA MUSIC",
    title: "KANTE - MIKE KAYIHURA",
    views: "174K",
    link: "https://open.spotify.com/embed/track/2ot9PL42zi6ASn8PH40Jly?utm_source=generator",
    profile: "../images/profiles/Mike Kayihura.jpg",
    id: 3
  },
  {
    image: "../images/covers/ph city vibration.jpg",
    subs: "4.06M",
    description: "Burna Boy - Ph City Vibration\n\nOff the mixtape OUTSIDE available now!",
    timestamp: "5 years ago",
    channel: "Burna Boy",
    title: "Burna Boy - Ph City Vibration [Official Audio]",
    views: "1M",
    link: "https://open.spotify.com/embed/track/0Dw31CdnDXZtBryYSy1Cqh?utm_source=generator",
    profile: "../images/profiles/Burna Boy.jpg",
    id: 4
  },
  {
    image: "../images/covers/good ass intro.jpg",
    subs: "1.64M",
    description: "AcidRap album available @ http://www.chanceraps.com \nDownload The mixtape \"#10Day\" @ ChanceRaps.com",
    timestamp: "10 years ago",
    channel: "Chance The Rapper",
    title: "Chance The Rapper - So Good ( Good Ass Intro) (Official Video)",
    views: "3.5M",
    link: "https://open.spotify.com/embed/track/23Ij3xEFmYkRl00dDJCVMP?utm_source=generator",
    profile: "../images/profiles/Chance The Rapper.jpg",
    id: 5
  },
  {
    image: "../images/covers/lift me up.jpg",
    subs: "41.9M",
    description: "Rihanna - “Lift Me Up” ",
    timestamp: "8 months ago",
    channel: "Rihanna",
    title: "Rihanna - Lift Me Up (From Black Panther: Wakanda Forever)",
    views: "124M",
    link: "https://open.spotify.com/embed/track/35ovElsgyAtQwYPYnZJECg?utm_source=generator",
    profile: "../images/profiles/Rihanna.jpg",
    id: 6
  },
  {
    image: "../images/covers/histoire damour.jpg",
    subs: "125K",
    description: "Provided to YouTube by Excuse My French",
    timestamp: "1 year ago",
    channel: "Gaël Faye",
    title: "Histoire d'amour",
    views: "269K",
    link: "https://open.spotify.com/embed/track/1O5B2gDKqW46umrfQjTsxs?utm_source=generato",
    profile: "../images/profiles/Gael Faye.jpg",
    id: 7
  },
  {
    image: "../images/covers/i hear a symphony.jpg",
    subs: "203K",
    description: "Listen to “I Hear A Symphony” everywhere music is consumed: https://CodyFry.lnk.to/IHearaSymphonyID\nPre-order my new compilation “Symphonic” on vinyl and CD: https://CodyFry.lnk.to/SymphonicID",
    timestamp: "6 months ago",
    channel: "Cody Fry",
    title: "I Hear a Symphony - Cody Fry [Official Music Video]",
    views: "1M",
    link: "https://open.spotify.com/embed/track/4ZHGRFGwjnEIXHG2FhcDPv?utm_source=generator",
    profile: "../images/profiles/Cody Fry.jpg",
    id: 8
  },
  {
    image: "../images/covers/everything.jpg",
    subs: "39.9K",
    description: " #TheBlackSkirts #검정치마 #EVERYTHING\n2021/6/30 発売】 The Black Skirts 日本デビューシングル「EVERYTHING (Japanese Ver.)」 デジタルSGリリース\n\nThe Black Skirts 「EVERYTHING (Japanese Ver.)」 Digital Release",
    timestamp: "2 years ago",
    channel: "The Black Skirts",
    title: "The Black Skirts (검정치마) - EVERYTHING (Japanese Ver.",
    views: "340k",
    link: "https://open.spotify.com/embed/track/19Hg1UCZaCdpHB37L7x63X?utm_source=generator",
    profile: "../images/profiles/The Black Skirts.jpg",
    id: 9
  },
];

export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

export default videos