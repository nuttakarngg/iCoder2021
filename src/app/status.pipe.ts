import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value === 'Y') return 'ใช้งาน';
    return 'ปิดการใช้งาน';
  }
}
