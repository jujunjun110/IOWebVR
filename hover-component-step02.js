AFRAME.registerComponent('hover', {
    init: function () {
        var el = this.el;
        el.addEventListener('raycaster-intersected', function () {
            el.setAttribute('color', 'red');
        })
    }
});
