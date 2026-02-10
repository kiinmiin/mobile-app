import { CategoryBox } from "@/components/CategoryBox";
import { ProductHomeItem } from "@/components/ProductHomeItem";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { colors } from "../../constants/colors";

export default function HomeScreen() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by category if selected
      if (selectedCategoryId !== null && product.category !== selectedCategoryId) {
        return false;
      }
      // Filter by keyword if provided
      if (keyword && !product.title.toLowerCase().includes(keyword.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [selectedCategoryId, keyword]);

  const productWidth = useMemo(() => {
    const screen = Dimensions.get("window").width;
    const horizontalPadding = 16 * 2;
    const gap = 12;
    return (screen - horizontalPadding - gap) / 2;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Find All You Need"
        leftAction="search"
        rightAction="logout"
        enableSearch
        keyword={keyword}
        onKeywordChange={setKeyword}
        onRightPress={() => router.replace("/(auth)/splash")}
      />

      <FlatList
        data={filteredProducts}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductHomeItem item={item} onPress={() => router.push({pathname: "/product/[id]", params: {id: String(item.id)} })}/>}
        ListHeaderComponent={
          <View style={styles.categoriesContainer}>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesContent}
              keyExtractor={(item, index) => String(item.id ?? `popular-${index}`)}
              renderItem={({ item }) => (
                <CategoryBox
                  item={item}
                  selected={(item.id ?? null) === selectedCategoryId}
                  onPress={() => setSelectedCategoryId(item.id ?? null)}
                />
              )}
              scrollEnabled={true}
            />
          </View>
        }
        ListFooterComponent={<View style={{ height: 24 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  categoriesContainer: {
    marginBottom: 12,
  },
  categoriesContent: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 4 },
  row: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 8,
    backgroundColor: colors.background,
  },
});
