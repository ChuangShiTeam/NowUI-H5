function scrollToTop(number) {
    document.documentElement.scrollTop = number;
    document.body.scrollTop = number;
}

function scrollToFixed(className, height) {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    getElementsByClassName(className)[0].style.position = 'absolute';
    getElementsByClassName(className)[0].style.top = (scrollTop + height).toString();
}

function getElementsByClassName(className, element) {
    var children = (element || document).getElementsByTagName('*');
    var elements = [];
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

function hancleComponentDidMount() {
    if (window.flexibility) {
        window.flexibility(document.body);
    }
}

function hancleComponentDidUpdate() {
    if (window.flexibility) {
        window.flexibility(document.body);
    }
}

function isMobile(str) {
    const re = /^1\d{10}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

function isEmail(str) {
    const re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

function lastWithSame(list, field, sameField) {
    if (list && list.length > 0) {
        let lastItem = list[list.length - 1];
        let newList = list.filter(function(item) {
            return item[sameField] === lastItem[sameField];
        });
        return newList.map(function(item) {
            return item[field];
        });
    } else {
        return [];
    }
}

export default {
    scrollToTop: scrollToTop,
    scrollToFixed: scrollToFixed,
    isIE8: isIE8,
    setTitle: setTitle,
    handleEnter: handleEnter,
    hancleComponentDidMount: hancleComponentDidMount,
    hancleComponentDidUpdate: hancleComponentDidUpdate,
    isMobile: isMobile,
    isEmail: isEmail,
    lastWithSame: lastWithSame
};