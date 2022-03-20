import { Paper, TextField } from '@mui/material';
import { searchAtom } from '@store/atoms/search/searchAtom';
import { useRecoilState } from 'recoil';

export const Search = () => {
    const [search, setSearch] = useRecoilState(searchAtom);

    const onSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = target.value;
        setSearch(searchString);
    };

    return (
        <Paper>
            <TextField
                fullWidth
                data-testid="search-field"
                placeholder="search..."
                value={search}
                onChange={onSearchChange}
            />
        </Paper>
    );
};
