import styles from '../styles/Common.module.css';
import { toSentenceCase } from '../utils/utils';

type Props = {
  name: string
}

// function createRGBA(type: string) {
//   switch(type) {
//     case 'normal':
//       return 'rgba(164, 172, 175, 0.7)';
//     case 'fighting': 
//       return 'rgba(213, 103, 35, 0.7)';
//     case 'flying':
//       return 'rgba(61, 199, 239, 0.7)';
//     case 'poison':
//       return 'rgba(185, 127, 201, 0.7)';
//     case 'ground':
//       return 'rgba(247, 222, 63, 0.7)';
//     case 'rock':
//       return 'rgba(163, 140, 33, 0.7)';
//     case 'bug':
//       return 'rgba(114, 159, 63, 0.7)';
//     case 'ghost':
//       return 'rgba(123, 98, 163, 0.7)';
//     case 'steel':
//       return 'rgba(158, 183, 184, 0.7)';
//     case 'fire':
//       return 'rgba(253, 125, 36, 0.7)';
//     case 'water':
//       return 'rgba(69, 146, 196, 0.7)';
//     case 'grass':
//       return 'rgba(155, 204, 80, 0.7)';
//     case 'electric':
//       return 'rgba(238, 213, 53, 0.7)';
//     case 'psychic':
//       return 'rgba(243, 102, 185, 0.7)';
//     case 'ice':
//       return 'rgba(81, 196, 231, 0.7)';
//     case 'dragon':
//       return 'rgba(241, 110, 87, 0.7)';
//     case 'dark':
//       return 'rgba(112, 112, 112, 0.7)'
//     case 'fairy':
//       return 'rgba(253, 185, 233, 0.7)';
//     default: 
//       return 'rgba(164, 172, 175, 0.7)';
//   }
// }

// function createBackgroundColor(type: string) {
//   switch(type) {
//     case 'normal':
//       return '#a4acaf';
//     case 'fighting': 
//       return '#d56723';
//     case 'flying':
//       return '#3dc7ef';
//     case 'poison':
//       return '#b97fc9';
//     case 'ground':
//       return '#f7de3f';
//     case 'rock':
//       return '#a38c21';
//     case 'bug':
//       return '#729f3f';
//     case 'ghost':
//       return '#7b62a3';
//     case 'steel':
//       return '#9eb7b8';
//     case 'fire':
//       return '#fd7d24';
//     case 'water':
//       return '#4592c4';
//     case 'grass':
//       return '#9bcc50';
//     case 'electric':
//       return '#eed535';
//     case 'psychic':
//       return '#f366b9';
//     case 'ice':
//       return '#51c4e7';
//     case 'dragon':
//       return '#f16e57';
//     case 'dark':
//       return '#707070'
//     case 'fairy':
//       return '#fdb9e9';
//     default: 
//       return '#a4acaf';
//   }
// }

export default function PokemonTypeTag(props: Props) {
  return (
    <div className={[styles['pokemon-type-tag'], styles[`bg-${props.name}`]].join(' ')}>
      <p className={styles['pokemon-type-tag-name']}>{toSentenceCase(props.name)}</p>
    </div>
  );
}