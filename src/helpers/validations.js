export const checkAttributes = (attributes) => {
  const { landAttributes, species } = attributes;

  if (!checkLandAttributes(landAttributes)) return false;

  if (!checkSpecies(species)) return false;

  return true;
};

export const checkLandAttributes = (landAttributes) => {
  const {
    toAddress,
    name,
    landOwnerAlias,
    size,
    country,
    stateOrRegion,
    identifier,
  } = landAttributes;

  if (toAddress.length < 42) return false;
  else if (name.length < 3) return false;
  else if (landOwnerAlias < 3) return false;
  else if (size < 0) return false;
  else if (country < 3) return false;
  else if (stateOrRegion < 3) return false;
  else if (identifier < 10) return false;
  else return true;
};

export const checkSpecies = (species) => {
  console.log(species, species.length);
  species.map((specie) => {
    console.log("specie on map: ", specie);
    if (!checkSpecie(specie)) return false;
  });

  console.log("specie verification passed!")
  return true;
};

export const checkSpecie = (specie) => {
  const { speciesAlias, speciesScientificName, density, size, TCO2perSecond } =
    specie;

  if (speciesAlias.length < 3) return false;
  else if (speciesScientificName.length < 3) return false;
  else if (density < 0) return false;
  else if (size < 0) return false;
  else if (TCO2perSecond < 0) return false;
  else return true;
};
