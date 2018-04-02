# Brighton Brains

**Bringing together the creative and digital communities of Brighton and Hove and the academic and student communities of local universities and colleges.**

## Contributing

This project is built using [Jekyll](https://jekyllrb.com/) - a static site generator built with [Ruby](https://www.ruby-lang.org/en/) and backed by the [Liquid](http://shopify.github.io/liquid/) template engine.

### Installation

You will need to install Ruby, which comes with a command line tool called gem for installing Ruby dependencies:

```
brew install ruby
```

We're going to use gem to install [Bundler](http://bundler.io/), which is a command line tool for version controlling dependencies.

```
gem install bundler
```

Bundler is then used to install all dependencies of the project:

```
bundle install
```

### Building and running the project

From here there are a couple of npm scripts you can use.

To run a dev server which watches files for changes you can run:

```
npm start
# OR
bundle exec jekyll serve
```

To simply build the project you can run:

```
npm run build
# OR
bundle exec jekyll build
```

To update the dependencies (which should be done reasonably regularly) you can run:

```
npm run update
# OR
bundle update
```

### Project structure

#### Data

The `_data` directory contains a `listings.json` which is a list of all the meetups / groups; their names, descriptions, links and images (the name of the image file within the images directory).

#### Images

Static assets like images are stored inside an `assets` directory.

Images for each group / meetup should be placed inside `assets/images/groups`.

Images for the site / templates should be placed inside `assets/images/template`.

#### Styles

This project uses SCSS for styles. All styling should be applied with SCSS inside the `_scss` directory.

You should aim to use variables where necessary. Take a look in the `_scss/variables.scss` to see what already exists.

If you are adding a new include / page to the site you should create new scss files for these.
