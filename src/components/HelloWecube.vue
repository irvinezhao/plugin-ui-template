<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      please check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <p>
      For a guide and recipes on how to develop wecube plugins,<br>
      please check out the
      <a href="https://github.com/WeBankPartners/wecube-platform/blob/dev/wecube-wiki/docs/%E5%89%8D%E7%AB%AF%E6%8F%92%E4%BB%B6%E5%8C%96%E6%94%B9%E9%80%A0%E6%96%B9%E6%A1%88.md" target="_blank" rel="noopener">plugin develop documentation</a>.
    </p>
    <h3>WeCube</h3>
    <ul>
      <li><a href="https://github.com/WeBankPartners/wecube-platform" target="_blank" rel="noopener">WeCube Platform</a></li>
    </ul>
    <h3>WeCube Plugins</h3>
    <ul>
      <li><a href="https://github.com/WeBankPartners/we-cmdb" target="_blank" rel="noopener">WeCMDB</a></li>
      <li><a href="https://github.com/WeBankPartners/wecube-plugins-prometheus" target="_blank" rel="noopener">WeCube Plugin For Monitoring</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWecube',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
