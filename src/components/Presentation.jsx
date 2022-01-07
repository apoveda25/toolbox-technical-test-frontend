import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

const Presentation = ({results = []}) => {
  return (
    <div className="grid">
      <div className="g-col-8 g-start-3 mt-4 py-4 px-3" style={{minHeight: '65vh', backgroundColor: '#ffffff'}}>
        <h3>Results:</h3>

        <div className='d-flex flex-column align-items-center'>
          { results.map(({text}, index) => <Input key={index} className='mb-3' width='50%' formControl='sm' defaultValue={text}/>) }
        </div>
      </div>
    </div>
  )
}

Presentation.propTypes = {
  results: PropTypes.array,
}

export default Presentation
