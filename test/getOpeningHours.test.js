const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste a função getOpeningHours, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Monday` e `09:00-AM`, retorna uma string `The zoo is closed`', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Tuesday` e `09:00-AM`, retorna uma string `The zoo is open`', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Wednesday` e `09:00-PM`, retorna uma string `The zoo is closed`', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Thu` e `09:00-AM`, retorna uma exceção com a mensagem `The day must be valid. Example: Monday`', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Friday` e `09:00-ZM`, retorna uma exceção com a mensagem `The abbreviation must be \'AM\' or \'PM\'`', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Saturday` e `C9:00-AM`, retorna uma exceção com a mensagem `The hour should represent a number`', () => {
    expect(() => { getOpeningHours('Friday', 'C9:00-AM'); }).toThrowError(new Error('The hour should represent a number'));
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Sunday` e `C9:c0-AM`, retorna uma exceção com a mensagem `The minutes should represent a number`', () => {
    expect(() => { getOpeningHours('Friday', '09:c0-AM'); }).toThrowError(new Error('The minutes should represent a number'));
  });

  it('Teste a função getOpeningHours, quando recebe o argumento `Monday` e `13:00-AM`, retorna uma exceção com a mensagem `The minutes should represent a number`', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Teste a função getOpeningHours, quando recebe o argumento `Tuesday` e `09:60-AM`, retorna uma exceção com a mensagem `The minutes must be between 0 and 59`', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
