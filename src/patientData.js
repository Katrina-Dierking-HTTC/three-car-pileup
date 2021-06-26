import { v4 as uuid } from 'uuid'

export const patientData = [
    {
        id: uuid(),
        name: 'Jane Doe',
        age: 32,
        gender: 'female',
        complaint: ['headache', 'short of breath'],
        treatments: [{type: '02', amount: '2L', changes: 'sats at 97%'}],
        improved: true,
        painScale: 3, 
        resources: [
            {rsType: 'FD', type: 'Engine', unit: '31', chief: 'Tucker'},
            { rsType: "PD", type: "HP", unit: "50", chief: "Jones" },
            { rsType: "EMS", type: "Medic", unit: "21", chief: "Williams" }
        ]
    },

    {
        id: uuid(),
        name: "Jon Doe",
        age: 59,
        gender: "male",
        complaint: ["chest pains "],
        treatments: [{ type: "Nitro", amount: "3tabs", changes: "no improvement" }],
        improved: false, 
        painScale: 9,
        resources: [{ rsType: "FD", type: "rescue", unit: "31", chief: "Tucker" }]
      }
]