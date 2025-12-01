import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert
} from 'react-native';

const ShoeDetailScreen = ({ route, navigation }) => {
  const { shoe } = route.params;
  const [selectedSize, setSelectedSize] = useState(shoe.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(shoe.colors[0]);

  const handleAddToCart = () => {
    Alert.alert(
      'Berhasil',
      `${shoe.name} (${selectedColor}, Size ${selectedSize}) telah ditambahkan ke keranjang!`
    );
  };

  const handleBuyNow = () => {
    Alert.alert(
      'Beli Sekarang',
      `Anda akan membeli ${shoe.name} (${selectedColor}, Size ${selectedSize})`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <Image source={{ uri: shoe.image }} style={styles.shoeImage} />
      
      <View style={styles.content}>
        <Text style={styles.brand}>{shoe.brand}</Text>
        <Text style={styles.name}>{shoe.name}</Text>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {shoe.rating}</Text>
          <Text style={styles.category}>{shoe.category}</Text>
        </View>
        
        <Text style={styles.price}>Rp {shoe.price.toLocaleString()}</Text>
        
        <Text style={styles.description}>{shoe.description}</Text>
        
        {/* Color Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Warna</Text>
          <View style={styles.colorContainer}>
            {shoe.colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorOption,
                  selectedColor === color && styles.colorOptionSelected,
                  { backgroundColor: getColorValue(color) }
                ]}
                onPress={() => setSelectedColor(color)}
              >
                <Text style={[
                  styles.colorText,
                  selectedColor === color && styles.colorTextSelected
                ]}>
                  {color}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Size Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ukuran</Text>
          <View style={styles.sizeContainer}>
            {shoe.sizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.sizeOption,
                  selectedSize === size && styles.sizeOptionSelected
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextSelected
                ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartText}>Tambah ke Keranjang</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={handleBuyNow}
          >
            <Text style={styles.buyNowText}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Helper function untuk warna
const getColorValue = (color) => {
  const colorMap = {
    'Black': '#000000',
    'White': '#FFFFFF',
    'Red': '#FF0000',
    'Blue': '#0000FF',
    'Gray': '#808080',
    'Navy': '#000080',
    'Green': '#008000'
  };
  return colorMap[color] || '#CCCCCC';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shoeImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  brand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  category: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  colorOptionSelected: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  colorText: {
    fontSize: 14,
    color: '#333',
  },
  colorTextSelected: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeOption: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
    marginBottom: 8,
  },
  sizeOptionSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  sizeText: {
    fontSize: 14,
    color: '#333',
  },
  sizeTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  addToCartText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShoeDetailScreen;