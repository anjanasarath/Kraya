const initialState = {
  cart: [],
  categories: [{
    id: 0,
    name: 'Appliances',
  }, {
    id: 1,
    name: 'Home & Furniture',
  }, {
    id: 2,
    name: 'Electronics',
  }],
  stock: [{
      id: 0,
      name: 'LG 22 inch Full HD LED TV',
      description: 'LG 22 inch with 1920 x 1080 Full HD LED TV',
      price: 11999,
      count: 12,
      category: 'Appliances',
      imagePath: 'lgledtv22.jpg'
    }, {
      id: 1,
      name: 'Haier 335 L Frost Free Double Door Refrigerator',
      description: 'Haier 335 L Frost Free Double Door Refrigerator with built in stabilizer',
      price: 24999,
      count: 7,
      category: 'Appliances',
      imagePath: 'haier335fridge.jpg'
    }, {
      id: 2,
      name: 'Spacewood Engineered Wood Queen Bed With Storage',
      description: 'Spacewood Mayflower Engineered Wood Queen Bed With Storage - W x H x D: 156.50 cm x 88 cm x 221 cm',
      price: 14999,
      count: 11,
      category: 'Home & Furniture',
      imagePath: 'spacewoodbed.jpg'
    }, {
      id: 3,
      name: 'Smile2u Retailers Analog Wall Clock',
      description: 'Smile2u Retailers Analog Wall Mounted Clock - Width x Height: 30 cm x 46 cm',
      price: 600,
      count: 13,
      category: 'Home & Furniture',
      imagePath: 'clock.jpg'
    }, {
      id: 4,
      name: 'Lenovo Core i5 7th Gen IP 520 Laptop',
      description: 'Lenovo Core i5 7th Gen IP 520 Laptop with 8 GB DDR4 RAM, 1 TB HDD, 64 bit Windows 10 OS',
      price: 57990,
      count: 16,
      category: 'Electronics',
      imagePath: 'lenovolaptop.jpg'
    }, {
      id: 5,
      name: 'Moto G5S',
      description: 'Moto G5S - Lunar Gray, 32 GB, 4GB RAM',
      price: 14350,
      count: 4,
      category: 'Electronics',
      imagePath: 'motog5s.jpg'
    }, {
      id: 6,
      name: 'Lenovo HW01 Smart Band with Heart Rate Monitor',
      description: 'Lenovo HW01 Smart Band with Dynamic Heart Rate Monitor, Pedometer,Calories & Sleep Monitoring',
      price: 1799,
      count: 18,
      category: 'Electronics',
      imagePath: 'lenovosmartwatch.jpg'
    }],
};

export default initialState;
