interface Okay {
  message: string;
  background: string;
  tags?: Tag[];
}

interface Tag {
  emotion: string;
}

export { Okay, Tag };

const itisok: Okay[] = [
  {
    message: 'to be sad.',
    background: '#8e76a8',
  },
  {
    message: 'to be upset.',
    background: '#678cbf',
  },
  {
    message: 'to be worried.',
    background: '#ada557',
  },
  {
    message: 'to be yourself.',
    background: '#4fdb62',
  },
  {
    message: 'to be happy.',
    background: '#f1fc51',
  },
  {
    message: 'to be proud.',
    background: '#fcc051',
  },
  {
    message: 'to be handsome.',
    background: '#eb7cd6',
  },
  {
    message: 'to be pretty.',
    background: '#59e369',
  },
  {
    message: 'to be cute.',
    background: '#55d477',
  },
  {
    message: 'to love.',
    background: '#e84152',
  },
  {
    message: 'to dance.',
    background: '#f0ff24',
  },
  {
    message: 'to say no.',
    background: '#6200eb',
  },
  {
    message: 'to be different.',
    background: '#a6e3aa',
  },
  {
    message: 'to not be ok.',
    background: '#24b1c9',
  },
  {
    message: 'to change.',
    background: '#95ff80',
  },
  {
    message: 'to make mistakes.',
    background: '#d4f2a0',
  },
  {
    message: 'to ask for help.',
    background: '#fcbdff',
  },
];

export { itisok };
