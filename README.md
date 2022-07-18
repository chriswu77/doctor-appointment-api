## Notable Takehome

## Directions

-   Set up your postgres database config in `db/index.js` (might need to create the `calendar` database as well if not automatically created)
-   run `npm start` to start app

## API endpoints

GET - all doctors - `/api/doctors`

POST - create a doctor - `/api/doctors`
body: `firstName`, `lastName`

GET - all appointments for a doctor - `/api/doctors/:doctorId/appointments`
optional query param: `date` (ISOString date) to GET all appointments for a doctor on a particular day

DELETE - appointment - `/api/doctors/:doctorId/appointments/:appointmentId`

POST - create an appointment - `/api/doctors/:doctorId/appointments`
body: `firstName` of patient, `lastName` of patient, `date` (ISOString date)
