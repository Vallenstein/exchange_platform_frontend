import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-chartjs-pie',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsPieComponent implements OnDestroy, OnInit {
  data: any;
  options: any;
  themeSubscription: any;
  chartData: any;
  

  constructor(
    private theme: NbThemeService,
    private location: Location,
    private route: ActivatedRoute,
    ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      
      this.chartData = [1,1,1,1,1];
      this.data = {
        labels: ['Very Much', 'Somewhat', 'Neutral', 'Not really', 'Not atAll'],
        datasets: [{
          data: this.chartData,
          backgroundColor: [
            '#3af407',
            '#27b535',
            '#f4f122',
            '#f4bd07',
            'Red'
          ],
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
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

  ngOnInit(): void{
    var id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    }

   addData(chart, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
