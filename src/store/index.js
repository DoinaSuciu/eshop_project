import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import auth from "./modules/auth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shippingCountry: null,
    appliedCoupon: 0,
    cart: [],
    coupons: [
      { name: "HAPPY5", value: 5 },
      { name: "HAPPY10", value: 10 },
      { name: "HAPPY15", value: 15 },
    ],
    categories: [
      { id: 1, name: "earrings" },
      { id: 2, name: "necklaces" },
      { id: 3, name: "rings" },
    ],
    shipping: [
      { country: "Select a Country", cost: 0 },
      {
        id: 90,
        country: "Romania",
        cost: 0,
      },
      {
        id: 91,
        country: "Republic of Moldova",
        cost: 10,
      },
      {
        id: 92,
        country: "United Kingdom",
        cost: 40,
      },
      {
        id: 93,
        country: "Spain",
        cost: 18,
      },
      {
        id: 94,
        country: "Italy",
        cost: 16,
      },
    ],
    products: [
      {
        id: 1,
        category: "earrings",
        name: "Doina Pearl Earrings",
        photo: require(`../assets/products/01/01.jpg`),
        carousel: [
          require(`../assets/products/01/01.jpg`),
          require(`../assets/products/01/01-1.jpg`),
          require(`../assets/products/01/01-2.jpg`),
          require(`../assets/products/01/01-3.jpg`),
        ],
        price: 210,
        description:
          "Our new favourite huggie and our best selling Baroque pearl. Doina collection comes in organic certified cotton pouch to support sustainability via minimal packaging.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 4,
        arrivalDate: "2022/08/01",
        reviews: "",
      },
      {
        id: 2,
        category: "earrings",
        name: "Keshi Pearl Earrings",
        photo: require(`../assets/products/02/02.jpg`),
        carousel: [
          require(`../assets/products/02/02.jpg`),
          require(`../assets/products/02/02-1.jpg`),
          require(`../assets/products/02/02-2.jpg`),
          require(`../assets/products/02/02-3.jpg`),
        ],
        price: 140,
        description:
          "Sustainably celebrating all forms of beauty, in collaboration with Mother of Pearl. These earring charms are adorned with a striking keshi pearl, ready to drape from your huggies or hoops. Naturally nuanced by the ocean, every pair is unique, with its own delicately faceted finish.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 5,
        arrivalDate: "2022/07/28",
        reviews: "",
      },
      {
        id: 3,
        category: "earrings",
        name: "Siren Wire Earrings",
        photo: require(`../assets/products/03/03.jpg`),
        carousel: [
          require(`../assets/products/03/03.jpg`),
          require(`../assets/products/03/03-1.jpg`),
          require(`../assets/products/03/03-2.jpg`),
          require(`../assets/products/03/03-3.jpg`),
        ],
        price: 125,
        description:
          "The Duchess of Cambridge's favourite hand cut gemstone earrings. Simple, elegant but standout. So, expect all of the compliments when wearing. As easy for everyday as an evening statement earring, and looks incredible in a stack.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 6,
        arrivalDate: "2022/07/04",
        reviews: "",
      },
      {
        id: 4,
        category: "earrings",
        name: "Nura Huggie Earrings",
        photo: require(`../assets/products/04/04.jpg`),
        carousel: [
          require(`../assets/products/04/04.jpg`),
          require(`../assets/products/04/04-1.jpg`),
          require(`../assets/products/04/04-2.jpg`),
          require(`../assets/products/04/04-3.jpg`),
        ],
        price: 95,
        description:
          "Small pearls, big statement. Nura Keshi Pearl Huggies are the latest addition to our pearl range. With an organic shape and lustrous, light-reflecting finish, every one is a unique work of art. Wear solo or pair with the Nura Tiny Keshi Pearl Necklace.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/03/04",
        reviews: "",
      },
      {
        id: 5,
        category: "earrings",
        name: "Gemstone Earrings",
        photo: require(`../assets/products/05/05.jpg`),
        carousel: [
          require(`../assets/products/05/05.jpg`),
          require(`../assets/products/05/05-1.jpg`),
          require(`../assets/products/05/05-2.jpg`),
          require(`../assets/products/05/05-3.jpg`),
        ],
        price: 110,
        description:
          "A sleek, subtly textured huggie, designed to gently hug your lobe. Add flashes of colour with our playful Teardrop Ear Charms, and style up our Siren Muse Mini Huggies with climbers, cuffs and studs. Siren Muse Mini Huggies Suitable for: helix, upper + lower lobe Earring height 9mm, width 1.8mm Hoop internal diameter 7mm Teardrop Ear Charm Pendant height 8.1mm, width 4mm Pendant thickness 1.3mm stone height 5mm, stone width 4mm",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 4,
        arrivalDate: "2022/01/04",
        reviews: "",
      },
      {
        id: 6,
        category: "earrings",
        name: "Nura Pearl Earrings",
        photo: require(`../assets/products/06/06.jpg`),
        carousel: [
          require(`../assets/products/06/06.jpg`),
          require(`../assets/products/06/06-1.jpg`),
          require(`../assets/products/06/06-2.jpg`),
          require(`../assets/products/06/06-3.jpg`),
        ],
        price: 125,
        description:
          "Keshi pearls have no nucleus, which is what gives them their incredible all-over mother-of-pearl lustre. Wear with the Nura keshi pearl necklace for a complete modern pearl look.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/06/01",
        reviews: "",
      },
      {
        id: 7,
        category: "necklaces",
        name: "Deia Pebble Rope",
        photo: require(`../assets/necklaces/01/01.jpg`),
        carousel: [
          require(`../assets/necklaces/01/01.jpg`),
          require(`../assets/necklaces/01/01-1.jpg`),
          require(`../assets/necklaces/01/01-2.jpg`),
          require(`../assets/necklaces/01/01-3.jpg`),
        ],
        price: 345,
        description:
          "Inspired by ancient wisdom and nature's organic beauty, our Deia collection is gently faceted to reflect the light. Engrave this pebble-shaped locket inside and out, and place a special keepsake inside to ensure it's always close to your heart.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 2,
        arrivalDate: "2022/06/07",
        reviews: "",
      },
      {
        id: 8,
        category: "necklaces",
        name: "Fine Oval Box Chain",
        photo: require(`../assets/necklaces/02/02.jpg`),
        carousel: [
          require(`../assets/necklaces/02/02.jpg`),
          require(`../assets/necklaces/02/02-1.jpg`),
          require(`../assets/necklaces/02/02-2.jpg`),
          require(`../assets/necklaces/02/02-3.jpg`),
        ],
        price: 135,
        description:
          "One of our best selling gemstones (and it's not hard to see why) so expect all the compliments when you're wearing. Add to our Fine Oval Box Chain for simple layering. Total necklace circumference adjustable up to 46cm Chain width 1.1mm Pendant length 1.3cm, width 1.2cm",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 2,
        arrivalDate: "2022/06/07",
        reviews: "",
      },
      {
        id: 9,
        category: "necklaces",
        name: "Corda Diamond",
        photo: require(`../assets/necklaces/03/03.jpg`),
        carousel: [
          require(`../assets/necklaces/03/03.jpg`),
          require(`../assets/necklaces/03/03-1.jpg`),
          require(`../assets/necklaces/03/03-2.jpg`),
          require(`../assets/necklaces/03/03-3.jpg`),
        ],
        price: 350,
        description:
          "Get roped in with the Corda Diamond Locket. Recycled gold vermeil is crafted into a roped finish, and wrapped around a handcut diamond center. Engrave both interior surfaces, or slip a special photo inside to ensure its always close to your heart.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/08/07",
        reviews: "",
      },
      {
        id: 10,
        category: "necklaces",
        name: "Keshi Pearl Necklace",
        photo: require(`../assets/necklaces/04/04.jpg`),
        carousel: [
          require(`../assets/necklaces/04/04.jpg`),
          require(`../assets/necklaces/04/04-1.jpg`),
          require(`../assets/necklaces/04/04-2.jpg`),
          require(`../assets/necklaces/04/04-3.jpg`),
        ],
        price: 275,
        description:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 1,
        arrivalDate: "2022/08/20",
        reviews: "",
      },
      {
        id: 11,
        category: "necklaces",
        name: "Keshi Pearl Charm",
        photo: require(`../assets/necklaces/05/05.jpg`),
        carousel: [
          require(`../assets/necklaces/05/05.jpg`),
          require(`../assets/necklaces/05/05-1.jpg`),
          require(`../assets/necklaces/05/05-2.jpg`),
          require(`../assets/necklaces/05/05-3.jpg`),
        ],
        price: 160,
        description:
          "Sustainably celebrating all forms of beauty, in collaboration with Mother of Pearl. An everyday staple, with a sliding adjuster to fit you perfectly. Enhanced with a striking Keshi Pearl, ready to add to your necklace stack.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/07/22",
        reviews: "",
      },
      {
        id: 12,
        category: "necklaces",
        name: "Baroque Pearl Infinity",
        photo: require(`../assets/necklaces/06/06.jpg`),
        carousel: [
          require(`../assets/necklaces/06/06.jpg`),
          require(`../assets/necklaces/06/06-1.jpg`),
          require(`../assets/necklaces/06/06-2.jpg`),
          require(`../assets/necklaces/06/06-3.jpg`),
        ],
        price: 620,
        description:
          "Inspired by industrial shapes, this handcrafted chain features a bespoke, adjustable infinity-shaped link and lightly hammered finish. Bold enough to wear alone or layer with your favourite chains and pendants (we're loving the classic Baroque Pearl). The possibilities are infinite.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/04/30",
        reviews: "",
      },
      {
        id: 13,
        category: "rings",
        name: "Doina Cross Ring",
        photo: require(`../assets/rings/01/01.jpg`),
        carousel: [
          require(`../assets/rings/01/01.jpg`),
          require(`../assets/rings/01/01-1.jpg`),
          require(`../assets/rings/01/01-2.jpg`),
          require(`../assets/rings/01/01-3.jpg`),
        ],
        price: 125,
        description:
          "The ultimate statement ring. This makes everyday bold gold easy to achieve. Wear alone or stack two for real impact.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/08/30",
        reviews: "",
      },
      {
        id: 14,
        category: "rings",
        name: "Siren Stacking Ring",
        photo: require(`../assets/rings/02/02.jpg`),
        carousel: [
          require(`../assets/rings/02/02.jpg`),
          require(`../assets/rings/02/02-1.jpg`),
          require(`../assets/rings/02/02-2.jpg`),
          require(`../assets/rings/02/02-3.jpg`),
        ],
        price: 80,
        description:
          "One of our best selling gemstones (and it isn't hard to see why). Hand cut gemstones mean this ring is slightly different each time, but gorgeous 100 percent of the time. Wear alone or add to your ring stack.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/07/21",
        reviews: "",
      },
      {
        id: 15,
        category: "rings",
        name: "Corda Skinny Ring",
        photo: require(`../assets/rings/03/03.jpg`),
        carousel: [
          require(`../assets/rings/03/03.jpg`),
          require(`../assets/rings/03/03-1.jpg`),
          require(`../assets/rings/03/03-2.jpg`),
          require(`../assets/rings/03/03-3.jpg`),
        ],
        price: 50,
        description:
          "A skinny gold ring in a rope-inspired textured finish. Slip it amongst your ring stack or wear on your thumb. Made in Italy.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 4,
        arrivalDate: "2022/07/19",
        reviews: "",
      },
      {
        id: 16,
        category: "rings",
        name: "Diamond Ring",
        photo: require(`../assets/rings/04/04.jpg`),
        carousel: [
          require(`../assets/rings/04/04.jpg`),
          require(`../assets/rings/04/04-1.jpg`),
          require(`../assets/rings/04/04-2.jpg`),
          require(`../assets/rings/04/04-3.jpg`),
        ],
        price: 150,
        description:
          "Set with an ethically sourced, hand cut solitaire diamond, this ring is part of our everyday diamond essentials collection. Enhance any look with this precious touch of luxury.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 2,
        arrivalDate: "2022/08/30",
        reviews: "",
      },
      {
        id: 17,
        category: "rings",
        name: "Petal Ring",
        photo: require(`../assets/rings/05/05.jpg`),
        carousel: [
          require(`../assets/rings/05/05.jpg`),
          require(`../assets/rings/05/05-1.jpg`),
          require(`../assets/rings/05/05-2.jpg`),
          require(`../assets/rings/05/05-3.jpg`),
        ],
        price: 100,
        description:
          "Set with hand-cut, natural moonstone, add a flash of iridescent beauty to your ring stack with our Petal Ring.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 5,
        arrivalDate: "2022/07/31",
        reviews: "",
      },
      {
        id: 18,
        category: "rings",
        name: "Siren Stacking Ring",
        photo: require(`../assets/rings/06/06.jpg`),
        carousel: [
          require(`../assets/rings/06/06.jpg`),
          require(`../assets/rings/06/06-1.jpg`),
          require(`../assets/rings/06/06-2.jpg`),
          require(`../assets/rings/06/06-3.jpg`),
        ],
        price: 80,
        description:
          "The 'It' stone of the season. Stack this lapis lazuli ring with your favourite bold gold styles.",
        aboutProducts:
          "That means instantly wearable, everyday pieces that will last you a lifetime. All of our pieces are handcrafted from sustainably-sourced materials. Style it your way and bring joy to your everyday. Go ahead, treat yourself. We all know you deserve it.",
        pieces: 3,
        arrivalDate: "2022/07/07",
        reviews: "",
      },
    ],
  },
  getters: {},
  mutations: {
    INCREMENT_PRODUCT_COUNT(state, id) {
      console.log(`INCREMENT: ${JSON.stringify(this.state.cart, null, 3)}`);
      //find the index of the product (with the above index) in products
      console.log(`ID: ${id}`);
      const index = state.cart.findIndex((product) => product.id === id);
      console.log(JSON.stringify(state.cart[index], null, 3));
      state.cart[index].count += 1;
      // const productUpdated = { ...state.cart[index], count };
      // Vue.set(state.products, index, productUpdated);
    },
    DECREMENT_PRODUCT_COUNT(state, id) {
      console.log(`DECREMENT: ${JSON.stringify(this.state.cart, null, 3)}`);
      //find the index of the product (with the above index) in products
      console.log(`ID: ${id}`);
      const index = state.cart.findIndex((product) => product.id === id);
      console.log(JSON.stringify(state.cart[index], null, 3));
      if (state.cart[index].count > 0) {
        state.cart[index].count -= 1;
      }
      // const productUpdated = { ...state.cart[index], count };
      // Vue.set(state.cart, index, productUpdated);
    },
    ADD_TO_CART(state, id) {
      const index = state.products.findIndex((product) => product.id === id);
      const product = { ...state.products[index], count: 1 };
      console.log(JSON.stringify(product, null, 3));
      state.cart.push(product);
      Vue.set(state.cart);
      console.log(`ADD_TO_CART: ${JSON.stringify(this.state.cart, null, 3)}`);
    },
    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter((product) => product.id !== id);
    },
    SET_SHIPPING_COUNTRY(state, country) {
      state.shippingCountry = country;
    },
    SET_COUPON(state, couponValue) {
      state.appliedCoupon = couponValue;
    },
  },
  actions: {
    addToCart(context, productId) {
      console.log(`addToCart: ${context.state.cart}`);
      const index = context.state.cart.findIndex(
        (product) => product.id === productId
      );

      if (index >= 0) {
        context.commit("INCREMENT_PRODUCT_COUNT", productId);
      } else {
        context.commit("ADD_TO_CART", productId);
      }
    },
  },
  modules: {
    auth,
  },
});
