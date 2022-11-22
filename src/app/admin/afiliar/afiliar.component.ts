import { Component, OnInit } from "@angular/core";
import { ValidatorService } from "src/app/services/validator.service";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { HttpServiceService } from "./../../services/http-service.service";
import { Router } from "@angular/router";
import { NzModalService } from "ng-zorro-antd/modal";

@Component({
    selector: "admin-afiliar",
    templateUrl: "./afiliar.component.html",
    styleUrls: ["./afiliar.component.scss"]
})
export class AfiliarComponent implements OnInit {
    requestForm: FormGroup = this.fb.group({
        name: ["", this.vs.validName],
        age: ["", this.vs.validAgePet],
        breed: ["", this.vs.validName],
        color: ["", this.vs.validName],
        city: ["", this.vs.validName],
        address: ["", this.vs.validAddress],
        date: [""],
        description: ["", this.vs.validRequired],
        ownerId: ["637bd625440f7a0440053946"]
    });

    isDisable: boolean = false;

    constructor(
        public fb: FormBuilder,
        public vs: ValidatorService,
        public httpService: HttpServiceService,
        private router: Router,
        private modalService: NzModalService
    ) {}

    ngOnInit(): void {
        this.requestForm.get("date")?.setValue(Date.now());
    }

    campoEsValido(campo: string) {
        return this.requestForm.controls[campo]?.errors && this.requestForm.controls[campo].touched;
    }

    getError(campo: string): string {
        const error = this.requestForm.controls[campo].errors;

        return error ? error["message"] : null;
    }

    enviar() {
        if (this.requestForm.invalid) {
            this.requestForm.markAllAsTouched();
            return;
        }

        this.httpService.postDatos("requests", this.requestForm.getRawValue()).subscribe({
            next: response => {
                console.log(response);
                this.router.navigate(["dashboard/listar"]);
            },
            error: error => {
                this.modalService.error({
                    nzTitle: "Error",
                    nzContent: error?.error?.error?.message
                });
            }
        });
    }
}
