import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import * as c3 from 'c3';


// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";


export interface PeriodicElement {
  OrderNum: number;
  SKU: String;
  Date: string;
  Day: string;
  Product: String;
  ML: number;
  Value: number;
  CaseID: number;
  Status: any;
  Filter: number;
  TYPE: any;
  
}





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  datedata = [];
  receiveddollar:any;
  cancelleddollar:any;
  helddollar:any;
  releasedOrdersNumber:number=0;
  cancelledOrdersNumber:number=0;
  blankOrdersNumber:number=0;
  releasedOrders:any;
  cancelledOrders:any;
  blankOrders:any;


  public tableData = [


    {
      OrderNum: 396605824,
      SKU: "AB807917",
      Date: "3/16/2022 ",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.007454,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: ""
    },
    {
      OrderNum: 396689232,
      SKU: "AB807917",
      Date: "3/16/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.01695,
      Value: 239.98,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: ""
    },
    {
      OrderNum: 396699934,
      SKU: "AB807917",
      Date: "3/16/2022 ",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.0147,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 396810424,
      SKU: "AB807915",
      Date: "3/16/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.02147,
      Value: 95.39,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 396868042,
      SKU: "AB807917",
      Date: "3/16/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.002075,
      Value: 160.71,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 396927749,
      SKU: "AB807917",
      Date: "3/16/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.07974,
      Value: 157.49,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 397295047,
      SKU: "AB807915",
      Date: "3/17/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.02172,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 397615533,
      SKU: "AB807917",
      Date: "3/17/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.1381,
      Value: 165.59,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 397657246,
      SKU: "AB807916",
      Date: "3/17/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.01466,
      Value: 99.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 397728104,
      SKU: "AB807917",
      Date: "3/17/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.001515,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 397728732,
      SKU: "AB807916",
      Date: "3/17/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.02115,
      Value: 108.24,
      CaseID: 0,
      Status: 0,
      Filter: 20099,
      TYPE: "R"
    },
    {
      OrderNum: 397735687,
      SKU: "AB807915",
      Date: "3/17/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.01537,
      Value: 96.51,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 397798925,
      SKU: "AB807913",
      Date: "3/17/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.006708,
      Value: 52.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 397881507,
      SKU: "AB807917",
      Date: "3/18/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.06684,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398178101,
      SKU: "AB807916",
      Date: "3/18/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.9005,
      Value: 99.99,
      CaseID: 38791980,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 398405736,
      SKU: "AB807913",
      Date: "3/18/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.008366,
      Value: 54.86,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 398479970,
      SKU: "AB807917",
      Date: "3/18/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.00466,
      Value: 161.05,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398635530,
      SKU: "AB807917",
      Date: "3/18/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01411,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398735108,
      SKU: "AB807917",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.004975,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398802387,
      SKU: "AB807916",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.03871,
      Value: 105.99,
      CaseID: 0,
      Status: 0,
      Filter: 20095,
      TYPE: "R"
    },
    {
      OrderNum: 398807717,
      SKU: "AB807913",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.05975,
      Value: 53.49,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398827236,
      SKU: "AB807917",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.001455,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398833002,
      SKU: "AB807917",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01459,
      Value: 149.99,
      CaseID: 38805397,
      Status: "CFRD",
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398843274,
      SKU: "AB807917",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01219,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398848992,
      SKU: "AB807912",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Basic 2021",
      ML: 0.035,
      Value: 29.99,
      CaseID: 0,
      Status: 0,
      Filter: 23012,
      TYPE: "R"
    },
    {
      OrderNum: 398849404,
      SKU: "AB807913",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.02337,
      Value: 49.99,
      CaseID: 0,
      Status: 0,
      Filter: 20095,
      TYPE: "R"
    },
    {
      OrderNum: 398855427,
      SKU: "AB807917",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.005007,
      Value: 159.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 398858231,
      SKU: "AB807912",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Basic 2021",
      ML: 0.02312,
      Value: 32.46,
      CaseID: 0,
      Status: 0,
      Filter: 20095,
      TYPE: "R"
    },
    {
      OrderNum: 398867570,
      SKU: "AB807913",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.3039,
      Value: 49.99,
      CaseID: 38794031,
      Status: "GOOD",
      Filter: 27937,
      TYPE: "C"
    },
    {
      OrderNum: 398873479,
      SKU: "AB807917",
      Date: "3/19/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.007331,
      Value: 158.39,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 399045317,
      SKU: "AB807917",
      Date: "3/20/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.009944,
      Value: 160.49,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 399061827,
      SKU: "AB807917",
      Date: "3/20/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.001521,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 399069416,
      SKU: "AB807917",
      Date: "3/21/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.005057,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 399695905,
      SKU: "AB807917",
      Date: "3/21/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01884,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 399869823,
      SKU: "AB807917",
      Date: "3/21/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.03064,
      Value: 151.49,
      CaseID: 38798195,
      Status: "GOOD",
      Filter: 28557,
      TYPE: 0
    },
    {
      OrderNum: 399903192,
      SKU: "AB807917",
      Date: "3/21/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.1574,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 399973856,
      SKU: "AB807917",
      Date: "3/21/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.06595,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 399987534,
      SKU: "AB807917",
      Date: "3/21/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.009986,
      Value: 158.39,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 400523575,
      SKU: "AB807917",
      Date: "3/22/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Business 2021",
      ML: 0.02673,
      Value: 158.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 400721005,
      SKU: "AB807917",
      Date: "3/22/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Business 2021",
      ML: 0.004228,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 400868392,
      SKU: "AB807913",
      Date: "3/22/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.5832,
      Value: 49.99,
      CaseID: 38798942,
      Status: "GOOD",
      Filter: 27937,
      TYPE: "C"
    },
    {
      OrderNum: 400870778,
      SKU: "AB807913",
      Date: "3/22/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.7748,
      Value: 54.11,
      CaseID: 38798964,
      Status: "GOOD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 400891592,
      SKU: "AB807913",
      Date: "3/22/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.006056,
      Value: 49.99,
      CaseID: 38799017,
      Status: "GOOD",
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 400911341,
      SKU: "AB807917",
      Date: "3/22/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Business 2021",
      ML: 0.00336,
      Value: 159.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 400914998,
      SKU: "AB807917",
      Date: "3/22/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Business 2021",
      ML: 0.002302,
      Value: 165.29,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 400940894,
      SKU: "AB807913",
      Date: "3/23/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.05975,
      Value: 54.11,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 401015035,
      SKU: "AB807915",
      Date: "3/23/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.4263,
      Value: 89.99,
      CaseID: 38799256,
      Status: "SFRD",
      Filter: 29199,
      TYPE: "C"
    },
    {
      OrderNum: 401017783,
      SKU: "AB807915",
      Date: "3/23/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.5,
      Value: 89.99,
      CaseID: 38799249,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 401232564,
      SKU: "AB807917",
      Date: "3/23/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.02111,
      Value: 164.91,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 401262496,
      SKU: "AB807915",
      Date: "3/23/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.00588,
      Value: 96.29,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 401700446,
      SKU: "AB807917",
      Date: "3/23/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.0073,
      Value: 158.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 401901952,
      SKU: "AB807917",
      Date: "3/23/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.04114,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 20095,
      TYPE: "R"
    },
    {
      OrderNum: 402073033,
      SKU: "AB807915",
      Date: "3/24/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.003061,
      Value: 95.61,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 402160186,
      SKU: "AB807917",
      Date: "3/24/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01216,
      Value: 158.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 402568263,
      SKU: "AB807917",
      Date: "3/24/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.008517,
      Value: 159.74,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 402576928,
      SKU: "AB807917",
      Date: "3/24/2022 ",
      Day: "Thursday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01562,
      Value: 159.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 402917684,
      SKU: "AB807915",
      Date: "3/24/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.09321,
      Value: 98.94,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 403141532,
      SKU: "AB807916",
      Date: "3/24/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.003879,
      Value: 99.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 403249996,
      SKU: "AB807913",
      Date: "3/25/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.02387,
      Value: 54.11,
      CaseID: 38803579,
      Status: "GOOD",
      Filter: 23012,
      TYPE: "R"
    },
    {
      OrderNum: 403597469,
      SKU: "AB807916",
      Date: "3/25/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.02006,
      Value: 105.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 403674367,
      SKU: "AB807915",
      Date: "3/25/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.01698,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 403682121,
      SKU: "AB807917",
      Date: "3/25/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01313,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404106559,
      SKU: "AB807917",
      Date: "3/25/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.003588,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404170795,
      SKU: "AB807916",
      Date: "3/25/2022 ",
      Day: "Friday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.07316,
      Value: 106.99,
      CaseID: 38805590,
      Status: "GOOD",
      Filter: 29960,
      TYPE: 0
    },
    {
      OrderNum: 404187476,
      SKU: "AB807913",
      Date: "3/25/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.005679,
      Value: 49.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 404249821,
      SKU: "AB807916",
      Date: "3/25/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.01683,
      Value: 106.74,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 404319608,
      SKU: "AB807916",
      Date: "3/26/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.01813,
      Value: 108.86,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 404346098,
      SKU: "AB807917",
      Date: "3/26/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.0243,
      Value: 159.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404347146,
      SKU: "AB807917",
      Date: "3/26/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01187,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404351361,
      SKU: "AB807912",
      Date: "3/26/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Basic 2021",
      ML: 0.004975,
      Value: 29.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 404383257,
      SKU: "AB807915",
      Date: "3/26/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.01632,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404396937,
      SKU: "AB807917",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01768,
      Value: 159.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404403733,
      SKU: "AB807916",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.001879,
      Value: 107.14,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 404512541,
      SKU: "AB807917",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.007357,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404516013,
      SKU: "AB807917",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.03891,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 23012,
      TYPE: "R"
    },
    {
      OrderNum: 404525220,
      SKU: "AB807915",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.01131,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404528067,
      SKU: "AB807913",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.0248,
      Value: 54.24,
      CaseID: 0,
      Status: 0,
      Filter: 23012,
      TYPE: "R"
    },
    {
      OrderNum: 404545020,
      SKU: "AB807913",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.02005,
      Value: 54.86,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 404550707,
      SKU: "AB807917",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.007502,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404551986,
      SKU: "AB807917",
      Date: "3/27/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01525,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 404578922,
      SKU: "AB807915",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.1835,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 405113893,
      SKU: "AB807917",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.0168,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 405119957,
      SKU: "AB807917",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.003341,
      Value: 162.55,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 405304450,
      SKU: "AB807917",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01181,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 405343151,
      SKU: "AB807913",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.004873,
      Value: 53.36,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 405368133,
      SKU: "AB807917",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.003768,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 405397900,
      SKU: "AB807915",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.003087,
      Value: 95.39,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 405423466,
      SKU: "AB807915",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.003916,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 405456839,
      SKU: "AB807917",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.08077,
      Value: 160.71,
      CaseID: 38808517,
      Status: "GOOD",
      Filter: 25594,
      TYPE: 0
    },
    {
      OrderNum: 405471341,
      SKU: "AB807917",
      Date: "3/28/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.02326,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 20095,
      TYPE: "R"
    },
    {
      OrderNum: 405567676,
      SKU: "AB807916",
      Date: "3/29/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.001517,
      Value: 109.24,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 407208022,
      SKU: "AB807912",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Basic 2021",
      ML: 0.2967,
      Value: 32.91,
      CaseID: 38812055,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 407217262,
      SKU: "AB807915",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.01093,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407227659,
      SKU: "AB807912",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Basic 2021",
      ML: 0.7917,
      Value: 32.91,
      CaseID: 38812092,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 407265501,
      SKU: "AB807917",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.1308,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407274198,
      SKU: "AB807917",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.002541,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407274867,
      SKU: "AB807917",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.1527,
      Value: 162.36,
      CaseID: 38812174,
      Status: "SFRD",
      Filter: 28957,
      TYPE: "C"
    },
    {
      OrderNum: 407289170,
      SKU: "AB807912",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Basic 2021",
      ML: 0.009149,
      Value: 32.46,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 407290434,
      SKU: "AB807917",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.004149,
      Value: 162.44,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407381795,
      SKU: "AB807917",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.02037,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407421625,
      SKU: "AB807915",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.001357,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407445434,
      SKU: "AB807915",
      Date: "3/30/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.007458,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407545829,
      SKU: "AB807917",
      Date: "3/31/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.7336,
      Value: 162.36,
      CaseID: 38812638,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 407553013,
      SKU: "AB807915",
      Date: "3/31/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.003571,
      Value: 99.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 407923406,
      SKU: "AB807913",
      Date: "3/31/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.008969,
      Value: 49.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 408233557,
      SKU: "AB807915",
      Date: "3/31/2022",
      Day: "Thursday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.002482,
      Value: 89.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 408291951,
      SKU: "AB807917",
      Date: "4/1/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.0296,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 20792,
      TYPE: "R"
    },
    {
      OrderNum: 408551297,
      SKU: "AB807917",
      Date: "4/1/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.008828,
      Value: 159.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 408787651,
      SKU: "AB807915",
      Date: "4/1/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.9347,
      Value: 95.95,
      CaseID: 38815619,
      Status: "GOOD",
      Filter: 23312,
      TYPE: "C"
    },
    {
      OrderNum: 408823373,
      SKU: "AB807913",
      Date: "4/1/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.02207,
      Value: 49.99,
      CaseID: 0,
      Status: 0,
      Filter: 20095,
      TYPE: "R"
    },
    {
      OrderNum: 408942033,
      SKU: "AB807917",
      Date: "4/1/2022",
      Day: "Friday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01407,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409125505,
      SKU: "AB807916",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.009644,
      Value: 106.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 409132667,
      SKU: "AB807917",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.04223,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 20099,
      TYPE: "R"
    },
    {
      OrderNum: 409141221,
      SKU: "AB807915",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.03271,
      Value: 95.39,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409150008,
      SKU: "AB807917",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.1249,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409150453,
      SKU: "AB807917",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.002962,
      Value: 160.11,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409155866,
      SKU: "AB807915",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.2227,
      Value: 95.61,
      CaseID: 38816254,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 409157193,
      SKU: "AB807917",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01956,
      Value: 161.61,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409189725,
      SKU: "AB807917",
      Date: "4/2/2022",
      Day: "Saturday ",
      Product: "Download TurboTax Business 2021",
      ML: 0.005141,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409204839,
      SKU: "AB807917",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01951,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409205422,
      SKU: "AB807915",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.3625,
      Value: 95.61,
      CaseID: 38816444,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 409205919,
      SKU: "AB807916",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.007063,
      Value: 99.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 409212816,
      SKU: "AB807916",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.005204,
      Value: 105.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 409229430,
      SKU: "AB807915",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.005953,
      Value: 95.39,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409310016,
      SKU: "AB807917",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.008145,
      Value: 160.86,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409339106,
      SKU: "AB807917",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.04384,
      Value: 449.97,
      CaseID: 38818412,
      Status: "CFRD",
      Filter: 28557,
      TYPE: 0
    },
    {
      OrderNum: 409358635,
      SKU: "AB807917",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.005444,
      Value: 161.84,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409365044,
      SKU: "AB807917",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01878,
      Value: 158.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409368592,
      SKU: "AB807916",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.371,
      Value: 105.99,
      CaseID: 38816822,
      Status: "GOOD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 409369376,
      SKU: "AB807916",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.6206,
      Value: 105.99,
      CaseID: 38816823,
      Status: "GOOD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 409376967,
      SKU: "AB807916",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.007194,
      Value: 105.99,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 409378773,
      SKU: "AB807917",
      Date: "4/3/2022",
      Day: "Sunday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.003042,
      Value: 160.86,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409380753,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.2912,
      Value: 160.49,
      CaseID: 38816859,
      Status: "SFRD",
      Filter: 29199,
      TYPE: "C"
    },
    {
      OrderNum: 409488598,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.006345,
      Value: 165.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409635230,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01352,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409688841,
      SKU: "AB807913",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Deluxe without State 2021",
      ML: 0.01063,
      Value: 54.11,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 409767868,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.1484,
      Value: 164.16,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409793153,
      SKU: "AB807916",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.2029,
      Value: 105.99,
      CaseID: 38818387,
      Status: "GOOD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 409901970,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.003279,
      Value: 149.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409905518,
      SKU: "AB807916",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.008566,
      Value: 105.49,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 409905906,
      SKU: "AB807916",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.02663,
      Value: 105.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 409998851,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.4965,
      Value: 162.36,
      CaseID: 38818715,
      Status: "SFRD",
      Filter: 27537,
      TYPE: "C"
    },
    {
      OrderNum: 410109829,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.005714,
      Value: 163.86,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 410165599,
      SKU: "AB807917",
      Date: "4/4/2022",
      Day: "Monday   ",
      Product: "Download TurboTax Business 2021",
      ML: 0.001235,
      Value: 163.3,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 410375107,
      SKU: "AB807917",
      Date: "4/5/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Business 2021",
      ML: 0.005973,
      Value: 158.99,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 410379844,
      SKU: "AB807916",
      Date: "4/5/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.0003495,
      Value: 108.19,
      CaseID: 0,
      Status: 0,
      Filter: 25694,
      TYPE: "R"
    },
    {
      OrderNum: 410871790,
      SKU: "AB807915",
      Date: "4/5/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.6151,
      Value: 95.61,
      CaseID: 38820434,
      Status: "UARS",
      Filter: 27937,
      TYPE: "C"
    },
    {
      OrderNum: 410877284,
      SKU: "AB807917",
      Date: "4/5/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Business 2021",
      ML: 0.01474,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 411161621,
      SKU: "AB807917",
      Date: "4/5/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Business 2021",
      ML: 0.009223,
      Value: 162.36,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 411210030,
      SKU: "AB807916",
      Date: "4/5/2022",
      Day: "Tuesday  ",
      Product: "Download TurboTax Home & Business with State 2021",
      ML: 0.008989,
      Value: 110.09,
      CaseID: 0,
      Status: 0,
      Filter: 29200,
      TYPE: "R"
    },
    {
      OrderNum: 411524232,
      SKU: "AB807915",
      Date: "4/6/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Premier with State 2021",
      ML: 0.008609,
      Value: 99.21,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    },
    {
      OrderNum: 411887480,
      SKU: "AB807917",
      Date: "4/6/2022",
      Day: "Wednesday",
      Product: "Download TurboTax Business 2021",
      ML: 0.008862,
      Value: 163.3,
      CaseID: 0,
      Status: 0,
      Filter: 9999,
      TYPE: "R"
    }


  ];

  ngOnInit() {

  debugger;

  this.receiveddollar="$2312.00";
  this.cancelleddollar="$834.00"
  this.helddollar="$213.00";
  // this.checkOrders();

    for (var i = 0; i < this.tableData.length; i++) {
      this.datedata.push(this.tableData[i]["Date"])
      

    }


    var chartype = c3.generate({
      bindto: '#charttype',
      data: {
          columns: [
              ['data1', 30],
              ['data2', 120],
          ],
          type : 'donut',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "Iris Petal Width"
      }
  });
  
  setTimeout(function () {
    chartype.load({
          columns: [
              ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
              ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
              ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
          ]
      });
  }, 1500);

  setTimeout(function () {
    chartype.load({
        columns: [
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
    });
}, 1500);

  


  //   var charttype = c3.generate({
  //     bindto: '#charttype',
  //     data: {
  //       json: [{label: "Download TurboTax Business 2021", val:0},{label: ">10",val:1}],
  //       keys: {
  //           x: 'label',
  //           value: ["val"],
  //       }
  //     },
  //       axis: {
  //         x: {
  //           type: 'category',
  //           tick: { centered: true},

  //          }
  //       },
  //     bar: {
  //         width: {
  //             ratio: 0.5 // this makes bar width 50% of length between ticks
  //         }
  //         // or
  //         //width: 100 // this makes bar width 100px
  //     }
  // });
  
  // setTimeout(function () {
  //   charttype.load({
  //         columns: [
             
  //         ]
  //     });
  // }, 1000);

  var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2012-12-29', '2012-12-30', '2012-12-31'],
            ['data1', 230, 300, 330],
            ['data2', 190, 230, 200],
            ['data3', 90, 130, 180],
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%m/%d',
            }
        }
    }
});

