git checkout master
mkdir -p build
./node_modules/.bin/browserify -s hotjson . > ./build/hotjson.js
cp demo/* build/
git checkout gh-pages
mv build/* .
git add .
git commit -m "auto build"
git checkout master