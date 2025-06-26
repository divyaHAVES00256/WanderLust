//easier version of try catch error hanler
//this wrap function will look for error hanleing MW when erro occurs
function wrapAsync(fun) {
    return function (req, res, next) {
        fun(req, res, next)
          .catch((err) => next(err));
    }
}

module.exports = wrapAsync;    