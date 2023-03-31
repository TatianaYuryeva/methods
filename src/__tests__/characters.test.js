import { Boweman } from '../js/characters';

const boweman = new Boweman('name', 'Boweman');

test('test levelUp', () => {
  boweman.levelUp();
  expect(boweman).toEqual({
    name: 'name',
    type: 'Boweman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('test damage', () => {
  boweman.damage(50);
  expect(boweman.health).toBe(65);
});

test('test error levelUp', () => {
  boweman.health = 0;
  expect(() => boweman.levelUp()).toThrow('Нельзя повысить левел умершего');
});
