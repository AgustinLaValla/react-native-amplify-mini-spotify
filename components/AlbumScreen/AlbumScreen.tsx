import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { AlbumType, SongType } from '../../types'
import AlbumScreenHeader from './AlbumScreenHeader/AlbumScreenHeader'
import SongItem from './SongItem/SongItem'
import { API, graphqlOperation } from 'aws-amplify'
import { getAlbum } from '../../src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api-graphql';

export default function AlbumScreen() {
    const route: RouteProp<{ params: { id: string } }, 'params'> = useRoute();
    const [album, setAlbum] = React.useState<Partial<AlbumType> & {songs: {items: SongType[]}}>();


    React.useEffect(() => {
        const getAlbumById = async () => {
            const resp = await API.graphql(graphqlOperation(getAlbum, { id: route.params.id })) as GraphQLResult<any>
            setAlbum(resp.data.getAlbum);
        }

        getAlbumById();

    }, [])

    return (
        <View>

            <FlatList
                data={album?.songs.items}
                renderItem={({ item }) => <SongItem song={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => <AlbumScreenHeader album={album} />}
            />
        </View>
    )
}
