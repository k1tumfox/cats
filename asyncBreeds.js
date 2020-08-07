const fs = require('fs');

const breedDetailsFromFile = function(breed, dataRecall) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) dataRecall(data);
  });
  
};

const printOutCatBreed = breed => {
  console.log('Return value: ', breed);
};

breedDetailsFromFile('Bombay', printOutCatBreed);
