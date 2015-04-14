[![JS.ORG](https://img.shields.io/badge/js.org-emulisp-ffb400.svg?style=flat-square)](http://js.org)

EmuLisp
=======

Javascript partial implementation of [PicoLisp](http://picolisp.com/)

[![Build Status](https://travis-ci.org/Grahack/EmuLisp.svg?branch=master)](https://travis-ci.org/Grahack/EmuLisp)

* [Home page](http://folk.uio.no/jkleiser/pico/emuLisp/)
* [Github pages](http://grahack.github.io/EmuLisp/)
* [Github repo](https://github.com/Grahack/EmuLisp)

# Maintainer's note

Please note:

* I'm not the original author.
* The original author is OK with this repo.
* When he has time, things will evolve.

# Author's note

EmuLisp is a [PicoLisp](http://picolisp.com/) emulator, written in JavaScript.
However, in this early version it only covers a tiny subset of PicoLisp.
My main motivation for writing this emulator, was that I wanted to learn the PicoLisp basics better.

## Version 2

My first version of EmuLisp paid no attention to namespace pollution; there was a very big
number of globally declared functions and variables. To make EmuLisp easier to use with
JavaScript code from other projects, it has now been re-organized into modules.

## The modules

EmuLisp currently consists of three modules:

* `emulisp_core.js` - the basics
* `emulisp_js.js` - operations on JavaScript functions and objects
* `emulisp_cv.js` - Canvas functions

For a simple example on how to use these modules, take a look at the `emulisp_console.html`.  
The functions exported by `emulisp_core.js` are the ones needed in `emulisp_js.js` and
`emulisp_cv.js` and a few more...

## Switching between EmuLisp contexts

Here is an example of how you can work with different contexts, or states, if you should ever have
the need to do so. For simplicity, just use the emulisp-console.html which already has the
`EMULISP_CORE` variable ready (from `emulisp_core.js`), and do the following in your browser's console:  

    EMULISP_CORE.eval("(setq L (range 1 5))");
    // -> "(1 2 3 4 5)"
    s1 = EMULISP_CORE.currentState();
    // -> Object
    EMULISP_CORE.init();
    // -> undefined
    EMULISP_CORE.eval("(setq L (range 6 9))");
    // -> "(6 7 8 9)"
    s2 = EMULISP_CORE.currentState();
    // -> Object
    EMULISP_CORE.init(s1);
    // -> undefined
    EMULISP_CORE.eval("L");
    // -> "(1 2 3 4 5)"

## Some implementation details

### Numbers

The `Number` data type is simply the JavaScript `Number`, which includes floating point numbers.
The `/` function thus does floating point division. However, a `/t` function is
provided in case you need the division(s) to be truncated. The constants _π_ and _e_
are available as `js:PI` and `js:E`.

### Function definitions

When you define your own functions, you may currently only use these patterns:

* `(de foo (X Y ...) <prog>)`, i.e. all arguments evaluated
* `(de foo @ <prog>)`, i.e. a variable number of evaluated arguments
* `(de foo X <prog>)`, i.e. a variable number of unevaluated arguments

### Circular lists

Circular lists may be entered using the `(a b c .)` notation, and they may also be
printed that way. It is, however, not difficult to include such circular lists into other
structures so that the simple "circular detector" fails to detect. You may know the result.
As long as you stick to "safe circular lists", they shall cause no problem as argument in the
`length` function.

Have fun!
