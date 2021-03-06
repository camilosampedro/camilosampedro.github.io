var phrases = [
  'echo "ping me on my social links..."',
  'echo "| (• ◡•)| (❍ᴥ❍ʋ) It\'s adventure time"',
  [
    'echo "Living should mean no do-overs."^1000',
    'echo "This is for <a href="http://www.imdb.com/title/tt1910272/" title="Okabe Rintarou, Steins;Gate" target="_blank">the best. <i class="fas fa-flask" aria-hidden="true"></i></a>"'
  ],
  'echo "─=≡Σ(([ ⊐•̀⌂•́]⊐^1000 Iron Man!"',
  'echo "ヾ(⌐■_■)ノ♪^1000 <a href="https://youtu.be/9bZkp7q19f0">Gangnam style</a>"',
  'echo "[^._.^]ﾉ彡 I have <a href="https://www.instagram.com/camilosampedro/" title="Instagram: @camilosampedro" target="_blank">two cats <i class="fab fa-instagram" aria-hidden="true"></i></a>"',
  'echo "└[∵┌]└[ ∵ ]┘[┐∵]┘ Follow me on <a href="https://open.spotify.com/user/camilosampedro" title="Spotify: @camilosampedro" target="_blank">Spotify! <i class="fab fa-spotify" aria-hidden="true"></i></a>"',
  '<a href="https://lifehacker.com/373571/watch-star-wars-in-text-via-telnet" title="Star Wars via Telnet" target="_blank">telnet towel.blinkenlights.nl</a>',
  'echo "Source on <a href="https://github.com/camilosampedro/camilosampedro.github.io" target="_blank">my GitHub! <i class="fab fa-github-alt" aria-hidden="true"></i></a>"',
  'echo "Stars effect by <a href="https://codepen.io/saransh/pen/BKJun" target="_blank">@Saransh Sinha <i class="fab fa-codepen" aria-hidden="true"></i></a>"',
  'echo "Autotyped with <a href="https://mattboldt.com/demos/typed-js" target="_blank">Typed.js <i class="fab fa-npm" aria-hidden="true"></i></a>"',
  [
    'echo "This page is not responsive at all...^1000"',
    'echo "I\'m working on that...^1000"',
    'echo "Without breaking it.^500.^700.^1200 <i class="fas fa-bug"></i>^1300 <i class="fas fa-exclamation"></i>"',
  ],
  'echo "I hope to learn a little Japanese before One Piece ends"',
]

var randomPosition = Math.floor(Math.random() * phrases.length);
var newText = phrases[randomPosition];

var typed = new Typed('.element', {
  strings: Array.isArray(newText) ? newText : [newText],
  typeSpeed: 100,
  backSpeed: 50,
  // loop: true,
  // shuffle: true,
  startDelay: 1000,
});
