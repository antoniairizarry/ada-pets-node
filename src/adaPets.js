// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
    .then(resp => {
      setResult(resp.data);
    })
    .catch(error => {
      setError(`Unable to list pets: ${error.message}`);
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
      .then(resp => {
        setResult(resp.data);
      })
      .catch(error => {
        setError(`Unable to show details: ${error.message}`);
      })
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
  axios.delete(BASE_URL + selectedPetId)
  .then(resp => {
    setResult(resp.data);
  })
  .catch(error => {
    setError(`Failed to remove selected pet: ${error.message}`);
  })

};
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
    .then(resp => {
      setResult(resp.data);
    })
    .catch(error => {
      setError(`Unable to add pet: ${error.message}`);
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
