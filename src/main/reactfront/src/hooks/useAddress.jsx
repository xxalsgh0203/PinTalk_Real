import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const useAddress = () => {
  const open = useDaumPostcodePopup();
  const [address, setAddress] = useState();

  const handleComplete = (data) => {
    setAddress(data.address);
  };

  const handleAddress = () => {
    open({ onComplete: handleComplete });
  };

  return {
    address,
    handleAddress,
  };
};
export default useAddress;
