import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar
} from 'react-native';
import { brands, shoesData } from '../data/shoesData';

const BrandScreen = ({ navigation }) => {
  const getShoesByBrand = (brandName) => {
    return shoesData.filter(shoe => shoe.brand === brandName);
  };

  const renderBrandItem = ({ item }) => {
    const brandShoes = getShoesByBrand(item.name);
    
    return (
      <TouchableOpacity
        style={styles.brandCard}
        onPress={() => {
          // Show brand products or navigate to brand detail
          alert(`Produk ${item.name} - ${item.count} model tersedia`);
        }}
      >
        <View style={styles.brandHeader}>
          <Text style={styles.brandName}>{item.name}</Text>
          <Text style={styles.shoeCount}>{item.count} Model</Text>
        </View>
        <FlatList
          data={brandShoes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: shoe }) => (
            <TouchableOpacity
              style={styles.shoeItem}
              onPress={() => navigation.navigate('ShoeDetail', { shoe })}
            >
              <Image source={{ uri: shoe.image }} style={styles.shoeImage} />
              <Text style={styles.shoeName} numberOfLines={1}>{shoe.name}</Text>
              <Text style={styles.shoePrice}>Rp {shoe.price.toLocaleString()}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={shoe => shoe.id.toString()}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Merek Sepatu</Text>
      <FlatList
        data={brands}
        renderItem={renderBrandItem}
        keyExtractor={item => item.id.toString()}
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
  brandCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  brandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  shoeCount: {
    fontSize: 14,
    color: '#666',
  },
  shoeItem: {
    marginRight: 12,
    width: 120,
  },
  shoeImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  shoeName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  shoePrice: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default BrandScreen;