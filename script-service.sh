touch src/services/$1Service.js

base="import BaseService from './BaseService';"
urls="import { serviceURLs } from '../utils/ServiceURLs';"
class="export class $1Service extends BaseService {"
constructor="constructor() { super(); } }"

echo "$base" >> src/services/$1Service.js; echo
echo "$urls" >> src/services/$1Service.js; echo ""; echo;
echo "$class" >> src/services/$1Service.js; echo ""; echo;
echo "$constructor" >> src/services/$1Service.js


echo Service $1 criado!
