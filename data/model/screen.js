class Screen {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        // canvas layers
        this.skyLayer = new SkyLayer();
        this.sun = new Sprite(this.canvas.width / 2, this.canvas.height / 2, "assets/img/sun.png", true);
        this.frontLayer = new FrontLayer();

        this.overlay = new Image();
        this.overlay.src = "assets/img/overlay.png";
    }

    updateCanvas() {
        let sunAltitude = Utils.getSunAltitudeDegree();

        // sets how much the dawn (color filter and sky change) is visible.
        // 0.0 means hidden, 1.0 means fully visible.
        let dawnAlpha = Utils.clamp(2.0 - Math.abs(sunAltitude), 0.0, 1.0);

        // canvas content reset
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // sky
        this.skyLayer.updateAndDisplay(this.ctx, this.canvas, sunAltitude, dawnAlpha);

        // sun
        this.sun.setCoordinates(this.sun.x, Constants.SEALEVEL - sunAltitude * 8);
        this.sun.display(this.ctx);

        // front sprites
        this.frontLayer.display(this.ctx, this.canvas, sunAltitude, dawnAlpha);

        // global color overlay
        this.ctx.globalCompositeOperation = "overlay";
        this.ctx.drawImage(this.overlay, 0, 0, this.canvas.width, this.canvas.height);

        requestAnimationFrame(screen.updateCanvas.bind(this));
    }

}
