import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";

export default function PokemonList(props) {
  //console.log(props);
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  }
});
