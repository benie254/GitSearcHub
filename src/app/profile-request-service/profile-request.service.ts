import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  constructor() { }
}
