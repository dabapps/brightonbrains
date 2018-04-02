# Brighton Brains

**Bringing together the creative and digital communities of Brighton and Hove and the academic and student communities of local universities and colleges.**

## Contributing

This project is built using [Jekyll](https://jekyllrb.com/) - a static site generator built with [Ruby](https://www.ruby-lang.org/en/) and backed by the [Liquid](http://shopify.github.io/liquid/) template engine.

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

From here there are a couple of npm scripts you can use.

To simply build the project you can run:

```
npm run build
# OR
bundle exec jekyll build
```

To run a dev server which watches files for changes you can run:

```
npm start
# OR
bundle exec jekyll serve
```

To update the dependencies (which should be done reasonably regularly) you can run:

```
npm run update
# OR
bundle update
```
