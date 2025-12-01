import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import { categories, shoesData } from '../data/shoesData';

const CategoriesScreen = ({ navigation }) => {
  const getShoesByCategory = (categoryName) => {
    return shoesData.filter(shoe => shoe.category === categoryName);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => {
        const categoryShoes = getShoesByCategory(item.name);
        // Navigate to a category detail screen or show in modal
        alert(`${item.name} - ${item.count} sepatu tersedia`);
      }}
    >
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.shoeCount}>{item.count} Sepatu</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );

  const renderShoeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.shoeCard}
      onPress={() => navigation.navigate('ShoeDetail', { shoe: item })}
    >
      <Text style={styles.shoeName}>{item.name}</Text>
      <Text style={styles.shoeBrand}>{item.brand}</Text>
      <Text style={styles.shoePrice}>Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Kategori Sepatu</Text>
      
      <Text style={styles.sectionTitle}>Kategori</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        style={styles.categoriesList}
        scrollEnabled={false}
      />

      <Text style={styles.sectionTitle}>Semua Sepatu</Text>
      <FlatList
        data={shoesData}
        renderItem={renderShoeItem}
        keyExtractor={item => item.id.toString()}
        style={styles.shoesList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  categoriesList: {
    marginBottom: 16,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  shoeCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  arrow: {
    fontSize: 18,
    color: '#007AFF',
  },
  shoesList: {
    flex: 1,
  },
  shoeCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  shoeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  shoeBrand: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  shoePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 4,
  },
});

export default CategoriesScreen;