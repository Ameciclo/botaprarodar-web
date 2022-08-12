import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';
import CommunityService from 'modules/communities/services/CommunityService';
import { toast } from 'shared/components';
import useStyles from './DeleteCommunityButton.styles';

const DeleteCommunityButton: React.FC<{ communityId: string }> = ({
  communityId,
}) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (communityId) {
      CommunityService.deleteCommunityById(communityId)
        .then(() => {
          history.push('/comunidades');
          toast.success('Comunidade deletada com sucesso.');
        })
        .catch(() => {
          toast.error('Erro ao deletar comunidade.');
        });
    }
  };
  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClickOpen}
      >
        <InfoOutlined /> Deletar comunidade
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Deseja deletar esta comunidade?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            A ação a seguir não pode ser desfeita e removerá a comunidade de
            todos os registros do Boda pra Rodar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteCommunityButton;
