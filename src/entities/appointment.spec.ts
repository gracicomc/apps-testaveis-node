import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
    const appointment = new Appointment({
        customer: 'Jonh Doe',
        startsAt: new Date(),
        endsAt: new Date()
    })

    expect(appointment).toBeInstanceOf(Appointment)
})