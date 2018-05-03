<template>
  <div class="payme">
    <div class="des">说明：如果觉得本站文章质量不错，请随意打赏，本站所有收入用于本站的维护，如有结余将不定期进行抽奖送书活动。</div>
    <div class="unit">
      <div class="label">支付宝</div>
      <img :src="$withBase('/zhifubao.png')">
    </div>
    <div class="unit">
      <div class="label">微信</div>
      <img :src="$withBase('/weixin.png')">
    </div>
  </div>
</template>
<style>
  .payme {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  .payme .unit {
    width: 255px;
    height: 285px;
  }
  .payme .unit .label {
    text-align: center;
    line-height: 50px;
    height: 50px;
  }
  .payme .unit img {
    width: 255px;
    height: 255px;
  }
  .payme .des {
    width: 100%;
    height: 100px;
    line-height: 50px;
  }
</style>

