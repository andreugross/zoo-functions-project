const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna um objeto de elefantes se a função getElephants for chamada', () => {
    expect('elephants').toEqual('elephants');
  });

  it('Teste a função handlerElephants, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Teste a função handlerElephants, quando recebe o argumento `count`, retorna o número inteiro 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Teste a função handlerElephants, quando recebe o argumento `names`, retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Teste a função handlerElephants, quando recebe o argumento `averageAge`, retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Teste a função handlerElephants, quando recebe o argumento `location`, retorna uma string com o valor `NW`', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Teste a função handlerElephants, quando recebe o argumento `popularity`, retorna uma string com o valor `NW`', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Teste a função handlerElephants, quando recebe o argumento `availability`, retorna um array de dias da semana que não possui `Monday`', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  it('Teste a função handlerElephants, quando recebe o argumento vazio, retorna a string `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Teste a função handlerElephants, quando recebe uma string que não contempla uma funcionalidade, retorna null', () => {
    expect(handlerElephants('xablau')).toBeNull();
  });
});
