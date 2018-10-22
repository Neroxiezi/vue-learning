<template>
    <div class="rating">
        <ul class="list">
            <!-- <li v-for="star  in maxStars"><i class="fa fa-star" aria-hidden="true"></i></li> -->
            <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" class="star">
                <i :class="star <= stars ?'fa fa-star' : 'fa fa-star-o' " aria-hidden="true"></i>
            </li>
        </ul>
        <span v-if="hasCounter">{{ stars }} of {{ maxStars }}</span>
    </div>
</template>
<script>
export default {
  computed: {
    counter() {
      return `${this.stars} of ${this.maxStars}`;
    }
  },
  data() {
    return {
      stars: 3,
      maxStars: 5,
      hasCounter: true
    };
  },
  methods: {
    rate(star) {
      if (typeof star === "number" && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star;
      }
    }
  }
};
</script>
<style>
.rating {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #a7a8a8;
  margin: 0 auto;
  width: 10%;
}
.list {
  display: flex;
  margin: 0 0 5px 0;
  padding: 0;
  list-style-type: none;
}
.list:hover .star {
  color: #f3d23e;
}
.star {
  display: inline-block;
  cursor: pointer;
  margin: 0 1px;
}
.star:hover ~ .star:not(.active) {
  color: inherit;
}
.active {
  color: #f3d23e;
}
</style>