import React from 'react';
import { useRecoilState } from 'recoil';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TodoFilterType } from '@/pages/todos/lib';
import { todoListFilterAtom } from '@/pages/todos/store';
import { useTranslation } from 'react-i18next';

export const TodoFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterAtom);
  const { t } = useTranslation();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>Filter</InputLabel>
      <Select
        id="todoFilter"
        label="Filter"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <MenuItem value={TodoFilterType.ALL}>All</MenuItem>
        <MenuItem value={TodoFilterType.COMPLETE}>Complete</MenuItem>
        <MenuItem value={TodoFilterType.INCOMPLETE}>Incomplete</MenuItem>
      </Select>
    </FormControl>
  );
};
