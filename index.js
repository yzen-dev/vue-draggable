import Vue from 'vue'
Vue.directive('draggable', {
    bind: function (el,binding) {
        el.style.position = 'absolute';
        let startX, startY, initialMouseX, initialMouseY;
        let draggable = true;

        function mousemove(e) {
            let dx = e.clientX - initialMouseX;
            let dy = e.clientY - initialMouseY;
            el.style.top = startY + dy + 'px';
            el.style.left = startX + dx + 'px';
            return false;
        }

        function mouseup() {
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
        }
        function mousedown(e) {
            if (!draggable) return;
            startX = el.offsetLeft;
            startY = el.offsetTop;
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
            return false;
        }
        el.addEventListener('mousedown', mousedown);

        let no_draggable = binding.value.no_draggable;
        for (let i = 0; i < no_draggable.length; i++) {
            let item = el.getElementsByClassName(no_draggable[i]);
            for (let i = 0; i < item.length; i++) {
                item[i].addEventListener('mousedown',function(){draggable=false});
                item[i].addEventListener('mouseover',function(){draggable=true});
                item[i].addEventListener('mouseout',function(){draggable=true});
            }
        }
    }
});
