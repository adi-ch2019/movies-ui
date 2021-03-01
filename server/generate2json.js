var faker = require('faker/locale/en_US');
var dB = { Movies: []};

for (var i = 1; i<=100; i++) {
  dB.Movies.push({
    Language:faker.finance.currencyName(),
    Location:faker.address.city(),
    Plot:faker.lorem.sentences(),
    Poster:faker.image.image(),
    SoundEffects: [
      faker.system.mimeType(),
      faker.system.mimeType()
    ],
    Stills: [
      faker.image.image(),
      faker.image.image(),
      faker.image.image()
    ],
    Title: faker.company.companyName(),
    imdbID: i,
    listingType:faker.hacker.verb(),
            imdbRating: faker.random.float()
  });
}

console.log(JSON.stringify(dB));
