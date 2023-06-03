import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { RiHotelLine } from 'react-icons/ri';
import Link from 'next/link';

const Categories = () => {
  const categories = [
    {
      name: 'tatilköyü',
      icon: FaUmbrellaBeach
    },
    {
      name: 'kamp',
      icon: RiHotelLine
    },
    {
      name: 'otel',
      icon: FaUmbrellaBeach
    },
    {
      name: 'villa',
      icon: RiHotelLine
    }
  ];

  return (
    <div>
      <ul className='flex justify-between gap-12'>
        {categories.map((category) => (
          <li  key={category.name}>
            <Link className='flex flex-col items-center' href={`categories/${category.name}`}>
              <category.icon />
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
