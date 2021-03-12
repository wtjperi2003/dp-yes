module.exports = {
    title: 'Deep Learning',
    description: 'Just playing around',
    base:'/dp-yes/',
    themeConfig: {
        nav: [
            { text: '笔记', link: '/note/chapter2/concept' },
            { text: '中文原文', link: '/chinese/chapter2/test' },
            { text: '英文原文', link: 'https://www.deeplearningbook.org/' },
        ],
        sidebarDepth:3,
        sidebar: {
            '/note/':[
                {
                    title: '第二章',   // 必要的
                    //path: '/note/second/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/note/chapter2/concept',
                        '/note/chapter2/fNumber',
                    ]
                },
                {
                    title: '第三章',
                    children: [ /* ... */ ],
                    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                }
            ]
        }

    }
}
