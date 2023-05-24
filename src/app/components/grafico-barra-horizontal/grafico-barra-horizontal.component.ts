import { Component } from '@angular/core';
;

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {
  view: any[] = [700, 400];
  chartData = [
    {
      name: 'Series 1',
      value: 100
    },
    {
      name: 'Series 2',
      value: 200
    },
    {
      name: 'Series 3',
      value: 150
    }
  ];
  colorScheme = 'nightLights';
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'X Axis';
  yAxisLabel = 'Y Axis';
}
