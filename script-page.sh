# mkdir src/pages/$1
touch src/pages/$1.vue

template="<template>"
div="  <div>"
divClose="  </div>"
templateClose="</template>"
script="<script>"
exportDefault="  export default { name: '$1' }"
scriptClose="</script>"
style="<style scoped>"
styleClose="</style>"

echo "$template" >> src/pages/$1.vue; echo
echo "$div" >> src/pages/$1.vue; echo
echo "$divClose" >> src/pages/$1.vue; echo
echo "$templateClose" >> src/pages/$1.vue; echo
echo "$script" >> src/pages/$1.vue; echo
echo "$exportDefault" >> src/pages/$1.vue; echo
echo "$scriptClose" >> src/pages/$1.vue; echo
echo "$style" >> src/pages/$1.vue; echo
echo "$styleClose" >> src/pages/$1.vue; echo

echo Component $1 criado!
