import React from 'react';
import fotp from '../component/asset/fotp.jpg';
import foto2 from '../component/asset/foto2.jpg';
import Park from '../component/asset/park.jpg';
import './foto.css'

const Foto = () => {
  return (
    <div className='image'>
      <div>
        <img src={fotp} alt="1" />
        <h1>Gerbang Masuk</h1>
      </div>
      <div>
        <img src={foto2} alt="2" />
        <h1>Wahana cumi-cumi</h1>
      </div>
      <div>
        <img src={Park} alt="3" />
        <h1>Rumah barongsai</h1>
      </div>
    </div>
  );
}

export default Foto;