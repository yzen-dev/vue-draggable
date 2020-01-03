export default {
    bind(el) {
        el.style.position = 'absolute';
        let startX, startY, initialMouseX, initialMouseY;

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
            if (e.target.tagName=== 'INPUT' || e.target.tagName === 'SELECT')
                return;

            let curElement = e.target;
            while (curElement != null) {
                if (curElement.classList.contains('no-draggable')) {
                    return;
                }
                curElement = curElement.parentElement;
            }

            startX = el.offsetLeft;
            startY = el.offsetTop;
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
            return false;
        }

        el.addEventListener('mousedown', mousedown);
    }
}