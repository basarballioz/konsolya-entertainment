'use client';

import RentFromStore from '@/components/RentFromStore';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { useEffect, useState } from 'react';
import axios from 'axios';

const rentStore = () => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3600/v1/settings/provinces').then((res) => {
      console.log(res);

      setProvinces(res.data);
    });
  }, []);

  return (
    <>
      <Breadcrumb
        pageName="Rent From Store"
        description="Rent a console from any store for a seamless gaming adventure. Choose from the latest consoles and games for a flexible, commitment-free experience."
      />
      <RentFromStore provinces={provinces} />
    </>
  );
};

export default rentStore;
