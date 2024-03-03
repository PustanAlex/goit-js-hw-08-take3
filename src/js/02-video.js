

import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const playerIframe = document.getElementById('vimeo-player');

const player = new Vimeo(playerIframe);

const STORAGE_KEY = 'videoplayer-current-time';

const updateTimeAndSave = throttle(() => {
  player.getCurrentTime().then((time) => {
    localStorage.setItem(STORAGE_KEY, time);
  });
}, 1000); 

player.on('timeupdate', updateTimeAndSave);

player.ready().then(() => {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime !== null) {
    player.setCurrentTime(currentTime);
  }
  
});