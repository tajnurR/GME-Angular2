import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-emp-attendance-live',
  templateUrl: './emp-attendance-live.component.html',
  styleUrls: ['./emp-attendance-live.component.css']
})
export class EmpAttendanceLiveComponent implements OnInit {

  // latest snapshot
  public webcamImage: WebcamImage;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
