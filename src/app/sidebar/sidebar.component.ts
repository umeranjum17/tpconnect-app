import { Component, NgModule, OnInit, ViewChild } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
@NgModule({
  imports: [BrowserModule]
})
export class SidebarComponent implements OnInit {
  element: HTMLElement;
  sideBarContent: {
    mainHeading: string;
    subHeadings: string[];
    showFiller: boolean;
  };

  populate = [];
  constructor() {
    this.populate.push({
      mainHeading: "[lorem20]",
      subHeadings: ["1", "2", "3"],
      showFiller: false
    });
    this.populate.push({
      mainHeading: "[lorem3]",
      subHeadings: ["1", "2", "3"],
      showFiller: false
    });
    this.populate.push({
      mainHeading: "[lorem20]",
      subHeadings: ["1", "2", "3"],
      showFiller: false
    });
    this.populate.push({
      mainHeading: "[lorem3]",
      subHeadings: ["1", "2", "3"],
      showFiller: false
    });
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.element = document.getElementById("toggleB");
    setTimeout(() => {
      this.element.click();
    }, 200);
  }
  ngOnInit() {}
}
