import {  MenuItem, MenuList, Paper } from '@mui/material'
import React from 'react'

export default function Category() {
  return (
      <Paper>

    <MenuList open={true}>
    
            <MenuItem>Roll</MenuItem>
            <MenuItem>Biryani</MenuItem>
            <MenuItem>Biryani</MenuItem>
            <MenuItem>Dosa</MenuItem>
            <MenuItem>Chowin</MenuItem>
            <MenuItem>Chowin</MenuItem>
            <MenuItem>Burger</MenuItem>
            <MenuItem>Burger</MenuItem>
            <MenuItem>Sandwich</MenuItem>
            <MenuItem>Sandwich</MenuItem>
            <MenuItem>Momo</MenuItem>
            <MenuItem>Momo</MenuItem>
    </MenuList>
      </Paper>
  )
}
