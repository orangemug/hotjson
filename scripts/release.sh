git checkout master
mkdir -p build
cp demo/* build/
git checkout gh-pages
mv build/* .
git add .
git commit -m "auto build"
git checkout master
