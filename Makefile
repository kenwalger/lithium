nodejs:
	npm install -g

python:
	python setup.py install

ruby:
	gem build lithium.gemspec
	gem install ./lithium-0.0.0.gem