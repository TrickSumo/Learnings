// authHandler is middleware here which checks for query parameter or request cookie for authenticaion
const authHandler = (req, res, next) => {
    console.log(req.cookies)
    if(req.url.includes('secret=true') || (req.cookies && req.cookies.logged_in === 'true')) next();
    else res.sendStatus(401);

}

// export default authHandler ;
module.exports = {authHandler};