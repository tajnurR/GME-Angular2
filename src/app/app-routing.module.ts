import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ClientListComponent } from './page/client/client-list/client-list.component';
import { ClientOrderFormComponent } from './page/client/client-order-form/client-order-form.component';
import { ClientOrderListComponent } from './page/client/client-order-list/client-order-list.component';
import { ClientProfileComponent } from './page/client/client-profile/client-profile.component';
import { ClientRegFormComponent } from './page/client/client-reg-form/client-reg-form.component';
import { ClientRequirementComponent } from './page/client/client-requirement/client-requirement.component';
import { CountryListComponent } from './page/client/country-list/country-list.component';
import { CreateNewEmployeeComponent } from './page/employee/create-new-employee/create-new-employee.component';
import { EmpAddDepComponent } from './page/employee/emp-add-dep/emp-add-dep.component';
import { EmpAddDesigComponent } from './page/employee/emp-add-desig/emp-add-desig.component';
import { EmpAddGradeComponent } from './page/employee/emp-add-grade/emp-add-grade.component';
import { EmpAllComponent } from './page/employee/emp-all/emp-all.component';
import { EmpAttendanceLiveComponent } from './page/employee/emp-attendance-live/emp-attendance-live.component';
import { EmpProfileComponent } from './page/employee/emp-profile/emp-profile.component';
import { EmpSalaryReportComponent } from './page/employee/emp-salary-report/emp-salary-report.component';
import { EmpUpdateComponent } from './page/employee/emp-update/emp-update.component';
import { ListDepSalDegComponent } from './page/employee/list-dep-sal-deg/list-dep-sal-deg.component';
import { ClientOrderDetailsComponent } from './page/production/client-order-details/client-order-details.component';
import { DepartmentDashboardComponent } from './page/production/department-dashboard/department-dashboard.component';
import { ProductionDashboardComponent } from './page/production/production-dashboard/production-dashboard.component';
import { ProductionRequisitionComponent } from './page/production/production-requisition/production-requisition.component';
import {CuttingDepartmentComponent} from "./page/production/cutting-department/cutting-department.component";
import {StitchingDepartmentComponent} from "./page/production/stitching-department/stitching-department.component";
import {DyeingDepartmentComponent} from "./page/production/dyeing-department/dyeing-department.component";
import {WashingDepartmentComponent} from "./page/production/washing-department/washing-department.component";
import {
  QualityControlDepartmentComponent
} from "./page/production/quality-control-department/quality-control-department.component";
import {IronDepartmentComponent} from "./page/production/iron-department/iron-department.component";
import {PackagingDepartmentComponent} from "./page/production/packaging-department/packaging-department.component";
import {
  InspectionOrderShipmentComponent
} from "./page/production/inspection-order-shipment/inspection-order-shipment.component";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'create_emp', component: CreateNewEmployeeComponent },
  { path: 'all_emp', component: EmpAllComponent },
  { path: 'emp_add_desigin', component: EmpAddDesigComponent },
  { path: 'emp_add_grade', component: EmpAddGradeComponent },
  { path: 'emp_update_grade/:id', component: EmpAddGradeComponent },
  { path: 'emp_profile', component: EmpProfileComponent },
  { path: 'emp_update', component: EmpUpdateComponent },
  { path: 'emp_attendance', component: EmpAttendanceLiveComponent },
  { path: 'emp_salary_report', component: EmpSalaryReportComponent },

  { path: 'client_list', component: ClientListComponent },
  { path: 'client_reg_form', component: ClientRegFormComponent },
  { path: 'client_order_list',component:ClientOrderListComponent},
  { path: 'client_order_form', component:ClientOrderFormComponent },
  { path: 'client_profile', component: ClientProfileComponent },
  { path: 'client_requirement', component: ClientRequirementComponent },
  { path: 'country_list', component: CountryListComponent },
  { path: 'client_order_Details',component:ClientOrderDetailsComponent},

  { path: 'production_requsition',component:ProductionRequisitionComponent},
  { path: 'list_dep_sal_deg', component: ListDepSalDegComponent },
  { path: 'add_department', component:EmpAddDepComponent},
  { path: 'production_dashboard', component:ProductionDashboardComponent},
  { path: 'department_dashboard', component:DepartmentDashboardComponent},
  {path: 'cutting_dpet', component:CuttingDepartmentComponent},
  {path: 'stitching_dpet', component:StitchingDepartmentComponent},
  {path: 'dyeing-dpet', component:DyeingDepartmentComponent},
  {path: 'washinbg-dpet', component:WashingDepartmentComponent},
  {path: 'qc_dpet', component:QualityControlDepartmentComponent},
  {path: 'iron_dpet', component: IronDepartmentComponent},
  {path: 'packaging_dpet', component:PackagingDepartmentComponent},
  {path: 'shipment_dpet', component:InspectionOrderShipmentComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
