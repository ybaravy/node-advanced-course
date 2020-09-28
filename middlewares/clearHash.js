const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
	console.log(clearHash);
	await next();
	clearHach(req.user.id);
};