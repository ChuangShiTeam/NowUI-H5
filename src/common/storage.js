import constant from './constant';

const token_key = ('token_' + constant.version);
const member_visit_forum_key = ('member_visit_forum_' + constant.version);

function getToken() {
    let token = localStorage.getItem(token_key);
    
    if (token === null || typeof (token) === 'undefined' || token === 'undefined') {
        return 'vjYUoyEmyZo2r7FW+iZ3sbtNCkYrKKLSzQJU7JLG2hH97BeP2+Gk72Hdd9e+qRgA4hePuuGPiTsn9q435nWD5D8+7e0Yosk/FE/M3r+W6GA=';
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
