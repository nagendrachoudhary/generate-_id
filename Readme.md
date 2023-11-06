## Sending Parameters

You can configure and send parameters to the `generateid` function to customize the generated IDs according to your specific requirements.

To send parameters, create an options object and pass it as an argument to the `generateid` function. The options object can include the following properties:

- `forceLowercase`: Force lowercase characters (default: `true`)
- `forceUppercase`: Force uppercase characters (default: `true`)
- `numbers`: Include numbers (default: `true`)
- `specialChars`: Include special characters (default: `true`)
- `length`: Length of the generated ID (default: `8`)

Here's an example of how to send custom parameters:

```javascript
const generateID = require('generateid');

// Create an options object with custom parameters
const customOptions = {
  forceLowercase: true,
  forceUppercase: false,
  numbers: true,
  specialChars: true,
  length: 12,
};

// Generate a random ID with custom options
const customID = generateID.key(customOptions);
console.log(customID);