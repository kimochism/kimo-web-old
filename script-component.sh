# mkdir src/components/$1
touch src/components/$1.vue

template="<template>"
div="  <div>"
divClose="  </div>"
templateClose="</template>"
script="<script>"
exportDefault="  export default { name: '$1' }"
scriptClose="</script>"
style="<style scoped>"
styleClose="</style>"

echo "$template" >> src/components/$1.vue; echo
echo "$div" >> src/components/$1.vue; echo
echo "$divClose" >> src/components/$1.vue; echo
echo "$templateClose" >> src/components/$1.vue; echo
echo "$script" >> src/components/$1.vue; echo
echo "$exportDefault" >> src/components/$1.vue; echo
echo "$scriptClose" >> src/components/$1.vue; echo
echo "$style" >> src/components/$1.vue; echo
echo "$styleClose" >> src/components/$1.vue; echo

echo Component $1 criado!