setTimeout(function () {
    chart.flow({
        columns: [
            ['x', '2013-01-11', '2013-01-21'],
            ['data1', 500, 200],
            ['data2', 100, 300],
            ['data3', 200, 120],
        ],
        duration: 1500,
        done: function () {
          chart.flow({
              columns: [
                  ['x', '2013-02-11', '2013-02-12', '2013-02-13', '2013-02-14'],
                  ['data1', 200, 300, 100, 250],
                  ['data2', 100, 90, 40, 120],
                  ['data3', 100, 100, 300, 500]
              ],
              length: 0,
              duration: 1500,
              done: function () {
                  chart.flow({
                      columns: [
                          ['x', '2013-03-01', '2013-03-02'],
                          ['data1', 200, 300],
                          ['data2', 150, 250],
                          ['data3', 100, 100]
                      ],
                      length: 2,
                      duration: 1500,
                      done: function () {
                          chart.flow({
                              columns: [
                                  ['x', '2013-03-21', '2013-04-01'],
                                  ['data1', 500, 200],
                                  ['data2', 100, 150],
                                  ['data3', 200, 400]
                                ],
                                to: '2013-03-01',
                                duration: 1500,
                            });
                        }
                    });
                }
            });
        },
    });
}, 1000);




    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });



    
  
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }


  
  checkOrders() {
    debugger;

    for (let index = 0; index < this.tableData.length; index++) {
    if(this.tableData[index].TYPE==='R'){
      this.releasedOrders.push(this.tableData[index]["TYPE"]);
      this.releasedOrdersNumber=this.releasedOrders.length;
    }

    else if(this.tableData[index].TYPE==='C'){
      this.cancelledOrders.push(this.tableData[index].TYPE);
      
    this.cancelledOrdersNumber=  this.cancelledOrders.length;

    }

    else if(this.tableData[index].TYPE===''){
      this.blankOrders.push(this.tableData[index].TYPE);
     this.blankOrdersNumber= this.blankOrders.length;

    }


  


    
      
    }
    
  }

}
