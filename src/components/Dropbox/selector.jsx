import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall(Props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 700 }} size="xx-larger">
      <InputLabel id="demo-select-small-label">{Props.content}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>{Props.city1}</em>
        </MenuItem>
        <MenuItem value={10}>{Props.city1}</MenuItem>
        <MenuItem value={20}>{Props.ciyt2}</MenuItem>
        <MenuItem value={30}>{Props.ciyt3}</MenuItem>
        <MenuItem value={30}>{Props.ciyt4}</MenuItem>
      </Select>
    </FormControl>
  );
}