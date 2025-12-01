import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  FlatList,
  Dimensions
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const ShoeDetailScreen = ({ route, navigation }) => {
  const { shoe } = route.params;
  const [selectedSize, setSelectedSize] = useState(shoe.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(shoe.colors[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleAddToCart = () => {
    Alert.alert(
      'Berhasil 🎉',
      `${shoe.name} (${selectedColor}, Size ${selectedSize}) telah ditambahkan ke keranjang!`
    );
  };

  const handleBuyNow = () => {
    Alert.alert(
      'Beli Sekarang',
      `Anda akan membeli ${shoe.name} (${selectedColor}, Size ${selectedSize})`
    );
  };

  const renderImageItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.thumbnail,
        selectedImageIndex === index && styles.thumbnailSelected
      ]}
      onPress={() => setSelectedImageIndex(index)}
    >
      <Image 
        source={{ uri: item }} 
        style={styles.thumbnailImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Image */}
        <View style={styles.mainImageContainer}>
          <Image 
            source={{ uri: shoe.images[selectedImageIndex] }} 
            style={styles.mainImage}
            resizeMode="cover"
          />
          {!shoe.inStock && (
            <View style={styles.outOfStockBadge}>
              <Text style={styles.outOfStockBadgeText}>STOK HABIS</Text>
            </View>
          )}
        </View>

        {/* Image Thumbnails */}
        <View style={styles.thumbnailsContainer}>
          <FlatList
            data={shoe.images}
            renderItem={renderImageItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thumbnailsList}
          />
        </View>
        
        <View style={styles.content}>
          <Text style={styles.brand}>{shoe.brand}</Text>
          <Text style={styles.name}>{shoe.name}</Text>
          
          <View style={styles.ratingContainer}>
            <View style={styles.ratingBox}>
              <Text style={styles.rating}>⭐ {shoe.rating}</Text>
              <Text style={styles.reviews}>({shoe.reviews} reviews)</Text>
            </View>
            <Text style={styles.category}>{shoe.category}</Text>
          </View>
          
          <Text style={styles.price}>Rp {shoe.price.toLocaleString()}</Text>
          
          <Text style={styles.description}>{shoe.description}</Text>
          
          {/* Color Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pilih Warna</Text>
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
            <Text style={styles.sectionTitle}>Pilih Ukuran</Text>
            <View style={styles.sizeContainer}>
              {shoe.sizes.map((size, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.sizeOption,
                    selectedSize === size && styles.sizeOptionSelected,
                    !shoe.inStock && styles.sizeOptionDisabled
                  ]}
                  onPress={() => shoe.inStock && setSelectedSize(size)}
                  disabled={!shoe.inStock}
                >
                  <Text style={[
                    styles.sizeText,
                    selectedSize === size && styles.sizeTextSelected,
                    !shoe.inStock && styles.sizeTextDisabled
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
              style={[
                styles.addToCartButton,
                !shoe.inStock && styles.buttonDisabled
              ]}
              onPress={handleAddToCart}
              disabled={!shoe.inStock}
            >
              <Text style={styles.addToCartText}>
                {shoe.inStock ? '➕ Tambah ke Keranjang' : 'Stok Habis'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.buyNowButton,
                !shoe.inStock && styles.buttonDisabled
              ]}
              onPress={handleBuyNow}
              disabled={!shoe.inStock}
            >
              <Text style={styles.buyNowText}>
                {shoe.inStock ? '🛒 Beli Sekarang' : 'Stok Habis'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Helper function untuk warna
const getColorValue = (color) => {
  const colorMap = {
    'Black': '#000000',
    'White': '#FFFFFF',
    'Red': '#FF3B30',
    'Blue': '#007AFF',
    'Gray': '#8E8E93',
    'Navy': '#004080',
    'Green': '#34C759'
  };
  return colorMap[color] || '#CCCCCC';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainImageContainer: {
    position: 'relative',
  },
  mainImage: {
    width: screenWidth,
    height: 350,
  },
  outOfStockBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  outOfStockBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  thumbnailsContainer: {
    paddingVertical: 12,
    backgroundColor: '#f8f9fa',
  },
  thumbnailsList: {
    paddingHorizontal: 16,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  thumbnailSelected: {
    borderColor: '#007AFF',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  content: {
    padding: 20,
  },
  brand: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 12,
    lineHeight: 32,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#FF9500',
    fontWeight: '600',
    marginRight: 4,
  },
  reviews: {
    fontSize: 14,
    color: '#8E8E93',
  },
  category: {
    fontSize: 14,
    color: '#8E8E93',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#48484A',
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1C1C1E',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorOption: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    minWidth: 80,
    alignItems: 'center',
  },
  colorOptionSelected: {
    borderColor: '#007AFF',
    borderWidth: 3,
  },
  colorText: {
    fontSize: 14,
    color: '#1C1C1E',
    fontWeight: '600',
  },
  colorTextSelected: {
    color: '#007AFF',
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeOption: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    marginRight: 12,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  sizeOptionSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  sizeOptionDisabled: {
    backgroundColor: '#F2F2F7',
    borderColor: '#E5E5EA',
  },
  sizeText: {
    fontSize: 16,
    color: '#1C1C1E',
    fontWeight: '600',
  },
  sizeTextSelected: {
    color: '#FFFFFF',
  },
  sizeTextDisabled: {
    color: '#C7C7CC',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 2,
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
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginLeft: 12,
  },
  buyNowText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#C7C7CC',
    borderColor: '#C7C7CC',
  },
});

export default ShoeDetailScreen;