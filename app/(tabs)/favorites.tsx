import { useRouter } from "expo-router";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { FavoriteItem } from "../../components/FavoriteItem";
import { Header } from "../../components/Header";
import { colors } from "../../constants/colors";
import type { Product } from "../../data/products";
import { products } from "../../data/products";

export default function FavoritesScreen() {
  // mock: võtame esimesed 3 toodet "lemmikuteks"
  const favorites: Product[] = products.slice(0, 3);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Favorites"
        leftAction="back" onLeftPress={() => router.back()}
      />
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FavoriteItem item={item} onRemove={() => console.log("remove", item.id)} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 16, paddingVertical: 12 },
  separator: { height: 1, backgroundColor: colors.border, marginVertical: 10 },
});