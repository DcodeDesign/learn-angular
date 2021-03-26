import {LogService} from './log.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AlimentService {

  constructor(private logService: LogService) {
  }

  public aliments: string[] = [];

  public addOne(aliment: string): void {
    this.aliments.push(aliment);
    this.logService.log('Aliment added');
  }

  public removeOne(index: number): void {
    this.aliments.splice(index, 1);
    this.logService.log('Aliment remove');
  }
}
