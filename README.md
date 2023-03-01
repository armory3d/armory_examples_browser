# [Armory3D Examples Browser](https://armory3d.github.io/armory_examples_browser/)

```sh
# Clone this repository
git clone https://github.com/armory3d/armory_examples_browser.git
cd armory_examples_browser/

# Clone project repositories
git clone https://github.com/armory3d/armory_examples.git
git clone https://github.com/armory3d/armory_templates.git
git clone https://github.com/armory3d/armory_tutorials.git

haxe build-examples.hxml
haxe build-templates.hxml
haxe build-tutorials.hxml

# Build application
haxelib install build.hxml
haxe build.hxml
```
