class Utils {

    static getSunAltitudeDegree() {
        const position = SunCalc.getPosition(new Date(), Config.lat, Config.long);
        return position.altitude * (180 / Math.PI);
    }

    static isInsideRect(x, y, rect) {
        return rect.x <= x && x <= rect.x + rect.w
            && rect.y <= y && y <= rect.y + rect.h;
    }

    static isInsideCanvas(x, y) {
        return 0  <= x && x <= Constants.WIDTH
            && 0 <= y && y <= Constants.HEIGHT;
    }

    static isRectInsideCanvas(x, y, w, h) {
        return (0  <= x && x <= Constants.WIDTH) || (0 <= x + w && x + w <= Constants.WIDTH)
            || (0 <= y && y <= Constants.HEIGHT) || (0 <= y + h && y + h <= Constants.HEIGHT);
    }

    static clamp(n, min, max) {
        return Math.min(Math.max(n, min), max);
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    static randomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

}


class Config {
    static DEFAULTLAT = 48.85341;
    static DEFAULTLONG = 2.3488;

    static positionId;
    static lat = Config.DEFAULTLAT;
    static long = Config.DEFAULTLONG;
    static audio = new Audio("assets/sea-waves.wav");
}


class Constants {

    static WIDTH = 192;     // canvas width in pixels
    static HEIGHT = 108;    // canvas height in pixels
    static SEALEVEL = 71;   // horizon y axis position
    static VOLUME = 0.2;    // audio volume
    static OUTOFBOUND = 15; // number of pixels after screen border where an object is considered outside screen

    static particlesMap = [
        [9, 71], [23, 71], [27, 71], [41, 71], [47, 71], [51, 71], [53, 71], [55, 71], [57, 71],
        [65, 71], [69, 71], [73, 71], [75, 71], [85, 71], [99, 71], [103, 71], [109, 71], [135, 71], [137, 71],
        [139, 71], [143, 71], [161, 71], [163, 71], [156, 72], [182, 72], [188, 72], [190, 72], [46, 74], [50, 74],
        [54, 74], [56, 74], [64, 74], [80, 74], [82, 74], [98, 74], [146, 74], [152, 74], [162, 74], [67, 75], [71, 75],
        [75, 75], [119, 75], [121, 75], [131, 75], [133, 75], [0, 76], [4, 76], [10, 76], [126, 76], [136, 76],
        [154, 76], [160, 76], [166, 76], [55, 77], [63, 77], [65, 77], [67, 77], [169, 77], [2, 78], [4, 78],
        [26, 78], [40, 78], [170, 78], [172, 78], [5, 79], [7, 79], [63, 79], [73, 79], [77, 79], [97, 79], [99, 79],
        [121, 79], [161, 79], [163, 79], [165, 79], [32, 80], [82, 80], [182, 80], [13, 81], [15, 81], [17, 81],
        [19, 81], [49, 81], [71, 81], [73, 81], [141, 81], [149, 81], [153, 81], [165, 81], [116, 82], [118, 82],
        [122, 82], [134, 82], [138, 82], [142, 82], [166, 82], [168, 82], [170, 82], [109, 83], [111, 83], [86, 84],
        [88, 84], [92, 84], [155, 85], [161, 85], [151, 89], [92, 90], [94, 90]
    ];

    static starsMap = [
        [59, 0], [81, 0], [138, 0], [25, 1], [36, 2], [93, 3], [121, 3], [75, 4], [152, 4], [50, 5], [107, 5], [164, 5],
        [14, 6], [49, 6], [127, 6], [4, 7], [30, 7], [43, 7], [105, 7], [138, 7], [178, 7], [23, 8], [59, 8], [86, 8],
        [147, 8], [57, 10], [186, 10], [36, 11], [90, 11], [122, 11], [166, 11], [13, 13], [27, 13], [82, 13],
        [108, 13], [118, 13], [135, 13], [157, 13], [178, 14], [189, 14], [7, 15], [36, 15], [32, 16], [65, 16],
        [75, 16], [191, 16], [50, 17], [99, 17], [165, 17], [17, 18], [56, 18], [126, 18], [188, 19], [95, 20],
        [107, 20], [110, 20], [173, 20], [180, 20], [138, 21], [143, 21], [142, 22], [146, 22], [55, 23], [154, 23],
        [5, 24], [43, 24], [71, 24], [82, 24], [35, 25], [52, 26], [140, 27], [167, 27], [38, 28], [95, 28], [102, 28],
        [177, 28], [123, 29], [178, 29], [59, 30], [74, 30], [138, 30], [165, 30], [121, 31], [149, 31], [156, 31],
        [185, 31], [21, 32], [155, 32], [42, 34], [27, 35], [171, 36], [18, 37], [141, 37], [62, 39], [92, 39],
        [182, 39], [51, 40], [190, 40], [4, 41], [157, 42], [75, 43], [177, 43], [125, 46], [44, 47], [113, 47],
        [83, 48], [170, 48], [10, 50], [191, 107]
    ];

}
