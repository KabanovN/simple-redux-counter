export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const reset = () => ({ type: 'RESET' });
export const rnd = (value) => ({ type: 'RND', payload: value });
