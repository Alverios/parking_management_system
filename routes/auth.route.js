const router = require('express').Router();

router.get('/login', async (req, res, next)=>{
    res.send('Login Page');
});

router.get('/register', async (req, res, next)=>{
    res.send('Register Page');
});

router.post('/login', async (req, res, next)=>{
    res.send('Login Post');
});

router.post('/register', async (req, res, next)=>{
    res.send('Register Post');
});

router.get('/logout', async (req, res, next) =>{
    res.send('logout');
})

module.exports = router;