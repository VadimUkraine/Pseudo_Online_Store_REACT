const INIT_STATE = {
  goods:
  [
  {
    id: 1,
    name: 'Good 1234',
    descr:'These are pants',
    image: 'img1.png',
    qnt: 10,
    price: 34.20,
  },

  {
    id: 2,
    name: 'Good 72315',
    descr:'These are shoes',
    image: 'img2.png',
    qnt: 5,
    price: 33.20,
  },

  {
    id: 3,
    name: 'Good 72162',
    descr:'These are boots',
    image: 'img3.png',
    qnt: 7,
    price: 35.20,
  },

  {
    id: 4,
    name: 'Goods 45832',
    descr:'This is a skirt',
    image: 'img4.png',
    qnt: 6,
    price: 37.20,
  },
  {
    id: 5,
    name: 'Good 52627',
    descr:'This is a fur coat',
    image: 'img5.png',
    qnt: 4,
    price: 32.20,
  },
  {
    id: 6,
    name: 'Good 47931',
    descr:'This is sneakers',
    image: 'img6.png',
    qnt: 2,
    price: 31.20,
  }
]};

export default function goodsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'DELETE_GOOD':
      return { goods: state.goods.filter(item => item.id !== action.payload)};
    case 'DELETE_ALL_GOODS':
      return { ...state, goods: action.payload};
    case 'ADD_GOOD':
      return {goods: [...state.goods, action.payload]};
    default:
      return state;
  }
}

