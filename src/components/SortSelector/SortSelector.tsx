import { Paper } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { sortAtom } from '@store/atoms/sort/sortAtom.';
import { sortSelectorValues } from '@utils/constants/sortSelectorValues';
import { SortTypes } from '@utils/types/sortTypesEnum';
import { useRecoilState } from 'recoil';

export const SortSelector = () => {
    const [sortType, setSortType] = useRecoilState<SortTypes>(sortAtom);

    const onSortTypeChange = (event: SelectChangeEvent<SortTypes>) => {
        const chosenSortType = event.target.value;
        setSortType(chosenSortType as SortTypes);
    };

    return (
        <Paper>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="sort-selector-label">Sort type</InputLabel>
                <Select
                    id="sort-selector"
                    labelId="sort-selector-label"
                    value={sortType}
                    onChange={onSortTypeChange}
                    label="Sort type"
                >
                    {sortSelectorValues.map(([sortKey, sortValue]) => (
                        <MenuItem key={sortKey} value={sortValue}>
                            {sortValue}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Paper>
    );
};
