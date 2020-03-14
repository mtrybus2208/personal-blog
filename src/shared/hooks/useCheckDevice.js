import { useWindowWidth } from '../../shared/hooks/useWindowWidth';
import * as resolutions from '../../helpers/constants/resolutionsConstants';

const useCheckDevice = () => {
  const windowWidth = useWindowWidth();

  return {
    isMobile: windowWidth < resolutions.isPhone,
    isTablet: windowWidth < resolutions.isTablet,
    isDesktop: windowWidth >= resolutions.isTablet,
  };
};

export { useCheckDevice };
