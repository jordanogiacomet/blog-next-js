import { styleText } from 'util';

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map(message => styleText(['bgGray', 'bold'], `${message}`))
    .join(' ');
  console.log(styleText('black', messages));
}
