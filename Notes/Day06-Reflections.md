## Day ^ Reflection Questions
  1. What is the difference between validating an object vs validating an array?
     - Object → validate properties directly (data.id)

     - Array → must iterate through items (data.forEach(...))

  2. Why did your required fields test fail earlier?
     - I tested properties on the array itself and not an array of objects

     - You were validating: pm.expect(data).to.have.property("userId")

     - But data was:[ {...}, {...}, {...} ]

     - So you had to validate each item inside.

  3. What is the purpose of pm.response.json()?
     - pm.response.json():
       > Parses the response body

       > Converts raw response text into a JavaScript object

       > Allows you to access properties like data.id

     - Without it, you’re just looking at raw text.
     
     - That’s a critical automation concept.

  4. What is the difference between 400 and 500?
     - 400 Means: The client sent a bad request.
       > Examples:
         * Invalid field type

         * Missing required field

         * Malformed JSON
       > It’s not specifically “access restriction.”

       > Access issues are:
         * 401 (Unauthorized)

         * 403 (Forbidden)

     - 500 Means: The server broke while processing a valid request.
       > That’s a backend failure.

     - So difference:
       > 4xx → Client problem

       > 5xx → Server problem

  5. Why are mock APIs dangerous for validation assumptions?
     - Mock APIs (like jsonplaceholder) do not:
       > Enforce validation rules

       > Enforce business logic

       > Reject bad data

       > Enforce authentication

       > Simulate real database behavior

     - Example:
         {
          "title": 123,
          "body": true,
          "userId": "abc"
         }

     - A real API should return:
       > 400 or 422

     - But mock API returned: 
       > 201 Created

     - Why?
       > Because it doesn't validate anything. 
       > It just echoes back data or returns a fake ID.

     - Why This Is Dangerous in Real QA
       > If you only test against mocks:

     -  You might assume:
       >  “Invalid input still returns 201, so that must be correct.”
         
     - In production?
       > That would be a severe bug.
      
     - Mocks are good for:
       > Structure testing

       > Learning

       > Automation mechanics

     - They are bad for:
       > Validation assumptions

       > Business rule enforcement