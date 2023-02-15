import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CreateNewEmployeeComponent } from './page/employee/create-new-employee/create-new-employee.component';
import { EmpAllComponent } from './page/employee/emp-all/emp-all.component';
import { EmpProfileComponent } from './page/employee/emp-profile/emp-profile.component';
import { EmpUpdateComponent } from './page/employee/emp-update/emp-update.component';
import { EmpAddGradeComponent } from './page/employee/emp-add-grade/emp-add-grade.component';
import { EmpAddDepComponent } from './page/employee/emp-add-dep/emp-add-dep.component';
import { EmpAttendanceLiveComponent } from './page/employee/emp-attendance-live/emp-attendance-live.component';
import { CountryListComponent } from './page/client/country-list/country-list.component';
import { ClientRequirementComponent } from './page/client/client-requirement/client-requirement.component';
import { ClientListComponent } from './page/client/client-list/client-list.component';
import { ClientOrderFormComponent } from './page/client/client-order-form/client-order-form.component';
import { ClientOrderListComponent } from './page/client/client-order-list/client-order-list.component';
import { ClientProfileComponent } from './page/client/client-profile/client-profile.component';
import { ClientRegFormComponent } from './page/client/client-reg-form/client-reg-form.component';
import { ClientOrderDetailsComponent } from './page/production/client-order-details/client-order-details.component';
import { ProductionRequisitionComponent } from './page/production/production-requisition/production-requisition.component';
import { EmpSalaryReportComponent } from './page/employee/emp-salary-report/emp-salary-report.component';
import { HomeComponent } from './layout/home/home.component';
import { ListDepSalDegComponent } from './page/employee/list-dep-sal-deg/list-dep-sal-deg.component';
import { EmpAddDesigComponent } from './page/employee/emp-add-desig/emp-add-desig.component';
import { ProductionDashboardComponent } from './page/production/production-dashboard/production-dashboard.component';
import { DepartmentDashboardComponent } from './page/production/department-dashboard/department-dashboard.component';



import { CuttingDepartmentComponent } from './page/production/cutting-department/cutting-department.component';
import { StitchingDepartmentComponent } from './page/production/stitching-department/stitching-department.component';
import { DyeingDepartmentComponent } from './page/production/dyeing-department/dyeing-department.component';
import { WashingDepartmentComponent } from './page/production/washing-department/washing-department.component';
import { QualityControlDepartmentComponent } from './page/production/quality-control-department/quality-control-department.component';
import { IronDepartmentComponent } from './page/production/iron-department/iron-department.component';
import { PackagingDepartmentComponent } from './page/production/packaging-department/packaging-department.component';
import { InspectionOrderShipmentComponent } from './page/production/inspection-order-shipment/inspection-order-shipment.component';
import {ZXingScannerModule} from "@zxing/ngx-scanner";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CreateNewEmployeeComponent,
    EmpAllComponent,
    EmpProfileComponent,
    EmpUpdateComponent,
    EmpAddGradeComponent,
    EmpAddDepComponent,
    EmpAttendanceLiveComponent,
    CountryListComponent,
    ClientRequirementComponent,
    ClientListComponent,
    ClientOrderFormComponent,
    ClientOrderListComponent,
    ClientProfileComponent,
    ClientRegFormComponent,
    ClientOrderDetailsComponent,
    ProductionRequisitionComponent,
    EmpSalaryReportComponent,
    HomeComponent,
    ListDepSalDegComponent,
    EmpAddDesigComponent,
    ProductionDashboardComponent,
    DepartmentDashboardComponent,
    CuttingDepartmentComponent,
    StitchingDepartmentComponent,
    DyeingDepartmentComponent,
    WashingDepartmentComponent,
    QualityControlDepartmentComponent,
    IronDepartmentComponent,
    PackagingDepartmentComponent,
    InspectionOrderShipmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
