function scrollToTop(number) {
    document.documentElement.scrollTop = number;
    document.body.scrollTop = number;
}

function scrollToFixed(className, height) {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    getElementsByClassName(className)[0].style.top = (scrollTop + height).toString();
}

function getElementsByClassName(className, element) {
    var children = (element || document).getElementsByTagName('*');
    var elements = new Array();
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var classNames = child.className.split(' ');
        for (var j = 0; j < classNames.length; j++) {
            if (classNames[j] === className) {
                elements.push(child);
                break;
            }
        }
    }
    return elements;
}

function isIE8() {
    let isIE = !!window.ActiveXObject;
    let isIE8 = isIE && !!document.documentMode && (document.documentMode === 8);
    return isIE8;
}

function setTitle(title) {
    document.title = title;
}

function handleEnter(next, replace, callback) {
    callback();
}

export default {
    scrollToTop: scrollToTop,
    scrollToFixed: scrollToFixed,
    isIE8: isIE8,
    setTitle: setTitle,
    handleEnter: handleEnter
};