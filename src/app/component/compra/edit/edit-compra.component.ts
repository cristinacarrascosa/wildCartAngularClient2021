import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICompra, ICompraToSend } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

declare let $: any;

@Component({
  selector: 'app-edit-compra',
  templateUrl: './edit-compra.component.html',
  styleUrls: ['./edit-compra.component.css']
})
export class EditCompraComponent implements OnInit {

  oCompra: ICompra = null;
  oCompraToSend: ICompraToSend = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oCompraService: CompraService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oDateTimeService: DateTimeService 
  ) {

    this.id = this.oActivatedRoute.snapshot.params.id
    this.get();

   }

  ngOnInit(): void {

    $('#fecha').datetimepicker({
      defaultDate: "+1w",
      numberOfMonths: 1,
      dateFormat: 'dd-mm-yy',
      timeFormat: 'hh:mm',
      showAnim: "fold",
      onClose: (dateText: string, inst: any) => {
        this.oForm.controls['fecha'].setValue(dateText);
        this.oForm.controls['fecha'].markAsDirty();
      }
    });

  }

  get = ():void => {
    this.oCompraService.get(this.id).subscribe((oData: ICompra) => {
      this.oCompra = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oCompra.id],
        cantidad: [this.oCompra.cantidad, Validators.required],
        precio: [this.oCompra.precio, Validators.required],        
        fecha: [this.oDateTimeService.getStrFecha2Show(this.oCompra.fecha), Validators.required],
        descuento_usuario: [this.oCompra.descuento_usuario, Validators.required],
        descuento_producto: [this.oCompra.descuento_producto, Validators.required],
        id_producto: [this.oCompra.id_producto, Validators.required],
        id_factura: [this.oCompra.id_factura, Validators.required]
      });
    })
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oCompraToSend = {
        id: this.oForm.value.id,
        cantidad: this.oForm.value.cantidad,
        precio: this.oForm.value.precio,        
        fecha: this.oDateTimeService.getStrFecha2Send(this.oForm.value.fecha), //this.getStrFecha2Send($('#fecha').val()),
        descuento_usuario: this.oForm.value.descuento_usuario,
        descuento_producto: this.oForm.value.descuento_producto,
        id_producto: this.oForm.value.id_producto,
        id_factura: this.oForm.value.id_factura
      }

      this.update();
    }
  }

  update = ():void => {
    this.oCompraService.update(this.oCompraToSend).subscribe((result: number) => {
      if (result) {
        this.strResult = "El post se ha modificado correctamente";
      } else {
        this.strResult = "Error en la modificación del post";
      }
      this.openModal();
    })
  }

  goBack():void {
    this.oLocation.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal():void {
    this.eventsSubject.next();
  }

  closeModal():void {
    this.oRouter.navigate(["/view/" + this.id]);
  }

}
