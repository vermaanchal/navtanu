import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Slider, Table, TableCell, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/system';
import TableDetails from './TableDetails';

ChartJS.register(ArcElement, Tooltip, Legend);

const PrettoSlider = styled(Slider)(({ theme }) => ({
    color: 'rgba(128, 213, 182, 1)',
    height: 10,
    width: "96%",
    '& .MuiSlider-thumb': {
        height: 25,
        width: 25,
        backgroundColor: 'white',
        border: '3px solid black',
        marginTop: -2,
        marginLeft: -9,
    },
    '& .MuiSlider-track': {
        height: 10,
        borderRadius: 4,
    },
    '& .MuiSlider-rail': {
        height: 10,
        borderRadius: 4,
    },
}));

const Calculator = () => {
    const [pAmount, setpAmount] = useState(2755000);
    const [interest, setinterest] = useState(7);
    const [duration, setDuration] = useState(147);
    const maxValue = 60000000;
    const intMax = 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

    const data = {
        labels: ['Total Interests', 'Total Amount'],
        datasets: [
            {
                data: [TotalAmountOfInterest, pAmount],
                backgroundColor: ['#bffaec ', '#a2d3fe']
            }
        ]
    };

    return (
        <div className='App'>
            <div className='CalApp'>
                <h2 className='CalHeading my-4 animated slideInDown '><u>Mutual Fund Returns Calculator</u></h2>
                <div className='row pt-4'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div>
                            <Typography gutterBottom><strong>Total Investment</strong></Typography>
                            <PrettoSlider value={pAmount} onChange={(event, vAmt) => { setpAmount(vAmt) }} defaultValue={pAmount} max={maxValue} />
                        </div>
                        <div>
                            <Typography gutterBottom><strong>Expected Return Rate %</strong></Typography>
                            <PrettoSlider value={interest} onChange={(event, vInt) => { setinterest(vInt) }} defaultValue={interest} max={intMax} />
                        </div>
                        <div>
                            <Typography gutterBottom><strong>Time Period (months)</strong></Typography>
                            <PrettoSlider value={duration} onChange={(event, vDur) => { setDuration(vDur) }} defaultValue={duration} max={maxDuration} />
                        </div>
                        <div>
                            <Table>
                                <TableRow>
                                    <TableCell className='tablecell'>
                                        <TableDetails pAmount={pAmount} interest={interest} totalAmt={totalAmt}
                                            duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}></TableDetails>
                                    </TableCell>
                                </TableRow>

                            </Table>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end mt-4'>
                        <Pie data={data} width={200} height={200} />

                    </div>
                    <div className='investbutton'>
                        <a href="" className="btn btn-primary py-3 px-4 animated slideInDown rounded-pill">Invest Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
