<template>
    <div class="header">
        <div class="container">
            <div class="bs-docs-header" id="content" tabindex="-1">
                <div class="container">
                    <h1>组件</h1>
                    <p>无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
p {
  margin: 0 0 10px;
}
.header {
  background-color: #6f5499;

  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#563d7c),
    to(#6f5499)
  );
  background-image: -webkit-linear-gradient(top, #563d7c 0, #6f5499 100%);
  background-image: -o-linear-gradient(top, #563d7c 0, #6f5499 100%);
  background-image: linear-gradient(to bottom, #563d7c 0, #6f5499 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);
  background-repeat: repeat-x;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}
.bs-docs-header {
  margin-bottom: 40px;
  margin-top: 40px;
  position: relative;
  padding: 30px 0;
  color: #cdbfe3;
}
.bs-docs-header h1 {
  margin-top: 0;
  color: #fff;
}
.bs-docs-header p {
  margin-bottom: 0;
  font-weight: 300;
  line-height: 1.4;
}
</style>
