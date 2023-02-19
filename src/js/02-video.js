import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));

function getTimeUpdate(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.on('timeupdate', throttle(getTimeUpdate, 1000));
