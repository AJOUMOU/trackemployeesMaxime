import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-view-emplyee',
  templateUrl: './view-emplyee.component.html',
  styleUrls: ['./view-emplyee.component.scss']
})
export class ViewEmplyeeComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ViewEmplyeeComponent>) {}
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
