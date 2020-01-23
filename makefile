assets/images/%.svg: assets/images/%.dot
	rm -f $@
	dot -Gimagepath=$(dir $<) -Tsvg $< -o $@

serve:
	bundle exec jekyll serve --host=0.0.0.0 --destination=docs_local

build:
	bundle exec jekyll build
