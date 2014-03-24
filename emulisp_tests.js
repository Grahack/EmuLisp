fs = require('fs')
fs.readFile('emulisp_core.js', 'utf8', function (err_js, emulisp_core_src) {
  if (err_js) {
    return console.log(err);
  }
  eval(emulisp_core_src);
  fs.readFile('emulisp_tests.l', 'utf8', function (err_l, emulisp_tests_src) {
    if (err_l) {
      return console.log(err_l);
    }
    console.log(EMULISP_CORE.eval(emulisp_tests_src));
  });
});
