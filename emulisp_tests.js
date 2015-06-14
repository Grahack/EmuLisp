fs = require('fs')
fs.readFile('emulisp_core.js', 'utf8', function (err_js, emulisp_core_src) {
  if (err_js) {
    return console.log(err);
  }
  fs.readFile('picolisp.l', 'utf8', function (err_lib, emulisp_lib_src) {
    if (err_lib) {
      return console.log(err_lib);
    }
    fs.readFile('emulisp_tests.l', 'utf8', function (err_tests, emulisp_tests_src) {
      if (err_tests) {
        return console.log(err_tests);
      }
      eval(emulisp_core_src + 'console.log(EMULISP_CORE.eval(emulisp_lib_src+emulisp_tests_src));');
    });
  });
});
