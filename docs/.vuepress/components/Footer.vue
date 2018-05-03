<template>
  <div class="footer">
    MIT Licensed<br>
    Copyright © 2018 <span class="blue">Allen Wong</span><br>
    Powered By <a href="https://vuepress.vuejs.org/">VuePress</a>
    <div class="beian" style="">
      <div class="icp">鄂ICP备15014468号-1</div>
      <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502000302">
        <img :src="$withBase('/police.png')">
        <p>鄂公网安备 42011502000302号</p>
      </a>
      </a>
    </div>
  </div>
</template>
<style>
  .blue {
    font-weight: bold;
  }
  .footer {
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
    line-height: 1.5rem;
  }
  .beian {
    width: 300px;
    margin: 0 auto; 
    padding: 20px 0;
    color: #939393;
  }
  .beian a {
    display: inline-block;
    text-decoration: none;
    height: 20px;
    line-height: 20px;
    color: #939393;
  }
  .beian a img {
    float: left;
  }
  .beian p {
    float: left;
    height: 20px;
    line-height: 20px;
    margin: 0px 0px 0px 5px;
  }
</style>
