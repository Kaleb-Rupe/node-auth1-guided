async function protect(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    next({ message: `You shall not pass!` });
  }
}

module.exports = { protect };
