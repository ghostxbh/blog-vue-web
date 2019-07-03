<template>
  <div>
    <aside class="sidebar">
      <div class="fixed">
        <div class="widget widget-tabs">
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
              <a href="#contact" aria-controls="contact" role="tab" data-toggle="tab">联系站长</a>
            </li>
            <li role="presentation">
              <a href="#notice" aria-controls="notice" role="tab" data-toggle="tab">统计信息</a>
            </li>
          </ul>
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane contact" id="notice">
              <h2>
                日志总数:888篇
              </h2>
              <h2>
                网站运行:
                <span id="sitetime">88天 </span>
              </h2>
            </div>
            <div role="tabpanel" class="tab-pane contact active" id="contact">
              <h2>QQ:
                <a href="" target="_blank" rel="nofollow" data-toggle="tooltip" data-placement="bottom"
                   title="" data-original-title="QQ:"></a>
              </h2>
              <h2>Email:
                <a href="#" target="_blank" data-toggle="tooltip" rel="nofollow" data-placement="bottom"
                   title="" data-original-title="#"></a></h2>
            </div>
          </div>
        </div>
        <div class="widget widget_search">
          <form class="navbar-form" action="#">
            <div class="input-group">
              <input type="text" name="keyword" class="form-control" size="35" placeholder="请输入关键字"
                     maxlength="15" autocomplete="off" v-model="keyword">
              <span class="input-group-btn">
		            <button class="btn btn-default btn-search" @click="goListByKeyword()" type="submit">搜索</button>
		            </span>
            </div>
          </form>
        </div>
      </div>
      <div class="widget widget_hot" v-if="specials.length">
        <h3>专栏列表</h3>
        <ul>
          <li v-for="(item,key) in specials" :key="key">
            <a :title="item.title" @click="goListBySpecial(item.id)">
                <span class="thumbnail">
				          <img class="thumb" :src="item.images" :alt="item.title" style="display: block;">
			          </span>
              <span class="text">{{item.title}}</span>
              <span class="muted">
                  <i class="glyphicon glyphicon-time"></i>
				          {{item.createTime}}
			          </span>
              <span class="muted">
                  <i class="glyphicon glyphicon-eye-open"></i>
                  {{item.readNum}}
                </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="widget widget_hot" v-if="remarks.length">
        <h3>最新评论文章</h3>
        <ul>
          <li v-for="(item,key) in remarks" :key="key">
            <a :title="item.title" @click="goContent(item.id,$event)">
                <span class="thumbnail">
				          <img class="thumb" :src="item.images" style="display: block;">
			          </span>
              <span class="text">{{item.title}}</span>
              <span class="muted">
                  <i class="glyphicon glyphicon-time"></i>
				          {{item.createTime}}
			          </span>
              <span class="muted">
                  <i class="glyphicon glyphicon-eye-open"></i>
                  {{item.readNum}}
                </span>
            </a>
          </li>
        </ul>
      </div>
      <!--<div class="widget widget_sentence" v-if="labels.length">
        <h3>标签分类</h3>
        <ul class="label-ul">
          <li v-for="(item,key) in labels" :key="key" style="float: left;padding: 0 0 0 5px;">
            <a href="" class="btn btn-default" @click="goListByLabel(item.name)">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="widget widget_sentence">
        <a href="#" target="_blank" rel="nofollow" title="MZ-NetBlog主题">
          <img style="width: 100%" src="../../assets/images/ad.jpg" alt="MZ-NetBlog主题"></a>
      </div>-->
      <div class="widget widget_sentence" v-if="links.length">
        <h3>友情链接</h3>
        <ul>
          <li v-for="(item,key) in links" :key="key">
            <div class="widget-sentence-link">
              <a :href="item.url" target="_blank">{{item.name}}</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
  export default {
    name: "RightSidebar",
    data() {
      return {
        remarks: [],
        labels: [],
        links: [],
        specials: [],
        keyword: '',
      }
    },
    mounted() {
      this.rightSidebar();
    },
    methods: {
      rightSidebar() {
        this.$axios.get("/api/font/home/right").then(res => {
          if (res.status) {
            console.log(res.data.data);
            let {remarks, labels, links, specials} = res.data.data;
            this.remarks = remarks;
            this.labels = labels;
            this.links = links;
            this.specials = specials;
          }
        })
      },
      goContent(cid, e) {
        this.$router.push({path: "/content", query: {cid: cid}});
      },
     /* goListByLabel(label) {
        this.$router.push({path: "/list", query: {labels: label}});
      },*/
      goListBySpecial(specialId) {
        this.$router.push({path: "/list", query: {specialId: specialId}});
      },
      goListByKeyword() {
        let keyword = this.keyword;
        this.$router.push({path: "/list", query: {keyword: keyword}});
      }
    },
  }
</script>

<style scoped>
</style>
