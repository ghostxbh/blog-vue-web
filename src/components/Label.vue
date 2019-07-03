<template>
  <div>
    <my-header></my-header>
    <section class="container">
      <div class="content-wrap">
        <div class="content">
          <div class="title">
            <h3 style="line-height: 1.3">标签分类</h3>
          </div>
          <ul>
            <li v-for="(item,key) in labels" :key="key" style="float: left;padding: 0 0 0 5px;">
              <a href="" class="btn btn-default" @click="goListByLabel(item.name)">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Footer from "./comment/Footer";
  import Header from "./comment/Header";

  export default {
    name: "Label",
    data() {
      return {
        labels: [],
        labelCount: 0,
      }
    },
    mounted() {
      this.label();
    },
    methods: {
      label() {
        this.$axios.get("/api/font/label/all").then(res => {
          if (res.status) {
            console.log(res.data.data);
            let labels = res.data.data;
            this.labels = labels;
            this.labelCount = labels.length;
          }
        })
      }
    },
    components: {
      'my-header': Header,
      'my-footer': Footer,
    },
  }
</script>

<style scoped>

</style>
