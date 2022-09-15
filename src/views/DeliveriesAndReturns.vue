<template>
  <main class="deliveries-returns">
    <h1 class="title-delivery-page">Delivery - What Options Are There?</h1>

    <table id="deliveryTable">
      <thead>
        <tr>
          <th v-for="col in columns" v-on:click="sortTable(col)">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td v-for="col in columns">{{ row[col] }}</td>
        </tr>
      </tbody>
    </table>

    <div class="delivery-information-container">
      <h5 class="general-delivery-title">General Delivery Information:</h5>
      <ul class="general-delivery-information body-medium">
        <li class="delivery-information-li body-medium">
          Delivery times are for in stock products only, including engraved
          products.
        </li>
        <li class="delivery-information-li body-medium">
          All deliveries are tracked and some must be signed for.
        </li>
        <li class="delivery-information-li body-medium">
          Please be aware that UK public holidays will affect your expected
          delivery date. When placing your order the expected delivery date will
          be clearly shown during the checkout process.
        </li>
        <li class="delivery-information-li body-medium">
          Please note we are unable to deliver on Bank Holidays.
        </li>
        <li class="delivery-information-li body-medium">
          Our Signature Gift Packaging can be added at checkout for $3.95.
        </li>
        <li class="delivery-information-li body-medium">
          All of our deliveries are carbon neutral. Find out more.
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "DeliveriesAndReturns",
  data() {
    return {
      rows: [
        {
          "Delivery Option": "Standard",
          Price: "Free",
          Service: "3-5 working days",
          "Order By": "14:00 GMT",
          "Free on orders over": "$150",
        },
        {
          "Delivery Option": "Click & Collect from SHOPPE Boutique",
          Price: "Free",
          Service: "2 working days",
          "Order By": "14:00 GMT",
          "Free on orders over": "$200",
        },
        {
          "Delivery Option": "Next Day Delivery Monday - Friday",
          Price: "$ 7.95",
          Service: "Next working day",
          "Order By": "14:00 GMT",
          "Free on orders over": "$350",
        },
        {
          "Delivery Option": "Click & Collect from DPD Pickup Point",
          Price: "$ 7.95",
          Service: "4-5 working days",
          "Order By": "14:00 GMT",
          "Free on orders over": "$150",
        },
        {
          "Delivery Option": "Nominated Day Monday - Friday",
          Price: "$ 7.95",
          Service: "Guaranteed Delivery Date",
          "Order By": "14:00 GMT",
          "Free on orders over": "$150",
        },
        {
          "Delivery Option": "Nominated Day Weekends",
          Price: "$ 7.95",
          Service: "Guaranteed Delivery Date",
          "Order By": "14:00 GMT",
          "Free on orders over": "$400",
        },
      ],
    };
  },
  methods: {
    sortTable: function sortTable(col) {
      this.rows.sort(function (a, b) {
        if (a[col] > b[col]) {
          return 1;
        } else if (a[col] < b[col]) {
          return -1;
        }
        return 0;
      });
    },
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

.deliveries-returns {
  display: flex;
  flex-direction: column;
  margin: 16px;
}

.title-delivery-page {
  font-weight: 600;
  margin-bottom: 35px;
}

table {
  font-family: "DM Sans Regular", sans-serif;
  font-size: 9px;
  min-width: 300px;
  border-collapse: collapse;
  border: 1px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: $white;
  color: $black;
  cursor: pointer;
  padding: 8px;
  border-bottom: 1px solid $black;
  border-right: 1px solid $black;
  // min-width: 30px;
}
// table th:hover {
//   // background: #717699;
// }
table td {
  text-align: left;
  padding: 8px;
  border-right: 1px solid $black;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: $white;
}

.delivery-information-container {
  display: flex;
  flex-direction: column;
  margin: 60px 0 12px 0;
}

.general-delivery-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 27px;
  margin-bottom: 25px;
}

.general-delivery-information {
  padding: 0;
  margin: 0;
}

.delivery-information-li {
  list-style-type: disc;
  margin-bottom: 10px;
  padding-left: 10px;
  margin-left: 16px;
}
</style>
