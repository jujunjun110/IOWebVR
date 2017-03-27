AFRAME.registerComponent('hover', {
    schema: {
        hoveredColor: {
            type: 'color',
            default: 'green'
        }
    },
    init: function () {
        var el = this.el;
        var hoveredColor = this.data.hoveredColor;
        var defaultColor = el.getAttribute('color');
        var shouldChangeColor = true;

        el.addEventListener('raycaster-intersected', function () {
            if (!shouldChangeColor) {
                return;
            }
            el.setAttribute('color', hoveredColor);
            shouldChangeColor = false;
        })

        el.addEventListener('raycaster-intersected-cleared', function () {
            el.setAttribute('color', defaultColor);
            shouldChangeColor = true;
        })
    }
});
