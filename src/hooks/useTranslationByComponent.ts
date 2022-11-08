import { useTranslation } from 'react-i18next';
import { snakeCase } from 'lodash';

type ITByPropName = (propertyName: string) => string;

function useTranslationByComponent(componentName?: string) {
  const useTranslationResponse = useTranslation();
  const { t } = useTranslationResponse;

  const tByPropName: ITByPropName = propertyName =>
    t(`${snakeCase(componentName)}.${snakeCase(propertyName)}`);

  return {
    ...useTranslationResponse,
    tByPropName,
  };
}

export default useTranslationByComponent;
