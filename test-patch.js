const axios = require('axios');


async function testPatchRequest() {
  try {
    const response = await axios.patch('http://localhost:3000/user', {
      name: 'Alice Johnson',
      email: 'alice@example.com'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPutSubjectRequest() {
  try {
    const response = await axios.put('http://localhost:3000/subject/1', {
      name: 'Advanced Math 101',
      description: 'Advanced topics in mathematics',
      userId: 1,
    });
    console.log('Subject updated:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testPutSubjectRequest();