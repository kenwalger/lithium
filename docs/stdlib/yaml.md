# YAML

The `yaml` package allows for easy loading/dumping of YAML files. Since YAML is a lot more flexible than JSON, all Lithium datastructures can be represented in YAML.

### `yaml.load(String text)`

##### Parameters

* `String **text**` - A YAML file as a string.

##### Returns

* `Object` **object**` - The YAML string as a Lithium object.

### `yaml.dump(Object object)`

##### Parameters

* `Object **object**` - Any Lithium object, to be converted to YAML.

##### Returns

* `String **text**` - The Lithium object as a YAML string.
