/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PersonController from '#controllers/people_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/people', [PersonController, 'index'])
router.get('/people/:id', [PersonController, 'searchId'])
router.post('/people', [PersonController, 'create'])
router.put('/people/:id', [PersonController, 'update'])
router.delete('/people/:id', [PersonController, 'delete'])
