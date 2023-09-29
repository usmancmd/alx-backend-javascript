import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const objs = [19, 20, 34];
  return objs.map((obj) => new ClassRoom(obj));
}

