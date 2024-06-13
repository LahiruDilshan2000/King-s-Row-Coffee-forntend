// ** Third Party Components
import Chart from 'react-apexcharts'
import { ArrowDown } from 'react-feather'
import axios from "axios";
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge } from 'reactstrap'
import {useEffect, useRef, useState} from "react";

// @ts-ignore
const ApexLineChart = ({ direction, warning }) => {

  const hasFetchedData = useRef(false);
  const [date, setDate] = useState([])
  const [tot, setTot] = useState([])


  const fetchData = () => {
    if (hasFetchedData.current) return;
    hasFetchedData.current = true;
    axios.get('http://localhost:8080/dashboard/get-monthly/revenue-chart')
        .then(response => {
          console.log(response.data.data);
          setDate(response.data.data.date);
          setTot(response.data.data.value);

        })
        .catch(err => {
          console.log(err);
        });
  }

  useEffect(() => {
    fetchData();
  }, []);


  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    markers: {
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: [warning]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'straight'
    },
    colors: [warning],
    grid: {
      xaxis: {
        lines: {
          show: false,
        }
      }
    },
    tooltip: {
      custom(data: { series: { [x: string]: { [x: string]: any; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
        return `<div class='px-1 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
            </div>`
      }
    },
    xaxis: {
      categories: date,/*[
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
        '21/12'
      ]*/
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  // ** Chart Series
  const series = [
    {
      data: tot/*[280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]*/
    }
  ]


  return (
    <Card className={'border-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl overflow-hidden'}>
      <CardHeader className='bg-white border-gray-200 d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div className={''}>
          <CardTitle className={'mb-75 text-xl m-0'} tag='h4'>
            Balance
          </CardTitle>
          <CardSubtitle className={'text-[13px] text-gray-400'}>Commercial networks & enterprises</CardSubtitle>
        </div>
        <div className='d-flex align-items-center flex-wrap mt-sm-0 mt-1'>
          <h5 className='fw-bolder mb-0 me-1 font-cde text-gray-500'>$ 100,000</h5>
          <Badge color='light-secondary'>
            <ArrowDown size={13} className='text-danger' />
            <span className='align-middle ms-25'>20%</span>
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        {/*// @ts-ignore*/}
        <Chart options={options} series={series} type='line' height={280} />
      </CardBody>
    </Card>
  )
}

export default ApexLineChart
