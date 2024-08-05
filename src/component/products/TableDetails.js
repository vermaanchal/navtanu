import React from 'react'
import { Table,TableCell,TableRow,TableHead } from '@mui/material'
const TableDetails = (props) => {
  return (
    <>
     <Table style={{width:'100%',border:"2px solid  #CCC"}} aria-label ='simple table'>
        <TableHead>
            <TableRow>
                <TableCell className='ETableCellText'><strong>Total Investment</strong></TableCell>
                <TableCell className='ETableCellVal'><strong>₹</strong>{props.pAmount}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'><strong>Expected Return Rate %</strong></TableCell>
                <TableCell className='ETableCellVal'><strong>₹</strong>{props.interest}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'><strong>Time Period (months)</strong></TableCell>
                <TableCell className='ETableCellVal'><strong></strong>{props.duration}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'><strong>Total Value</strong><br/></TableCell>
                <TableCell className='ETableCellVal'><strong>₹</strong>{props.totalAmt ? props.totalAmt :0}</TableCell>
            </TableRow>
        </TableHead>
        </Table> 
    </>
  )
}

export default TableDetails
