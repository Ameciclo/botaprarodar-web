import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import useStyles from './SimpleDialog.styles';

interface SimpleDialogProps {
  open: boolean;
  title: string;
  content: string;
  onClose: (value: string) => void;
}

const SimpleDialog: React.FC<SimpleDialogProps> = (
  props: SimpleDialogProps,
) => {
  const { onClose, title, content, open } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose('');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-testid="dialog"
    >
      <DialogTitle id="alert-dialog-title" data-testid="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.root}>
        <Button onClick={handleClose} color="primary" variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleDialog;
