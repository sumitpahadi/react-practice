import React, { useState } from 'react';

function Hoc(WrappedComponent) {
  function HocComponent() {
    const [data, setdata] = useState(0);

    const handleclick = () => {
      setdata(data + 1);
    };

    return (
      <div>
        <WrappedComponent counter={data} handleclick={handleclick} />
      </div>
    );
  }

  return HocComponent;
}

export default Hoc;
