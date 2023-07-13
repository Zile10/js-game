import Wall from "../props/Wall.js";
import Map from "./Map.js";

const wall1 = new Wall({
    x: 0,
    y: 0,
    height: 12,
    width: 1
});
const wall2 = new Wall({
    x: 0,
    y: 0,
    height: 1,
    width: 16
});
const walls = []
walls.push(wall1, wall2)
const map1 = new Map({
    walls
});

const maps = [map1]

export default maps