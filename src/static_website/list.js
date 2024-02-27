import React, { StrictMode } from 'react';

export default function UnOrderedLists(input) {
  console.log(input, 'input');
  return (
    <ul className={input.ulclass}>
      {input.dishes.map((each) => (
        <li className={each.className} key={each.key}>
          {each.title}
        </li>
      ))}
    </ul>
  );
}
