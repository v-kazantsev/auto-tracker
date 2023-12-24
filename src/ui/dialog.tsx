import React from 'react';
import { Dialog,  DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  open: boolean;
  onClick: any;
  children: React.ReactNode;
  title?: string;
}

export const UiDialog = ({ open, onClick, children, title = '' }: Props) => (
  <Dialog
    onClose={onClick}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      {title}
    </DialogTitle>
    <IconButton
      aria-label="close"
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent dividers>
      {children}
    </DialogContent>
  </Dialog>
);
