const axios = require('axios');

async function testPostUniversityRequest() {
  try {
    const response = await axios.post('http://localhost:3000/university', {
      name: 'Sofia University',
      town: 'Sofia'
    });
    console.log('University created:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPostUserRequest() {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      universityId: 1,
      subjectIds: [1, 2]
    });
    console.log('User created:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPostSubjectRequest() {
  try {
    const response = await axios.post('http://localhost:3000/subject', {
      name: 'Math 101'
    });
    console.log('Subject created:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function updateUser() {
  try {
    const response = await axios.put(`http://localhost:3000/user/1/subject/`, {
      subjectId: [1]
    });
    console.log('User updated:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

//async function testUpdateUserRequest() {
//  const userId = 1;
//  const updatedData = {
//    subjectId: [1, 2]
//  };

//  await updateUser(userId, updatedData);
//}

(async () => {
 // await testPostUniversityRequest();
 // await testPostSubjectRequest();
 // await testPostUserRequest();
 // await testUpdateUserRequest();
 await updateUser();
})();

