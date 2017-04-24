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

##### Steps in booking:

- Submitted a requests
- Picking a destination
- Destination chosen
- flight or train, or not needed
- rental cars booked
- flight
- hotel
- itinerary
- Insurance

##### Prioritization of steps

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

- http
- router
- bodyParser
- sqlite3 (probs a mistake)
- bluebird

### Routes

##### Customer

<code>/customer/list</code>

Get all the customers listed in the database
 
 <code>/customer/list/:id</code>
 
Get specific customer and associated tracking information
 
<code>/csr/list/:id </code>

Get all the tracking data for a specific customer service rep
 
<code>/dash/list/</code>
 
List of people and current step, sorted by priority

<code>/dash/track:[customer_id, step_id, date, csr]</code>

Post a step for tracking given a customer
 
## todo list

- error handling for posts
- testing mocha
