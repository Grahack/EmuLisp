fs = require('fs')
EMULISP_CORE = require('./emulisp_core.js');
fs.readFile('emulisp_tests.l', 'utf8', function (err_l, emulisp_tests_src) {
  if (err_l) {
    return console.log(err_l);
  }
  eval('console.log(EMULISP_CORE.eval(emulisp_tests_src));');
});
