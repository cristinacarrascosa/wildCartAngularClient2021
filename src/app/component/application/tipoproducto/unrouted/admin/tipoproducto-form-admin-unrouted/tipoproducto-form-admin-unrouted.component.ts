import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { ITipoproducto, ITipoproducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { Constants } from 'src/app/model/constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tipoproducto-form-admin-unrouted',
  templateUrl: './tipoproducto-form-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-form-admin-unrouted.component.css']
})

export class TipoproductoFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  oData2Show: ITipoproducto = null;
  oData2Send: ITipoproducto2Send = null;
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.producttype;
  oForm: UntypedFormGroup = null;
  status: HttpErrorResponse = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oTipoproductoService: TipoproductoService,
    public oMetadataService: MetadataService,
  ) { }

  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        nombre: ['', Validators.required],
      });
    }
  }

  get = (): void => {
    this.oTipoproductoService
      .getOne(this.id)
      .subscribe((oData: ITipoproducto) => {
        this.oData2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.id],
          nombre: [this.oData2Show.nombre, [Validators.required, Validators.minLength(4)]]
        });
      }, (error: HttpErrorResponse) => {
        this.status = error;
        this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
      })
  };

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oData2Send = {
          id: this.oForm.value.id,
          nombre: this.oForm.value.nombre,
        };
        this.save();
      }
    }
  }

  save(): void {
    if (this.strOperation == "new") {
      this.oTipoproductoService.newOne(this.oData2Send)
        .subscribe((id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }, (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        });
    } else {
      this.oTipoproductoService
        .updateOne(this.oData2Send)
        .subscribe((id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }, (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        });
    }
  };

}
