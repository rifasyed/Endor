const User = require('../models/User');
const UserSession = require('../models/UserSession');

module.exports = (app) => {
  //   app.get('/login', (req, res, next) => {
  //     User.find()
  //       .exec()
  //       .then((user) => res.json(user))
  //       .catch((e) => res.json(e))
  //   })
  //   app.post('/login', function(req, res, next) {
  //     const user = new User()

  //     user.save()
  //       .then(() => res.json(user))
  //       .catch((e) => res.json(e))
  //   })

  /*
  * Sign Up
  */

  app.post('./api/account/signup', (req, res, next) => {
    const { body } = req
    console.log('body', body)
    const {
      fistName,
      lastName,
      password
    } = body
    let {
      email
    } = body

    if (!firstName) {
      return res.send({
        success: false,
        message: 'Error: First name cannot be blank'
      })
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: 'Error: Last name cannot be blank'
      })
    }
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank'
      })
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank'
      })
    }

    console.log('here')

    email = email.toLowerCase()

    // STEPS
    // 1. Verify email isnt taken
    // 2. Save

    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error'
        })
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists'
        })
      }

      // Save new user
      const newUser = new User()

      newUser.email = email
      newUser.firstName = firstName
      newUser.lastName = lastName
      newUser.password = newUser.generateHasH(password)
      newUser.save((err, user) =>) {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server Error'
          })
        }
        return res.send({
          success: true,
          message: 'Sign up successful'
        })
      }
    })
  })

  /*
  * SIGNIN
  */

  app.post('./api/account/signin', (req, res, next) => {
    const { body } = req
    const {
      password
    } = body
    let {
      email
    } = body

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank'
      })
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank'
      })
    }

    email = email.toLowerCase()

    User.find({
      email: email
    }, (err, users) => {
      if (err) {
        console.log(`Err 2: ${err}`)
        return res.send({
          success: false,
          message: 'Error: Server Error'
        })
      }
      if (users.length !== 1) {
        return res.send({
          success: false,
          message: 'Error: Error Invalid'
        })
      }

      const user = user[0]
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        })
      }

      // Otherwise correct user
      const userSession = new UserSession()
      userSession.userID = user._id
      userSession.save((err, doc) => {
        if (err) {
          console.log(err)
          return res.send({
            success: false,
            message: 'Error: Server Error'
          })
        }

        return res.send({
          success: true,
          message: 'Valid sign-in',
          token: doc._id
        })
      })
    })
  })

  /*
  * VERIFY
  */

  app.get('./api/account/verify', (req, res, next) => {
    // Get token
    const { query } = req
    const { token } = query
    // ?token=test

    // Verify token is one of a kind and not deleted

    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        console.log(err)
        return res.send({
          success: false,
          message: 'Error: Server Error'
        })
      }
      if (sessions.length !== 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        })
      } else {
        return res.send({
          success: true,
          message: 'Good'
        })
      }
    })
  })

  /*
  * VERIFY
  */

  app.get('/api/account/logout', (req, res, next) => {
    // Get token
    const { query } = req
    const { token } = query
    // ?token=test

    // Verify token is one of a kind and not deleted

    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: { 
        isDeleted: true }
    }, null, (err, sessions) => {
      if (err) {
        console.log(err)
        return res.send({
          success: false,
          message: 'Error: Server Error'
        })
      }
      return res.send({
        success: true,
        message: 'Good'
      })
    }
    })
  })
}