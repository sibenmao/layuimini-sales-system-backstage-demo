const treemock = [
    {
        title: '销售管理',
        id: '1',
        spread: true,
        field: 'id',
        children: [
            {
                title: '客户管理',
                id: '1-1',
                spread: true,
                children: [
                    {
                        title: '客户列表',
                        id: '1-1-1',
                        checked: true,
                        field: 'id',
                    },
                    {
                        title: '客户分组',
                        id: '1-1-2',
                        field: 'id',
                    },
                ],
            },
            {
                title: '料类管理',
                id: '1-2',
                spread: true,
                children: [
                    {
                        title: '料类列表',
                        id: '1-2-1',
                    },
                    {
                        title: '客户料价',
                        id: '1-2-2',
                    },
                ],
            },
        ],
    },
    {
        title: '采购管理',
        id: '2',
        spread: true,
        children: [
            {
                title: '供应商列表',
                id: '2-1',
            },
            {
                title: '原料列表',
                id: '2-2',
            },
        ],
    },
];
