# Tutorial

We will build a small project to demonstrate the different sections of this workshop. The goal is to have a small running project before we continue with some more details.

To start, just create a new directory:
```
$ mkdir MyLittleProject
$ cd MyLittleProject
```


##NPM initial project

Run
```
$ npm init
```
to start our npm project.

![Alt text](/img/npm-init-01.png?raw=true "npm init")
![Alt text](/img/npm-init-02.png?raw=true "npm init")

One of the settings is the entry point of your package. The entry file is the file that gets loaded when this package is required. As you can see, this file does not get generated.

Run
```
$ npm list
```
to display our dependencies. Of course this is empty.
![Alt text](/img/npm-list.png?raw=true "npm list")

Let's try to get something on the screen.
```
$ vi index.js
```
and add this simple function:
```
module.exports = function(name) {  
  return 'Helleeuwww ' + name;
};
```
(and save by :wq)
This may look a bit weird but this is the way that node tries to require modules.

Run this:
```
$ node
>
```
Try to require our simple app and execute it.
![Alt text](/img/npm-index-js.png?raw=true "running our package")

##A basic web thing

Add a simple html page
```html
<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>Our basic web thing</title>
  <link href="assets/css/styles.css" type="text/css" rel="stylesheet" />
</head>
<body>
  <div class="container">
   <h1>Lorem Ipsum</h1>
  <strong>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
       consectetur, adipisci velit..."
      "There is no one who loves pain itself,
      who seeks after it and wants to have it, simply because it is pain..."
  </strong>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero ex, tempus in ex non, luctus sollicitudin dui. Donec suscipit nibh et nibh feugiat, sit amet vehicula libero laoreet. Aenean faucibus elit maximus metus tempus maximus id at erat. Maecenas est nibh, accumsan vitae porttitor et, egestas vitae dolor. Nullam commodo tortor nec quam rutrum vulputate. Praesent eu purus eget sapien cursus auctor. Pellentesque at lorem nulla. Etiam molestie, elit vitae tempor suscipit, leo turpis pharetra dui, eu malesuada justo enim et est. Integer urna dolor, consequat vel rutrum ut, egestas sit amet turpis. Morbi aliquam nec risus vel luctus. Mauris dignissim condimentum augue, a dictum urna mattis ut. Sed eu enim elementum, porta eros ac, suscipit ex. Nunc scelerisque, elit non dignissim tristique, odio turpis molestie purus, at feugiat turpis sapien in enim. Donec bibendum ipsum sit amet erat dictum eleifend. Fusce sagittis arcu sed sem ornare, et maximus ex laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  </div>
</body>
</html>
```

####Jquery
```
$ npm install jquery --save
```
![Alt text](/img/npm-install-jquery.png?raw=true "Adding jquery")

And add this to the bottom of your index.html

```html
<!-- The jQuery library -->
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script>
   $(function(){

       $('h1').css('color', 'blue');

   });
</script>
```
You'll notice that (after a refresh) your webpage will render and jquery will change the font-color of your h1 to blue.

__NOTE: Do not forget to add your npm install folder to your .gitignore__

##bower

Now let us try to add some bower dependencies.
Run
```
$ bower init
```
to start our bower project.

![Alt text](/img/bower-init-01.png?raw=true "Initializing our bower project")

###Font-awesome

Let's add fontawesome to our webapplication.
```
$ bower install fontawesome --save
```

![Alt text](/img/bower-install-fontawesome.png?raw=true "Installing bower")

Now import the font-awesome library into your index.html by just adding
```html
<link href="bower_components/font-awesome/css/font-awesome.min.css" type="text/css" rel="stylesheet" />
```
in the head.


__NOTE: Do not forget to add your bower install folder to your .gitignore__



##Adding a buildsystem

Everytime we change our html, js and css, we need to reload our page.
As developers, we don't like that.
Let's automate the reloading

###Grunt
```
$ npm install grunt-cli -g
```

```
$ npm install grunt-cli --save-dev
$ npm install grunt --save-dev
```

What do we need to reload are page?
* We need to watch the files for changes (watch)
* Then we need to push the changes to the browser (push/sync)


```
$ npm install grunt-browser-sync --save-dev
```

Create a basic Gruntfile.js

```javascript
module.exports = function (grunt) {
    grunt.initConfig({
    });
};
```

Next step, we add our new plugin into our configuration.
```javascript
grunt.loadNpmTasks('grunt-browser-sync');
```
This will require the installed npm package into our application.
Then we define our task configuration for browserSync (see api)

```
browserSync: {
    dev: {
        bsFiles: {
            src : [
                'assets/css/styles.css',
                '*.html'
            ]
        },
        options: {
            server: './'
        }
    }
}
```
Finally create a task to load the task ;-)
```javascript
grunt.registerTask('sync', ['browserSync']);
````

Go to the command line and run:
```
$ grunt sync
```

BrowserSync should start running and will display some information. It will also
open a tab in your browser and run your app. Coll right?
We can make it even cooollleer.

Change a setting in your css file and save the file. 'Watch' what happens.
Do the same for the index.html file.

![Alt text](/img/browser-sync-01.png?raw=true "You got served!")
