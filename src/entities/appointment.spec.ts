import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() + 1)

    const appointment = new Appointment({
        customer: 'Jonh Doe',
        startsAt,
        endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
})

test('cannot create an appointment with end date before start date', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() - 1)

    expect(() => {
        new Appointment({
            customer: 'Jonh Doe',
            startsAt,
            endsAt
        })
    })
    
})