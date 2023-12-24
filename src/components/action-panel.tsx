import { Box, BoxProps } from '@mui/material';

type Props = {
  items: Array<React.ReactNode>
} & BoxProps

export const ActionPanel = ({ items, ...props }: Props) => (
  <Box sx={{display: 'flex', justifyContent: 'space-between', my: 3, width: '100%'}} {...props}>
    {items.map((item) => item)}
  </Box>
);
