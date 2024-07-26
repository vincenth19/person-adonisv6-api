// app/Controllers/Http/PersonsController.ts

import type { HttpContext } from '@adonisjs/core/http'
import Person from '#models/person'

export default class PersonsController {
  public async index({ response }: HttpContext) {
    try {
      const persons = await Person.all()
      return response.json(persons)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }

  public async create({ request, response }: HttpContext) {
    try {
      const data = request.only(['firstName', 'lastName', 'phoneNumber', 'dateOfBirth'])
      const person = await Person.create(data)
      return response.status(201).json(person)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }

  public async searchId({ params, response }: HttpContext) {
    try {
      const person = await Person.findOrFail(params.id)
      return response.json(person)
    } catch (error) {
      return response.status(404).json({ message: 'Person not found' })
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const person = await Person.findOrFail(params.id)
      const data = request.only(['firstName', 'lastName', 'phoneNumber', 'dateOfBirth'])
      person.merge(data)
      await person.save()
      return response.json(person)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }

  public async delete({ params, response }: HttpContext) {
    try {
      const person = await Person.findOrFail(params.id)
      await person.delete()
      return response.status(204).json(null)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}
