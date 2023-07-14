const getRickAndMortyCharacters = require('./index');

describe('getRickAndMortyCharacters', () => {
  test('should return an array of characters with the correct properties', async () => {
    const expectedCharacters = [
      {
        nome: 'Rick Sanchez',
        genero: 'Homem',
        avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        especie: 'Humano',
      },
      {
        nome: 'Morty Smith',
        genero: 'Homem',
        avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        especie: 'Humano',
      },
      {
        nome: 'Summer Smith',
        genero: 'Mulher',
        avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        especie: 'Humano',
      },
      {
        nome: 'Beth Smith',
        genero: 'Mulher',
        avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        especie: 'Humano',
      },
      {
        nome: 'Jerry Smith',
        genero: 'Homem',
        avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
        especie: 'Humano',
      },
    ];

    const characters = await getRickAndMortyCharacters();

    expect(characters).toEqual(expectedCharacters);
  }, 10000);
});
