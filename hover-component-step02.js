if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerComponent('hover', {
    init: function () {
        this.el.addEventListener('raycaster-intersected', function () {
            el.setAttribute('color', 'red');
        })
    }
});
