git checkout master
mkdir -p build/demo
cp demo/* build/demo/
git checkout gh-pages
mv build/demo/* .
git add .
git commit -m "auto build"
git checkout master
