export function createPokemonColor(pokemonType: string) {
  switch(pokemonType) {
    case 'normal':
      return {
        hex: '#a4acaf',
        rgba: 'rgba(164, 172, 175, 0.8)'
      };
    case 'fighting': 
      return { 
        hex: '#d56723',
        rgba: 'rgba(213, 103, 35, 0.8)',
      };
    case 'flying':
      return { 
        hex: '#3dc7ef',
        rgba: 'rgba(61, 199, 239, 0.8)',
      };
    case 'poison':
      return { 
        hex: '#b97fc9',
        rgba: 'rgba(185, 127, 201, 0.8)',
      };
    case 'ground':
      return { 
        hex: '#f7de3f',
        rgba: 'rgba(247, 222, 63, 0.8)',
      };
    case 'rock':
      return { 
        hex: '#a38c21',
        rgba: 'rgba(163, 140, 33, 0.8)',
      };
    case 'bug':
      return { 
        hex: '#729f3f',
        rgba: 'rgba(114, 159, 63, 0.8)',
      };
    case 'ghost':
      return { 
        hex: '#7b62a3',
        rgba: 'rgba(123, 98, 163, 0.8)',
      };
    case 'steel':
      return { 
        hex: '#9eb7b8',
        rgba: 'rgba(158, 183, 184, 0.8)',
      };
    case 'fire':
      return { 
        hex: '#fd7d24',
        rgba: 'rgba(253, 125, 36, 0.8)',
      };
    case 'water':
      return { 
        hex: '#4592c4',
        rgba: 'rgba(69, 146, 196, 0.8)',
      };
    case 'grass':
      return { 
        hex: '#9bcc50',
        rgba: 'rgba(155, 204, 80, 0.8)',
      };
    case 'electric':
      return { 
        hex: '#eed535',
        rgba: 'rgba(238, 213, 53, 0.8)',
      };
    case 'psychic':
      return { 
        hex: '#f366b9',
        rgba: 'rgba(243, 102, 185, 0.8)',
      };
    case 'ice':
      return { 
        hex: '#51c4e7',
        rgba: 'rgba(81, 196, 231, 0.8)',
      };
    case 'dragon':
      return { 
        hex: '#f16e57',
        rgba: 'rgba(241, 110, 87, 0.8)',
      };
    case 'dark':
      return { 
        hex: '#707070',
        rgba: 'rgba(112, 112, 112, 0.8)',
      };
    case 'fairy':
      return { 
        hex: '#fdb9e9',
        rgba: 'rgba(253, 185, 233, 0.8)',
      };
    default: 
    return { 
      hex: '#a4acaf',
      rgba: 'rgba(164, 172, 175, 0.8)',
    };
  }
}
