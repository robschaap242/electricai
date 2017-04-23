## Travel Track API

### Challenge's Stated Goals:

- Improve consistency in tracking a customer
- Track team members associated with acted on steps 
- Track when a change occurred for an acted on step 
- Allow for listing of steps related to a customer 
- Allow steps to have prioritization ordering

### Translated into Business Requirements

1. Create steps for customer booking process
2. Track steps involved
3. Allow for prioritization of steps
3. Load and store data related to scheduling and tracking steps

Since the application revolves around the customer and CSR actions, here's the steps and prioritizations chosen:

#####Steps in booking:

- Submitted a requests
- Picking a destination
- Destination chosen
- flight or train, or not needed
- rental cars booked
- flight
- hotel
- itinerary
- Insurance

#####Prioritization of steps

Hierarchical order

1. Started order
2. Picking a destination
3. How is customer getting there
4. Where are they staying
5. How will they getting around
6. What do you do when you're there


## Application

### Data Objects

Normalized data objects

    1. Customers
    2. Customer Service Reps / CSRs
    3. Steps
    4. Priority
    5. Tracking

### Modules used

Kept to a very simple list.  Connect and Router are used for the http serving without the rest of Express.  Sqllite3 is used for some basic DB storage of the tracking and customer data

- connect
- router
- sqlite3 (probs a mistake)
- bluebird

### Routes

# left

- insert new tracking information
- readme
- specific CSR and customer ID's


#####Customer

######/customer/list

 - Get all the customers listed in the database
 
 
 
######/tracking/[id]

 - tracking per a specific customer id

