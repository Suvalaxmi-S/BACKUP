import { Component, OnInit } from '@angular/core';
import {
  from,
  interval,
  Observable,
  of,
  take,
  takeLast,
  takeWhile,
  first,
  last,
  takeUntil,
  elementAt,
  filter,
  distinct,
  skip,
  count,
  max,
} from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  stuof: Observable<number[]> = of([1, 2, 3]);
  stuof1: Observable<string> = of('hello', 'hi', 'hola');
  stufrom: Observable<string> = from(['hello', 'history', 'hola']);
  dist: Observable<number> = from([10, 20, 30, 10, 20, 30, 40, 50]);
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  value: number[];
  value2: number[];

  ngOnInit(): void {
    this.stuof.subscribe((data) => {
      console.log(data);
    });
    this.stuof1.subscribe((data) => {
      console.log(data);
    });
    this.stuof.subscribe((data) => {
      const inter$ = interval(3000);
      inter$.subscribe((inter) => {
        if (inter < 3) {
          console.log(data);
        }
      });
    });
    this.stufrom
      .pipe(takeWhile((data) => data === 'hello'))
      .subscribe((data) => {
        console.log('data', data);
      });

    this.stufrom.pipe(takeLast(2)).subscribe((data) => {
      console.log('take while', data);
    });
    this.stufrom.pipe(first()).subscribe((data) => {
      console.log('first', data);
    });
    this.stufrom.pipe(last()).subscribe((data) => {
      console.log('last', data);
    });
    this.stufrom.pipe(elementAt(0)).subscribe((data) => {
      console.log('elementAt', data);
    });
    this.stufrom.pipe(filter((data) => data.length > 4)).subscribe((data) => {
      console.log('filter', data);
    });
    const filteredValue$ = this.stufrom.pipe(filter((data) => data.length > 4));
    filteredValue$.subscribe((data) => {
      console.log('fil', data);
    });
    this.value = this.array.filter((x) => x > 4);
    console.log('val', this.value);
    this.dist.pipe(distinct()).subscribe((data) => {
      console.log('distinct', data);
    });
    this.dist.pipe(max()).subscribe((data) => {
      console.log(data);
    });
    this.dist.pipe(skip(2), count()).subscribe((data) => {
      console.log('combine', data);
    }); // skips first two values, and count number of items(combining two operators, likewise we can combine any number of operators like distict, max, count,...)
    // this.stufrom
    //   .pipe(
    //     // Use the take operator to limit the number of emissions
    //     take(1)
    //   )
    //   .subscribe((data) => {
    //     const inter$ = interval(3000);
    //     inter$.subscribe(() => {
    //       console.log(data);
    //     });
    //   });
  }
}
