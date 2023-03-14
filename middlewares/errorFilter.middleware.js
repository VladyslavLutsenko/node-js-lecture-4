const errorFilter = (error, req, res, next) => {
  const {status = 500, errorMessage =  "Something went wrong"} = error;
    res.status(status).json({errorMessage});
}

module.exports = errorFilter;
