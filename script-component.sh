# mkdir src/views/$1
touch src/views/$1.vue

template="<template>"
div="  <div>"
divClose="  </div>"
templateClose="</template>"
script="<script>"
exportDefault="  export default { name: '$1' }"
scriptClose="</script>"
style="<style scoped>"
styleClose="</style>"

echo "$template" >> src/views/$1.vue; echo
echo "$div" >> src/views/$1.vue; echo
echo "$divClose" >> src/views/$1.vue; echo
echo "$templateClose" >> src/views/$1.vue; echo
echo "$script" >> src/views/$1.vue; echo
echo "$exportDefault" >> src/views/$1.vue; echo
echo "$scriptClose" >> src/views/$1.vue; echo
echo "$style" >> src/views/$1.vue; echo
echo "$styleClose" >> src/views/$1.vue; echo

echo Component $1 criado!
