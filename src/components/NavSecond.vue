<template>
  <div class="csdn-nav-second">
    <div class="nav-com">
      <ul>
        <li class="nav-com-li active">
            <a href="" class="current">推荐</a>
        </li>
        <li class="nav-com-li">
            <a href="">动态</a>
        </li>
        <li class="nav-com-li">
            <a href="">程序人生</a>
        </li>
        <li class="nav-com-li">
            <a href="">Python</a>
        </li>
        <li class="nav-com-li">
            <a href="">Java</a>
        </li>
        <li class="nav-com-li">
            <a href="">百万人学AI</a>
        </li>
        <li class="nav-com-li">
            <a href="">前端</a>
        </li>
        <li class="nav-com-li">
            <a href="">架构</a>
        </li>
        <li class="nav-com-li">
            <a href="">区块链</a>
        </li>
        <li class="nav-com-li">
            <a href="">数据库</a>
        </li>
        <li class="nav-com-li">
            <a href="">5G</a>
        </li>
        <li class="nav-com-li">
            <a href="">游戏开发</a>
        </li>
        <li class="nav-com-li">
            <a href="">移动开发</a>
        </li>
        <li class="nav-com-li">
            <a href="">运维</a>
        </li>
        <li class="nav-com-li">
            <a href="">安全</a>
        </li>
        <li class="nav-com-li">
            <a href="">云计算/大数据</a>
        </li>
        <li class="nav-com-li">
            <a href="">研发管理</a>
        </li>
        <li class="nav-com-li">
            <a href="">物联网</a>
        </li>
        <li class="nav-com-li">
            <a href="">计算机基础</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.csdn-nav-second {
  float: left;
  width: 96px;
  background-color: #fff;
  margin-right: 12px;
  text-align: center;
  line-height: 32px;
}
.csdn-nav-second .nav-com ul .active {
    background-color: #fff;
}
.csdn-nav-second .nav-com ul .active a {
    color: #e33e33;
    font-weight: 700;
}
.csdn-nav-second .nav-com .nav-com-li {
    width: 100%;
    border-radius: 4px;
}
.csdn-nav-second .nav-com .nav-com-li:hover {
    background-color: rgba(227,62,51,.2);
}
.csdn-nav-second .nav-com .nav-com-li a {
    width: 100%;
    height: 32px;
    display: block;
    font-size: 14px;
    color: #555666;
    margin-bottom: 1px;
    /* position:relative;
    z-index: 1; */
}
.csdn-nav-second .nav-com .nav-com-li:hover a{
    color: #e33e33;
    font-weight: 700;
}
</style>