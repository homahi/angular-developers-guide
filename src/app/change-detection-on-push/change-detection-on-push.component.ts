import { Input, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface Message {
  text: string;
};

@Component({
  selector: 'app-change-detection-on-push-child',
  template: '<p>{{message.text}}</p>',
  // OnPushを指定されている場合はオブジェクトの参照が変わった時のみ反応す。
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnPushChildComponent {
  @Input() message: Message;
}

@Component({
  selector: 'app-change-detection-on-push',
  templateUrl: './change-detection-on-push.component.html',
  styleUrls: ['./change-detection-on-push.component.css']
})
export class ChangeDetectionOnPushComponent implements OnInit {
  message: Message;
  constructor() {
    this.message = { text: 'original' };
  }

  ngOnInit() {

  }

  changeProperty() {
    this.message.text = 'change property';
  }

  changeObject() {
    this.message = { text: 'chage object' };
  }
}
