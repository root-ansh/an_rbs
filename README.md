```text

/,/rooms : rooms and rooms search 
    |- details,book now

/checkout/:request_id/details :enter details + "pay now!" (in future this will be  submit request button, for now it will redirect to payment)
/checkout/:request_id/request_submitted <---v2
/checkout/:request_id/pay

/signup
/profile : profile, logout    <---v1
/profile/edit : profle update <-- v2

/history : booking history (table of room number,payment amount, dates , booking status ("confirmed"/"disputed" only, for now), payment identifier, user details, misc ) |
/history/details/:id : download invoice+QR <--v2

cms.anrbs.com/home : graphs for prout rooms booked, manav mitra bhawan booked, latest room request
/rooms : all rooms with status, edit and add button . add button opens popup for adding new room to db
/payments
/payments/dispute
/users



```
