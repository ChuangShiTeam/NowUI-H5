import constant from './constant';

const token_key = ('token_' + constant.version);
const member_visit_forum_key = ('member_visit_forum_' + constant.version);

function getToken() {
    let token = localStorage.getItem(token_key);

    if (token === null || typeof (token) === 'undefined') {
        return '7+Gvdl5H2VV94AOJQetgKvzuJthMdsQHZ+/KMkJ3E58KYwSkVBEwuqFAMgb10zL2eTsHgQkQzZRxDr0GVfDTlyA+v+nUkC2G1IG1jAXc0cQ=';
    }

    return token;
}

function setToken(token) {
    localStorage.clear();

    localStorage.setItem(token_key, token);
}
function getMemberVisitForum() {
    return localStorage.getItem(member_visit_forum_key);
}

function setMemberVisitForum(memberVisitForum) {
    localStorage.setItem(member_visit_forum_key, memberVisitForum);
}


export default {
    getToken: getToken,
    setToken: setToken,
    getMemberVisitForum: getMemberVisitForum,
    setMemberVisitForum: setMemberVisitForum
};
