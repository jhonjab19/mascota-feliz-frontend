import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormCreateuserComponent } from "./form-createuser/form-createuser.component";
import { FormEditUserComponent } from "./form-edit-user/form-edit-user.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzModalModule } from "ng-zorro-antd/modal";
import { FormPhotoPetComponent } from "./form-photo-pet/form-photo-pet.component";
import { FormEditPetComponent } from "./form-edit-pet/form-edit-pet.component";

@NgModule({
    declarations: [FormCreateuserComponent, FormEditUserComponent, FormPhotoPetComponent, FormEditPetComponent],
    imports: [CommonModule, ReactiveFormsModule, NzModalModule, NzAlertModule],
    exports: [FormCreateuserComponent, FormEditUserComponent, FormPhotoPetComponent, FormEditPetComponent]
})
export class SharedModule {}
