import React from 'react';

function Dz() {
  const fruits = ['Яблоко', 'Банан', 'Манго', 'Апельсин'];

  const friends = [
    { id: 1, name: 'xabi' },
    { id: 2, name: 'artur' },
    { id: 3, name: 'abror' }
  ];

  const peopleWithColors = [
    { id: 'p1', name: 'abror', color: 'Синий' },
    { id: 'p2', name: 'artur', color: 'Зеленый' },
    { id: 'p3', name: 'xabi', color: 'черный' }
  ];

  const handleGreet = (name) => {
    alert(`Привет, ${name}!`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Домашнее задание</h1>

      <section>
        <h2>1. Любимые фрукты</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>2. Список друзей</h2>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id} style={{ marginBottom: '8px' }}>
              {friend.name}{' '}
              <button onClick={() => handleGreet(friend.name)}>
                Поздороваться
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>3. Имена и любимые цвета</h2>
        <ul>
          {peopleWithColors.map((person) => (
            <li key={person.id}>
              {person.name} — любимый цвет: {person.color}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>4 и 5. Объединенный список и ключи (index vs id)</h2>
        <p>
          Разница между index и id:
          <br />
          - index используется для статических списков без изменения порядка.
          <br />
          - id гарантирует правильное обновление DOM при сортировке, удалении и добавлении элементов.
        </p>

        <h3>Объединенный список:</h3>
        <ul>
          {friends.map((friend) => (
            <li key={`friend-${friend.id}`}>
              Друг: {friend.name}
            </li>
          ))}
          {peopleWithColors.map((person) => (
            <li key={`color-${person.id}`}>
              Человек: {person.name}, цвет: {person.color}
            </li>
          ))}
          {fruits.map((fruit, index) => (
            <li key={`fruit-${index}`}>
              Фрукт: {fruit}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Dz;