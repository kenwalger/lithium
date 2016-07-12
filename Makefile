docs:
	lithium document lib/ --out docs/stdlib/
	jekyll build

deliterate:
	cd bin/
	node diliterate.js