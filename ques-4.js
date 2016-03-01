// 使用原生js实现事件代理
function delegate(parentEl, child, eventName, handler) {
    var childCollection = parentEl.querySelectorAll(child);
    //childCollectionshi是个NodeList
    var childs = Array.prototype.slice().call(childCollection);

    parentEl.addEventListener(eventName, function(e) {
        var eventTarget = e.target;
        // ~:按位非，~x的操作结果为-（x + 1）
        if (~childs.indexOf(eventTarget)) {
            handler(e);
        }
    }, false);
}

delegate(document.querySelector('#test'), 'li.active', 'click', function(e) {
    console.log(e.target);
});
