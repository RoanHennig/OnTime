
const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'agenda-component',
                'title': 'Agenda',
                'type' : 'item',
                'icon' : 'check_box',
                'url'  : '/agenda'
            },
            {
                'id'   : 'calendar-component',
                'title': 'Calendar',
                'type' : 'item',
                'icon' : 'event',
                'url'  : '/calendar'
            }
            ,
            {
                'id'   : 'example-component',
                'title': 'Example',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            }
        ]
    }
];

export default navigationConfig;
