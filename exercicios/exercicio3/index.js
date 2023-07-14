const SpeciesEnum = {
  HUMAN: 'Human',
  ALIEN: 'Alien',
  HUMANOID: 'Humanoid',
  POOPYBUTTHOLE: 'Poopybutthole',
  MYTHOLOGICAL: 'Mythological',
  UNKNOWN: 'unknown',
  ANIMAL: 'Animal',
  DISEASE: 'Disease',
  ROBOT: 'Robot',
  CRONENBERG: 'Cronenberg',
  PLANET: 'Planet',
};

const genderEnum = {
  FEMALE: 'Female',
  MALE: 'Male',
  GENDERLESS: 'Genderless',
  UNKNOWN: 'unknown',
};

const speciesTranslations = {
  [SpeciesEnum.HUMAN]: 'Humano',
  [SpeciesEnum.ALIEN]: 'Alienígena',
  [SpeciesEnum.HUMANOID]: 'Humanóide',
  [SpeciesEnum.POOPYBUTTHOLE]: 'Poopybutthole',
  [SpeciesEnum.MYTHOLOGICAL]: 'Mitológico',
  [SpeciesEnum.UNKNOWN]: 'Desconhecido',
  [SpeciesEnum.ANIMAL]: 'Animal',
  [SpeciesEnum.DISEASE]: 'Doença',
  [SpeciesEnum.ROBOT]: 'Robô',
  [SpeciesEnum.CRONENBERG]: 'Cronenberg',
  [SpeciesEnum.PLANET]: 'Planeta',
};

const genderTranslations = {
  [genderEnum.FEMALE]: 'Mulher',
  [genderEnum.MALE]: 'Homem',
  [genderEnum.GENDERLESS]: 'Sem gênero',
  [genderEnum.UNKNOWN]: 'Desconhecido',
};

async function getRickAndMortyCharacters() {
  const characterNames = [
    'Rick Sanchez',
    'Morty Smith',
    'Summer Smith',
    'Beth Smith',
    'Jerry Smith',
  ];
  const characterDataPromises = [];

  for (const characterName of characterNames) {
    characterDataPromises.push(
      fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length > 0) {
            const character = data.results[0];
            const translatedSpecies =
              speciesTranslations[character.species] || 'Desconhecido';
            const translatedGender =
              genderTranslations[character.gender] || 'Desconhecido';

            return {
              nome: character.name,
              genero: translatedGender,
              avatar: character.image,
              especie: translatedSpecies,
            };
          }
        })
    );
  }

  const characterDataResults = await Promise.allSettled(characterDataPromises);
  const characterData = characterDataResults
    .filter((result) => result.status === 'fulfilled')
    .map((result) => result.value);

  return characterData;
}

module.exports = getRickAndMortyCharacters;
