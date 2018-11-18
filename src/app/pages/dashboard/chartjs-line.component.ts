import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-line',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018s'],
        datasets: [{
          data: [12, 14, 12, 15, 16, 12, 16, 18, 20, 18, 20, 18, 20, 22, 24],
          label: 'iLab 1',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }, {
          data: [0, 0, 0, 0, 0, 10, 12, 14, 16, 18, 21, 17, 20, 20, 22],
          label: 'iLab 2',
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
          borderColor: colors.danger,
        }, {
          data: [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 10, 12,],
          label: 'iLab X',
          backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        }, {
          data: [12, 26, 38, 53, 69, 81, 109, 133, 146, 164, 190, 214, 250, 278, 312],
          label: 'Accumulated',
          backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
          hidden: true,
        },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
