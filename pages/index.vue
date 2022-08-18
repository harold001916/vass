<template>
  <div>
    <v-row justify="center" align="center">
      <Banner />
    </v-row>
    <v-row justify="center">
      <v-col dense cols="12" md="4">
        <v-row dense justify="center" align="center">
          <v-col dense>
            <v-btn
              elevation="0"
              :color="action == 'all' ? 'primary' : ''"
              :text="action != 'all'"
              block
              class="text-capitalize rounded-sm"
              @click="ChangedAction('all')"
            >
              All
            </v-btn>
          </v-col>
          <v-col dense>
            <v-btn
              elevation="0"
              :color="action == 'pair' ? 'primary' : ''"
              :text="action != 'pair'"
              block
              class="text-capitalize rounded-sm"
              @click="ChangedAction('pair')"
            >
              pair
            </v-btn>
          </v-col>
          <v-col dense>
            <v-btn
              elevation="0"
              :color="action == 'odd' ? 'primary' : ''"
              :text="action != 'odd'"
              block
              class="text-capitalize rounded-sm"
              @click="ChangedAction('odd')"
            >
              odd
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense justify="center" align="center"  >
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="item in images" :key="item.id">
            <v-img :src="item.url"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense justify="center" align="center">
      <v-col cols="12" md="2">
        <v-btn elevation="0" block class="text-capitalize rounded-sm" color="primary"> show me more</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import { mapGetters } from "vuex";
export default {
  components: { Banner },
  name: "IndexPage",
  data() {
    return {
      action: "all",
      images: [],
    };
  },
  async created() {
    await this.$store.dispatch("GetImages");
    this.images = this.ListImagesFilterType(null);
  },
  methods: {
    ChangedAction(type) {
      switch (type) {
        case "pair":
          this.images = this.ListImagesFilterType(2);
          this.action = "pair";
          break;
        case "odd":
          this.images = this.ListImagesFilterType(1);
          this.action = "odd";
          break;
        default:
          this.images = this.ListImagesFilterType(null);
          this.action = "all";
          break;
      }
    },
  },
  computed: {
    ...mapGetters(["ListImagesFilterType"]),
  },
};
</script>
<style scoped>
.grid-gallery {
  display: grid;
  grid-auto-rows: 200px;
  gap: 1rem;
  grid-auto-flow: row dense;
}
@media all and (min-width: 320px) {
  .grid-gallery {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media all and (min-width: 768px) {
  .grid-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media all and (min-width: 1024px) {
  .grid-gallery {
    grid-template-columns: repeat(6, 1fr);
  }
}

.grid-gallery__item:nth-child(11n + 1) {
  grid-column: span 1;
}

.grid-gallery__item:nth-child(11n + 4) {
  grid-column: span 2;
  grid-row: span 1;
}

.grid-gallery__item:nth-child(11n + 6) {
  grid-column: span 3;
  grid-row: span 1;
}

.grid-gallery__item:nth-child(11n + 7) {
  grid-column: span 1;
  grid-row: span 2;
}

.grid-gallery__item:nth-child(11n + 8) {
  grid-column: span 2;
  grid-row: span 2;
}

.grid-gallery__item:nth-child(11n + 9) {
  grid-row: span 3;
}

.grid-gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
