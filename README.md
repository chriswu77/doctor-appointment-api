## Notable Takehome

## Directions

-   Set up your postgres database config in `db/index.js` (might need to create the `calendar` database as well if not automatically created)
-   run `npm start` to start app

## API endpoints

GET - all doctors - `/api/doctors`

POST - create a doctor - `/api/doctors`
body accepts `firstName` and `lastName`

GET - all appointments for a doctor - `/api/doctors/:doctorId/appointments?date={ISOString date}`
note: query param accepts date converted to ISO string

DELETE - appointment - `/api/doctors/:doctorId/appointments/:appointmentId`

POST - create an appointment - `/api/doctors/:doctorId/appointments`
body accepts `firstName` and `lastName` of patient, as well as the appointment time `date` (date should be ISO string)
