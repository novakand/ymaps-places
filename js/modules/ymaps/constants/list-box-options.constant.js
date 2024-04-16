export default function (listBoxItems,reducer) {
    const listBoxoptions =
    {
        data: {
            content: 'Фильтр',
            title: 'Фильтр'
        },
        items: listBoxItems,
        options: {},
        state: {
            expanded: false,
            filters: listBoxItems.reduce(reducer, {})
        }
    }

    return listBoxoptions;
}