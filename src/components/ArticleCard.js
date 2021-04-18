import React from 'react';
import { View, Image, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { STRAPI_BASE_URL } from '../config/constants';

const ArticleCard = ({
  Title,
  Description,
  Slug,
  Thumbnail,
  published_at,
  author,
}) => (
  <View style={tailwind('bg-white rounded-lg mb-5')}>
    <Image
      style={tailwind('w-full h-36 rounded-t-lg')}
      source={{ uri: STRAPI_BASE_URL + Thumbnail.formats.large.url }}
    />
    <View style={tailwind('p-3')}>
      <View style={tailwind('flex flex-row items-center')}>
        <View style={tailwind('w-8 mr-3')}>
          <Image
            style={tailwind('w-8 h-8 rounded-full')}
            source={{
              uri: STRAPI_BASE_URL + author.Image.formats.thumbnail.url,
            }}
          />
        </View>
        <View style={tailwind('flex flex-1 flex-row flex-wrap')}>
          <Text style={tailwind('text-lg font-semibold text-gray-900')}>
            {Title}
          </Text>
          <Text style={tailwind('text-gray-700 w-full')}>
            {new Date(published_at).toDateString()}
          </Text>
        </View>
      </View>
      <Text style={tailwind('mt-3 text-gray-700 text-sm')}>
        {Description}
        ...
      </Text>
    </View>
  </View>
);

export default ArticleCard;
