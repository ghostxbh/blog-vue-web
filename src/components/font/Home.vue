<template>
  <div class="hello">
    <my-header></my-header>
    <section class="container">
      <div class="content-wrap">
        <div class="content">
          <div id="focusslide" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#focusslide" data-slide-to="0" class="active"></li>
              <li data-target="#focusslide" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <a href="#" target="_blank">
                  <img src="../../assets/images/201610181557196870.jpg" class="img-responsive"></a>
              </div>
              <div class="item">
                <a href="#" target="_blank">
                  <img src="../../assets/images/201610241227558789.jpg" class="img-responsive"></a>
              </div>
            </div>
            <a class="left carousel-control" href="#focusslide" role="button" data-slide="prev" rel="nofollow">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">上一个</span>
            </a>
            <a class="right carousel-control" href="#focusslide" role="button" data-slide="next" rel="nofollow">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">下一个</span>
            </a>
          </div>
          <article class="excerpt-minic excerpt-minic-index">
            <h2>
              <span class="red">【推荐】</span>
              <a @click="goContent(recommends.id,$event)" :title="recommends.title">{{recommends.title}}</a>
            </h2>
            <p class="note">{{recommends.introduction}}</p>
          </article>
          <div class="title">
            <h3>最新发布</h3>
          </div>
          <ul>
            <li v-for="(item,key) in contents.list" :key="key">
              <article class="excerpt excerpt-1" style="">
                <a class="focus" :title="item.title" @click="goContent(item.id,$event)">
                  <img class="thumb" :data-original="item.images" :src="item.images"
                       alt="item.title" style="display: inline;">
                </a>
                <header>
                  <a class="cat" href="#" :title="item.typeName">{{item.typeName}}<i></i></a>
                  <h2><a href="#" @click="goContent(item.id,$event)" :title="item.title">{{item.title}}</a>
                  </h2>
                </header>
                <p class="meta">
                  <time class="time"><i class="glyphicon glyphicon-time"></i>{{item.createTime}}</time>
                  <span class="views"><i class="glyphicon glyphicon-eye-open"></i>{{item.readNum}}</span> <a
                  class="comment"><i
                  class="glyphicon glyphicon-comment"></i>{{item.remarkNum}}</a>
                </p>
                <p class="note">{{item.introduction}}</p>
              </article>
            </li>
          </ul>
          <!--<nav class="pagination" style="display: none;">
            <ul>
              <li class="prev-page"></li>
              <li class="active"><span>1</span></li>
              <li><a href="?page=2">2</a></li>
              <li class="next-page"><a href="?page=2">下一页</a></li>
              <li><span>共 2 页</span></li>
            </ul>
          </nav>-->
        </div>
      </div>
      <my-right></my-right>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Footer from "../comment/Footer";
  import Header from "../comment/Header";
  import RightSidebar from "../comment/RightSidebar";

  export default {
    name: 'Home',
    data() {
      return {
        contents: {},
        recommends: {},
      }
    },
    mounted() {
      this.home();
    },
    methods: {
      home() {
        this.$axios.get("/api/font/home").then(res => {
          if (res.status) {
            console.log(res.data);
            let {contents, recommend} = res.data.data;
            this.recommends = recommend;
            this.contents = contents;
          }
        })
      },
      goContent(cid, e) {
        this.$router.push({path: "/content", query: {cid: cid}});
      },
    },
    components: {
      'my-header': Header,
      'my-footer': Footer,
      'my-right': RightSidebar,
    },
  }
</script>

<style scoped>
  .hello {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
