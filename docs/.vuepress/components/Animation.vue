<template>
  <div class="anim">
    <img :src="$withBase('./beans-logo-ico.png')">
    <div class="shadow"></div>
  </div>
</template>
<style>
  .anim {
    margin-bottom: 5rem;
    position: relative;
    text-align: center;
    height: 12.5rem;
  }
  .anim img {
    width: 9rem;
    height: 9rem;
    animation: animIcon 1.5s linear infinite alternate;
    margin: auto;
  }
  .anim .shadow {
    animation: animShadow 1.5s linear infinite alternate;
    position: absolute;
    top: 10.625rem;
    left: calc(50% - 3.125rem);
    height: 1.25rem;
    width: 6.25rem;
    background-color: #777;
    border-radius: 50%;
    opacity: .5;
  }
  @keyframes animIcon {
    0%   {
      margin-top: 0;
    }
    100% {
      margin-top: 1.25rem;
    }
  }
  @keyframes animShadow {
    0%   {
      opacity: .4;
    }
    100% {
      opacity: .8;
    }
  }
</style>
