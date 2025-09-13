build:
	rm -rf _site
	./ruby.sh sh -c 'JEKYLL_ENV=production jekyll build'
