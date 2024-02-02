
import React from 'react';

function Aside({about, image = "https://via.placeholder.com/215"}) {
  return (
    <aside>
<img src={image}alt='blog logo'/>
<p>{about}</p>
    </aside>
  );
}

export default Aside;
