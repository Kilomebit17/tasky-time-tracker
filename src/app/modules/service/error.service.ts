import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
  constructor() {}

  handleToaster(message: string, type: 'Success' | 'warning' | 'error') {}
}
