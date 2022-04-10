import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, IconButton } from '@mui/material';

type ActionProps = {
    onEditClick: () => void;
    onRemoveClick: () => void;
};

export const Actions = ({ onEditClick, onRemoveClick }: ActionProps) => {
    return (
        <Grid>
            <IconButton onClick={onEditClick} color="warning" aria-label="edit">
                <EditIcon />
            </IconButton>
            <IconButton onClick={onRemoveClick} color="error" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </Grid>
    );
};
