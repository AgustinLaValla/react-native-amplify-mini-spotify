import * as React from 'react';
import { FlatList } from 'react-native';
import AlbumCategory from '../components/AlbumCategory/AlbumCategory';
import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategorys } from '../src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api-graphql';

export default function HomeScreen() {

  const [albumCategories, setAlbumCateogies] = React.useState<any[]>([]);

  const getAlbumCategories = async () => {
    const resp = await API.graphql(graphqlOperation(listAlbumCategorys)) as GraphQLResult<any>
    setAlbumCateogies(resp.data.listAlbumCategorys.items);
  }

  React.useEffect(() => {
    getAlbumCategories();
  }, [])

  return (

    <FlatList
      data={albumCategories}
      renderItem={({ item }) =>
        <AlbumCategory
          title={item.title}
          albums={item.albums.items}
          recentlyPlayed={item.recentlyPlayed}
        />
      }
    />

  );
}
