const axios = require('axios');

axios
  .post('https://api.vercel.com/v1/integrations/deploy/prj_cRwtZ69xii7euNzeSOSJPWFQo8OL/8l9ouQl7q9')
  .then(() => console.log('✅ Deploying'))
  .catch(() => console.log('❌ Something went wrong.'));
