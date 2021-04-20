import { CategoryType, SongType } from "../types";

const songs: SongType[] = [
    {
        id: '1',
        imageUrl: 'https://www.todorock.com/wp-content/uploads/2019/09/nightwish-oceanborn.jpg',
        title: 'Angels',
        artist: 'Within Temptation',
        uri: 'https://drive.google.com/file/d/12NyeXfC2qPpqH1fVoPWx7pOtDwg9Vghu/view'
    },
    {
        id: '2',
        imageUrl: 'https://rockandblog.net/wp-content/uploads/2020/12/sabaton-new-music.jpg',
        title: 'What you want',
        artist: 'Within Temptation'
    },
    {
        id: '3',
        imageUrl: 'https://www.todorock.com/wp-content/uploads/2019/09/nightwish-oceanborn.jpg',
        title: 'Angels',
        artist: 'Within Temptation'
    },
    {
        id: '4',
        imageUrl: 'https://rockandblog.net/wp-content/uploads/2020/12/sabaton-new-music.jpg',
        title: 'What you want',
        artist: 'Within Temptation'
    },
    {
        id: '5',
        imageUrl: 'https://www.todorock.com/wp-content/uploads/2019/09/nightwish-oceanborn.jpg',
        title: 'Angels',
        artist: 'Within Temptation'
    },
    {
        id: '6',
        imageUrl: 'https://rockandblog.net/wp-content/uploads/2020/12/sabaton-new-music.jpg',
        title: 'What you want',
        artist: 'Within Temptation'
    }
]

export const data: CategoryType[] = [
    {
        title: 'Recently Played',
        albums: [
            {
                id: '1',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71f7Fo%2B5nPL._SL1500_.jpg',
                artistsHeaderline: 'Within Temptation',
                title: 'Unforgiven',
                songs

            },
            {
                id: '2',
                imageUrl: 'https://2.bp.blogspot.com/-N3Bid6Fzn9o/V7oTaqFQgpI/AAAAAAAABKI/IzVWFsXA_HUtoN-cyOWmqEHQBtSxj8tFACLcB/s1600/mother-earth-album-cover.jpg',
                artistsHeaderline: 'Within Temptation',
                title: 'Mother Earth',
                songs

            }
        ],
        recentlyPlayed: true
    },
    {
        title: 'Albums',
        albums: [
            {
                id: '6',
                imageUrl: 'http://2.bp.blogspot.com/-toKeiscawoo/UItJS2pdZLI/AAAAAAAAArU/hVR9FVeQIm8/s1600/kamelot-silverthorn1.jpg',
                artistsHeaderline: 'Kamelot',
                title: 'Silverthorn',
                songs

            },
            {
                id: '7',
                imageUrl: 'https://www.todorock.com/wp-content/uploads/2019/09/nightwish-oceanborn.jpg',
                artistsHeaderline: 'Nightwish',
                title: 'OceanBorn',
                songs

            },
            {
                id: '8',
                imageUrl: 'https://rockandblog.net/wp-content/uploads/2020/12/sabaton-new-music.jpg',
                artistsHeaderline: 'Sabbaton',
                title: 'Great War',
                songs

            },
            {
                id: '9',
                imageUrl: 'https://www.tonica.la/__export/1587255025106/sites/debate/img/2020/04/18/evanescence_anuncia-nuevo-album-the-bitter-truth.jpg_423682103.jpg',
                artistsHeaderline: 'Evanescence',
                title: 'The Bitter Truth',
                songs

            }
        ],
        recentlyPlayed: false
    }
];