import React from 'react';

const Section = ({title, children}) => {
  return (
    <section className='my-20'>
        <h4 className='text-2xl font-semibold mb-6'>{title}</h4>
        {children}
    </section>
  )
}

export default Section;