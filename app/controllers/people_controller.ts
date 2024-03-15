import Person from '#models/person'
import type { HttpContext } from '@adonisjs/core/http'

export default class PeopleController {
    //use the person model to fetch all people

    async index(ctx: HttpContext) {
        const people = await Person.all()
        return people;
    }
}