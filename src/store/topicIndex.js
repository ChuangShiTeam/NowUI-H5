const initialState = {
    topicTotal: 0,
    topicList: [
        {
            "latitude":"31.23037",
            "longtitude":"121.4737",
            "topicUserIsBookmark":false,
            "topicMediaList":[
                {
                    "topicMediaSort":1,
                    "topicId":"b48dbc965e784f5a98db48198e8585f0",
                    "topicMedia":{
                        "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/1621339b254c43fdae77a420e08734a5.jpeg",
                        "fileId":"1621339b254c43fdae77a420e08734a5"
                    },
                    "systemUpdateTime":1516851086571,
                    "appId":"df2078d6c9eb46babb0df957127273ab",
                    "systemStatus":true,
                    "systemCreateTime":1516851086571,
                    "systemCreateUserId":"14463951d1d94d39a9216dbd818fc984",
                    "topicMediaId":"4e99ff0cbecd4b60b3821e166b09f975",
                    "systemUpdateUserId":"14463951d1d94d39a9216dbd818fc984",
                    "topicMediaType":"IMAGE",
                    "systemVersion":0
                },
                // {
                //     "topicMediaSort":2,
                //     "topicId":"b48dbc965e784f5a98db48198e8585f0",
                //     "topicMedia":{
                //         "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/bad8242f8c094676a62ead0c3c223bad.jpeg",
                //         "fileId":"bad8242f8c094676a62ead0c3c223bad"
                //     },
                //     "systemUpdateTime":1516851086636,
                //     "appId":"df2078d6c9eb46babb0df957127273ab",
                //     "systemStatus":true,
                //     "systemCreateTime":1516851086636,
                //     "systemCreateUserId":"14463951d1d94d39a9216dbd818fc984",
                //     "topicMediaId":"0292be782a9d41ad931706a00d937a16",
                //     "systemUpdateUserId":"14463951d1d94d39a9216dbd818fc984",
                //     "topicMediaType":"IMAGE",
                //     "systemVersion":0
                // }
            ],
            "topicIsTop":false,
            "topicForumList":[
                {
                    "forumName":"没有推荐的圈子",
                    "forumId":"5a44f83817684b54b14d066575fe6124"
                },
                {
                    "forumName":"萌宠大集合",
                    "forumId":"b09e10682528456987c742d084d5e6c4"
                },
                {
                    "forumName":"萌兔联盟",
                    "forumId":"25004bb6457248c5afcf4faa68aa6b2f"
                },
                {
                    "forumName":"星际宠物",
                    "forumId":"d66d703e1b7a4797a91c690d6cf5a964"
                },
                {
                    "forumName":"魔都喵星人",
                    "forumId":"fef8fcc362534e0f8aaadbf45dbe7b47"
                },
                {
                    "forumName":"我是起司猫",
                    "forumId":"d6f37945504a40a09a2a24fbaea67944"
                }
            ],
            "topicCommentList":[],
            "topicCountBookmark":0,
            "topicSummary":"测试测试",
            "systemCreateTime":1516851086456,
            "topicIsLocation":true,
            "topicUserIsLike":false,
            "topicCountLike":0,
            "userId":"14463951d1d94d39a9216dbd818fc984",
            "topicLocation":"上海市黄浦区人民大道200号",
            "topicId":"b48dbc965e784f5a98db48198e8585f0",
            "topicCountComment":0
        },
        {
            "latitude":"31.23037",
            "longtitude":"121.4737",
            "topicUserIsBookmark":false,
            "topicMediaList":[
                {
                    "topicMediaSort":1,
                    "topicId":"437356f3ddf14c769fb0a99a9ee093b7",
                    "topicMedia":{
                        "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/eaa7d9f544c54064938c83791776c3db.png",
                        "fileId":"ba71eddca5be4600a6e11561d631216a"
                    },
                    "systemUpdateTime":1516701241380,
                    "appId":"df2078d6c9eb46babb0df957127273ab",
                    "systemStatus":true,
                    "systemCreateTime":1516701241380,
                    "systemCreateUserId":"14463951d1d94d39a9216dbd818fc984",
                    "topicMediaId":"da79b60b6497496db8f6ef497d132e32",
                    "systemUpdateUserId":"14463951d1d94d39a9216dbd818fc984",
                    "topicMediaType":"IMAGE",
                    "systemVersion":0
                }
            ],
            "topicIsTop":false,
            "topicForumList":[
                {
                    "forumName":"星际宠物",
                    "forumId":"d66d703e1b7a4797a91c690d6cf5a964"
                },
                {
                    "forumName":"魔都喵星人",
                    "forumId":"fef8fcc362534e0f8aaadbf45dbe7b47"
                },
                {
                    "forumName":"萌兔联盟",
                    "forumId":"25004bb6457248c5afcf4faa68aa6b2f"
                },
                {
                    "forumName":"萌宠大集合",
                    "forumId":"b09e10682528456987c742d084d5e6c4"
                }
            ],
            "topicCommentList":[],
            "topicCountBookmark":0,
            "topicSummary":"XXXXX",
            "systemCreateTime":1516701241317,
            "topicIsLocation":true,
            "topicUserIsLike":true,
            "topicCountLike":1,
            "userId":"14463951d1d94d39a9216dbd818fc984",
            "topicLocation":"上海市黄浦区人民大道200号",
            "topicId":"437356f3ddf14c769fb0a99a9ee093b7",
            "topicCountComment":0
        }
    ]
};

function topicIndex(state = initialState, action) {
    switch (action.type) {
        case 'topicIndex':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default topicIndex;