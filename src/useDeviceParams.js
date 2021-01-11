import { useState, useEffect } from 'react';

const PHONE = 'phone';
const TABLET = 'tablet';
const DESKTOP = 'desktop';

function getDeviceType() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    return PHONE;
  } else if (windowWidth >= 768 && windowWidth < 1200) {
    return TABLET;
  } else if (windowWidth >= 1200) {
    return DESKTOP;
  }
}

function getDeviceParams(deviceType) {
  return {
    deviceType,
    isPhone: deviceType === PHONE,
    isTablet: deviceType === TABLET,
    isDesktop: deviceType === DESKTOP
  };
}

const useDeviceParams = () => {
  const [ deviceType, setDeviceType ] = useState(getDeviceType());
  const [ deviceParams, setDeviceParams ] = useState(getDeviceParams(deviceType));

  useEffect(() => {
    function handleResize() {
      setDeviceType(getDeviceType());
    }

    window.addEventListener('resize', handleResize);
    return () => window. removeEventListener('resize', handleResize)
  }, [])

  useEffect( () => {
    setDeviceParams(getDeviceParams(deviceType))
  }, [deviceType]);

  return deviceParams;
}

const PhoneVisible = ({ children }) => {
  const { isPhone } = useDeviceParams();

  if (!isPhone) {
    return null;
  }

  return children;
};

const PhoneNotVisible = ({ children }) => {
  const { isPhone } = useDeviceParams();

  if (isPhone) {
    return null;
  }

  return children;
}

export default useDeviceParams;

export {
  PhoneVisible,
  PhoneNotVisible,
}