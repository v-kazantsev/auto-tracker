import { Alert, AlertTitle } from '@mui/material';
import { COMMON_ERROR } from 'config/constants';

type Props = {
  title?: string;
};

export const UiCommonError = ({ title = 'Ошибка'}: Props) => (
  <Alert severity="error">
    <AlertTitle>{title}</AlertTitle>
      {COMMON_ERROR}
    </Alert>
);
