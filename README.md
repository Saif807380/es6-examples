# ES6 Examples

## Introduction

This repository contains code samples to demonstrate the features introduced in ECMAScript2015 standard. Each directory contains the example for one feature. You can visit [here](https://saif807380.github.io/es6-examples/) to view the output of the code samples. 

### What is ECMAScript?

ECMAScript is a standard for Javascript that provides guidelines for the language syntax and semantics along with some core APIs. These guidelines are implemented by modern Javascript with varying support across different browsers.

Not all browsers support all the latest ES6 features, therefore we need to make our ES6 code compatible with such browsers, i.e. transpile our ES6 code to ES5 code.

Check out this [link](https://kangax.github.io/compat-table/es6/) to see the current state of support provided by today's browsers for ES6 features.

### Who does the transpiling?

A source-to-source compiler, transcompiler or transpiler is a type of compiler that takes the source code of a program written in one programming language as its input and produces the equivalent source code in another programming language.

The most popular ES6 transpiler is [Babel](https://babel.dev). Babel provides presets, plugins and polyfills, which we can directly use and include in our build processes for converting our ES6 code to browser compatible scripts. During transpilation, it also performs certain production optimizations. Transpiler is also required for converting Typescript and Coffeescript to Javascript.

In this project, we use babel to transpile all `.js` files in the `src` directory and build a single `app.bundle.js` file using `webpack`.

### So what is Webpack?

[Webpack](https://webpack.js.org) is a static module bundler. It keeps track of all the dependencies and modules of our project and bundles them into static assets that can be served directly.

In this project, we use `babel-loader` with `webpack` to transpile our code first before bundling it. On running `webpack`, it first transpiles our code, creates a dependency graph, bundles these dependencies in the right order and finally outputs a single `app.bundle.js` file containing all our Javascript code. Additionally, we have also added a plugin for generating an `index.html` file that includes the generated bundle file as a `script` tag.

## ES6 features whose examples are covered so far

- `let` and `const` keywords
- Functions with default parameters
- Spread Operator
- Template Strings
- Object literal enhancements
- Newly added String methods
- Sets
- Generators
- Arrow Functions
- ES6 modules, `import` and `export` keywords

## Contributing

Feel free to drop PR adding new examples and covering other ES6 features. For UI improvements and suggestions, start a discussion by opening an issue for the same.

## References

- https://github.com/lukehoban/es6features
- [ES6 Playlist by The Net Ninja](https://youtube.com/playlist?list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml)
- http://es6-features.org/