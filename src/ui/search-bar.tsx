import {
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UiSearchBar = ({ value, onChange}: Props) => (
      <FormControl>
        <TextField
          size="small"
          variant="outlined"
          value={value}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
              >
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </FormControl>
  );
