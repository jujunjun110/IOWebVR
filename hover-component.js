if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerComponent('hover', {
    schema: {
        toColor: {
            type: 'color',
            default: 'green'
        }
    },
    init: function () {
        var el = this.el;
        var toColor = this.data.toColor;
        var defaultColor = el.getAttribute('color')
        var canIntersect = true;

        el.addEventListener('raycaster-intersected', function () {
            if (!canIntersect) {
                return;
            }
            el.setAttribute('color', toColor);
            canIntersect = false;
        })

        el.addEventListener('raycaster-intersected-cleared', function () {
            el.setAttribute('color', defaultColor);
            canIntersect = true;
        })
    }
});
