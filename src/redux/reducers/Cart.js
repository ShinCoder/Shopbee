const initialState = {
  items: [
    {
      product: {
        id: 1,
        banner:
          'https://down-vn.img.susercontent.com/file/e1f00c1b371328527b522a741ae6c87e_tn',
        unitPrice: 60000,
        name: 'Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH'
      },
      quantity: 2
    },
    {
      product: {
        id: 2,
        banner:
          'https://down-vn.img.susercontent.com/file/2e0c9d5eae545212ae2ecbf97ceaae64_tn',
        unitPrice: 43200,
        name: 'Ốp lưng iphone 6/ 6 PLUS/ 7/ 7 PLUS/ 8/ 8 PLUS HOA VĂN 2022'
      },
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
